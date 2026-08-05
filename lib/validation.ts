import { z } from "zod";
import { budgetRanges, projectTypes } from "@/lib/content";

/**
 * Strips characters that let a value break out of its intended context —
 * CR/LF (email header injection), angle brackets (raw HTML). Trims
 * whitespace. Applied to every free-text field before it ever reaches an
 * email template or log line.
 */
function sanitizeText(value: string): string {
  return value
    .replace(/[\r\n]+/g, " ")
    .replace(/[<>]/g, "")
    .trim();
}

const sanitizedString = (max: number) => z.string().trim().max(max).transform(sanitizeText);

export const contactFormSchema = z.object({
  name: sanitizedString(120).pipe(z.string().min(1, "Please enter your name.")),
  email: z
    .string()
    .trim()
    .max(254)
    .email("Please enter a valid email address.")
    .transform((v) => v.toLowerCase()),
  company: sanitizedString(160).optional().default(""),
  projectType: z
    .enum(projectTypes as [string, ...string[]])
    .optional()
    .or(z.literal(""))
    .default(""),
  budgetRange: z
    .enum(budgetRanges as [string, ...string[]])
    .optional()
    .or(z.literal(""))
    .default(""),
  message: sanitizedString(5000).pipe(z.string().min(1, "Please enter a message.")),
  consent: z.literal(true, {
    message: "You must agree to be contacted before submitting.",
  }),
  // Honeypot: a real visitor never fills this in. Any non-empty value here
  // is treated as spam upstream of this schema.
  website: z.string().optional().default(""),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export type ContactFormFieldErrors = Partial<Record<keyof ContactFormInput, string>>;
