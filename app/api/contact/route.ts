import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validation";

// Resend's SDK requires the Node.js runtime (not Edge).
export const runtime = "nodejs";

const GENERIC_ERROR = "Something went wrong. Please try again in a moment.";

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  const { allowed, retryAfterSeconds } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        fieldErrors[key] = issue.message;
      }
    }
    return NextResponse.json(
      { ok: false, message: "Please check the form and try again.", fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot: a filled-in "website" field means it's a bot. Respond exactly
  // like a real success so the bot has no signal to adapt on, but never
  // send any email.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch shortly." });
  }

  try {
    await sendContactEmails(parsed.data);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Contact form send error:", error);
    }
    return NextResponse.json({ ok: false, message: GENERIC_ERROR }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch shortly." });
}
