"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }

  const payload = {
    name,
    email,
    company: formData.get("company")?.toString() ?? "",
    projectType: formData.get("projectType")?.toString() ?? "",
    budget: formData.get("budget")?.toString() ?? "",
    message,
  };

  // Prepared for Resend: set RESEND_API_KEY and CONTACT_TO_EMAIL, then send the email here.
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Javé Agency <hello@javeagency.com>",
  //   to: process.env.CONTACT_TO_EMAIL!,
  //   subject: `New project inquiry from ${payload.name}`,
  //   replyTo: payload.email,
  //   text: JSON.stringify(payload, null, 2),
  // });

  if (process.env.NODE_ENV !== "production") {
    console.log("Contact form submission:", payload);
  }

  return { status: "success", message: "Thanks — we'll get back to you within one business day." };
}
