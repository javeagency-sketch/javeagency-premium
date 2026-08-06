import { Resend } from "resend";
import type { ContactFormInput } from "@/lib/validation";

const FROM_ADDRESS = `Javé Agency <${process.env.RESEND_FROM_EMAIL ?? "hello@javeagency.com"}>`;

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  resendClient ??= new Resend(apiKey);
  return resendClient;
}

/** Defense-in-depth: validation.ts already strips '<' and '>', this also
 * neutralizes '&' and quotes before values are interpolated into HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function layout(bodyHtml: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f7f0e3;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f0e3;padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#fffdf8;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:32px 40px 24px 40px;border-bottom:1px solid #e7ddc9;">
                <span style="font-size:20px;font-weight:600;color:#1c1a17;">Jav<span style="color:#b8563a;">é</span> Agency</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px;color:#1c1a17;font-size:15px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px;border-top:1px solid #e7ddc9;color:#8a8378;font-size:12px;">
                Javé Agency · javeagency.com
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function notificationHtml(input: ContactFormInput): string {
  const rows: [string, string][] = [
    ["Name", input.name],
    ["Email", input.email],
    ["Company", input.company || "—"],
    ["Project type", input.projectType || "—"],
    ["Budget range", input.budgetRange || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#8a8378;font-size:13px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;font-size:14px;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return layout(`
    <h1 style="font-size:19px;margin:0 0 20px 0;">New inquiry from ${escapeHtml(input.name)}</h1>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">${rowsHtml}</table>
    <p style="color:#8a8378;font-size:13px;margin:0 0 6px 0;">Message</p>
    <p style="white-space:pre-wrap;margin:0;">${escapeHtml(input.message)}</p>
  `);
}

function autoReplyHtml(input: ContactFormInput): string {
  return layout(`
    <h1 style="font-size:19px;margin:0 0 16px 0;">Thanks for reaching out, ${escapeHtml(input.name)}.</h1>
    <p style="margin:0 0 16px 0;">
      We've received your inquiry and a member of the Javé Agency team will follow up
      within 1–2 business days.
    </p>
    <p style="margin:0;color:#8a8378;">
      Javé Agency · Design, strategy and growth for ambitious businesses.
    </p>
  `);
}

export async function sendContactEmails(input: ContactFormInput): Promise<void> {
  const toAddress = process.env.CONTACT_EMAIL;
  if (!toAddress) {
    throw new Error("CONTACT_EMAIL is not configured.");
  }

  const resend = getResendClient();

  const { error } = await resend.batch.send([
    {
      from: FROM_ADDRESS,
      to: [toAddress],
      replyTo: input.email,
      subject: `New project inquiry from ${input.name}`,
      html: notificationHtml(input),
    },
    {
      from: FROM_ADDRESS,
      to: [input.email],
      subject: "We received your inquiry | JAVE AGENCY",
      html: autoReplyHtml(input),
    },
  ]);

  if (error) {
    // Safe to log: Resend's error object describes delivery/config
    // failures (e.g. unverified domain), never the submitted form content.
    console.error("Resend send failed:", error);
    throw new Error(`Failed to send contact email: ${error.name} — ${error.message}`);
  }
}
