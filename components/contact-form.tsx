"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { budgetRanges, projectTypes } from "@/lib/content";

type FormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  message: string;
  consent: boolean;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budgetRange: "",
  message: "",
  consent: false,
  website: "",
};

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const pending = status === "sending";

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFieldErrors({});
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
        setFieldErrors(data.fieldErrors ?? {});
        return;
      }

      setStatus("success");
      setMessage(data.message || "Thanks — we'll be in touch shortly.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Honeypot — left empty by real visitors, invisible and unreachable
          to them, but many simple bots fill every field they find. */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <Field
        label="Name"
        name="name"
        required
        value={values.name}
        onChange={(v) => update("name", v)}
        error={fieldErrors.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        value={values.email}
        onChange={(v) => update("email", v)}
        error={fieldErrors.email}
      />
      <Field
        label="Company"
        name="company"
        value={values.company}
        onChange={(v) => update("company", v)}
        error={fieldErrors.company}
      />
      <SelectField
        label="Project type"
        name="projectType"
        options={projectTypes}
        value={values.projectType}
        onChange={(v) => update("projectType", v)}
      />
      <SelectField
        label="Budget range"
        name="budgetRange"
        options={budgetRanges}
        value={values.budgetRange}
        onChange={(v) => update("budgetRange", v)}
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
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className="border-line bg-paper focus:border-terracotta resize-none rounded-md border px-4 py-3 text-[15px] transition-colors outline-none"
        />
        {fieldErrors.message && (
          <p id="message-error" role="alert" className="text-sm text-red-600">
            {fieldErrors.message}
          </p>
        )}
      </label>

      <label className="flex items-start gap-3 text-sm sm:col-span-2">
        <input
          type="checkbox"
          required
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
          aria-invalid={Boolean(fieldErrors.consent)}
          aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
          className="border-line text-terracotta mt-0.5 h-4 w-4 shrink-0 rounded"
        />
        <span className="text-ink-soft leading-relaxed">
          I agree that JAVE AGENCY may use the information provided to respond to my inquiry.{" "}
          <span className="text-terracotta">*</span>
        </span>
      </label>
      {fieldErrors.consent && (
        <p id="consent-error" role="alert" className="-mt-3 text-sm text-red-600 sm:col-span-2">
          {fieldErrors.consent}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="bg-ink text-paper hover:bg-terracotta-dark w-full rounded-sm py-4 text-[13px] font-semibold tracking-[0.04em] uppercase transition-colors disabled:opacity-60 sm:w-auto sm:px-10"
        >
          {pending ? "Sending…" : "Send Message"}
        </button>

        {status !== "idle" && status !== "sending" && (
          <p
            role={status === "error" ? "alert" : "status"}
            className={`mt-4 text-sm ${status === "success" ? "text-terracotta-dark" : "text-red-600"}`}
          >
            {message}
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
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="border-line bg-paper focus:border-terracotta rounded-md border px-4 py-3 text-[15px] transition-colors outline-none"
      />
      {error && (
        <p id={`${name}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm ${className ?? ""}`}>
      <span className="text-ink-soft">{label}</span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
