import type { Metadata } from "next";
import { LegalLayout, LegalSection, LegalList } from "@/components/legal-layout";
import { site } from "@/lib/content";

const title = "Terms & Conditions | JAVE AGENCY";
const description =
  "The terms and conditions governing use of the JAVE AGENCY website and project inquiries submitted through it.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { title, description, url: "/terms-and-conditions" },
  twitter: { title, description },
};

const LAST_UPDATED = "August 4, 2026";

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated={LAST_UPDATED}
      intro="These Terms & Conditions govern your use of this website and any inquiries submitted through it."
    >
      <LegalSection number="01" title="Acceptance of Terms">
        <p>
          By accessing or using this website, you agree to be bound by these Terms &amp; Conditions.
          If you do not agree with any part of these terms, please do not use this website.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Services">
        <p>JAVE AGENCY offers services that may include:</p>
        <LegalList
          items={[
            "Web design and development",
            "Branding and visual identity",
            "Marketing consulting",
            "Social media content creation",
            "Paid advertising strategy",
            "Automation and AI workflow consulting",
            "Conversion optimization and digital strategy",
          ]}
        />
      </LegalSection>

      <LegalSection number="03" title="Project Inquiries">
        <p>
          Submitting the contact form on this website is only a request for information or
          consultation. It does not, by itself:
        </p>
        <LegalList
          items={[
            "create a client relationship,",
            "create a partnership,",
            "create an employment relationship,",
            "or constitute a binding agreement of any kind.",
          ]}
        />
        <p>JAVE AGENCY may accept or decline any inquiry or project at its sole discretion.</p>
      </LegalSection>

      <LegalSection number="04" title="Intellectual Property">
        <p>
          Unless otherwise stated in writing, all content on this website — including text,
          graphics, branding, layouts, and other materials — is the property of JAVE AGENCY and may
          not be copied, reproduced, or used without prior written permission.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Client Materials">
        <p>
          Clients are solely responsible for ensuring they hold the necessary rights, licenses, and
          permissions for any logos, images, videos, text, trademarks, or other materials they
          provide to JAVE AGENCY for use in a project.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Proposals, Pricing, and Payments">
        <p>
          Any pricing displayed or discussed on this website or in preliminary conversations is
          informational only.
        </p>
        <p>
          Final scope, deliverables, timelines, and payment terms are defined in a separate written
          proposal, quotation, or service agreement. No work is guaranteed or begun until both
          parties have agreed to those terms in writing.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Limitation of Liability">
        <p>
          This website is provided on an &ldquo;as available&rdquo; and &ldquo;as is&rdquo; basis.
          To the fullest extent permitted by applicable law, JAVE AGENCY shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising from your use
          of, or reliance on, this website or its content.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Third-Party Services">
        <p>This website may rely on third-party providers, such as:</p>
        <LegalList
          items={[
            "hosting services,",
            "analytics providers,",
            "email delivery services,",
            "form processing tools,",
            "content delivery networks,",
            "or other infrastructure providers.",
          ]}
        />
        <p>
          JAVE AGENCY is not responsible for the independent practices or policies of these
          third-party services.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Governing Law">
        <p>
          These Terms shall be governed by the applicable laws of the jurisdiction in which JAVE
          AGENCY operates, unless otherwise required by applicable consumer protection laws.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Contact Information">
        <p>
          Questions about these Terms &amp; Conditions can be sent to{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
