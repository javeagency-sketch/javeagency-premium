"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { budgetRanges, projectTypes } from "@/lib/content";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company" name="company" />
      <SelectField label="Project type" name="projectType" options={projectTypes} />
      <SelectField
        label="Budget range"
        name="budget"
        options={budgetRanges}
        className="sm:col-span-2"
      />
      <label className="flex flex-col gap-2 text-sm sm:col-span-2">
        <span className="text-ink-soft">
          Message <span className="text-terracotta">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="border-line bg-paper focus:border-terracotta resize-none rounded-md border px-4 py-3 text-[15px] transition-colors outline-none"
        />
      </label>

      <div className="sm:col-span-2">
        <SubmitButton />
        {state.status !== "idle" && (
          <p
            role="status"
            className={`mt-4 text-sm ${state.status === "success" ? "text-terracotta-dark" : "text-red-600"}`}
          >
            {state.message}
          </p>
        )}
        <p className="text-ink-soft/80 mt-5 text-[12.5px] leading-relaxed">
          Submitting this form is a request for information and does not create a client,
          contractual, or business relationship. Any information you share is handled according to
          our{" "}
          <Link
            href="/privacy-policy"
            className="decoration-line hover:text-terracotta-dark underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-ink-soft">
        {label} {required && <span className="text-terracotta">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="border-line bg-paper focus:border-terracotta rounded-md border px-4 py-3 text-[15px] transition-colors outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm ${className ?? ""}`}>
      <span className="text-ink-soft">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="border-line bg-paper focus:border-terracotta rounded-md border px-4 py-3 text-[15px] transition-colors outline-none"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-ink text-paper hover:bg-terracotta-dark w-full rounded-sm py-4 text-[13px] font-semibold tracking-[0.04em] uppercase transition-colors disabled:opacity-60 sm:w-auto sm:px-10"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}
