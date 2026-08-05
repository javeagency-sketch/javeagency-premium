import type { Metadata } from "next";
import { LegalLayout, LegalSection, LegalList } from "@/components/legal-layout";
import { site } from "@/lib/content";

const title = "Privacy Policy | JAVE AGENCY";
const description =
  "How JAVE AGENCY collects, uses, and protects information submitted through our website contact form.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title, description, url: "/privacy-policy" },
  twitter: { title, description },
};

const LAST_UPDATED = "August 4, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro="This Privacy Policy explains how JAVE AGENCY collects, uses, and protects information submitted through this website."
    >
      <LegalSection number="01" title="Introduction">
        <p>
          JAVE AGENCY (&ldquo;JAVE AGENCY,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;) provides marketing, web design, branding, automation, and digital
          strategy services to clients in Chile, the United States, and Colombia, with a primary
          focus on clients based in the United States. This Privacy Policy applies to the
          information collected through this website.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Information We Collect">
        <p>
          We collect only the information you choose to submit through our contact form, which may
          include:
        </p>
        <LegalList
          items={[
            "Name",
            "Email address",
            "Company name (if provided)",
            "Project type (if provided)",
            "Budget range (if provided)",
            "Message content",
          ]}
        />
      </LegalSection>

      <LegalSection number="03" title="How We Use Information">
        <p>Information submitted through our contact form is used solely to:</p>
        <LegalList
          items={[
            "respond to inquiries,",
            "evaluate potential projects,",
            "prepare proposals or estimates,",
            "communicate with prospective clients,",
            "improve customer support and inquiry handling.",
          ]}
        />
      </LegalSection>

      <LegalSection number="04" title="Data Sharing">
        <p>
          We do not sell personal information, and we do not share the information you submit with
          third parties for advertising purposes.
        </p>
        <p>
          Information may be processed by trusted service providers necessary to operate this
          website, host the site, receive contact form submissions, or communicate with clients (for
          example, hosting or email delivery providers).
        </p>
      </LegalSection>

      <LegalSection number="05" title="International Operations">
        <p>
          JAVE AGENCY operates internationally. Inquiries submitted through this website may be
          handled by team members or service providers located in Chile, the United States, or
          Colombia. By submitting information through this website, you acknowledge that it may be
          processed in any of these locations.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Data Retention">
        <p>Inquiry information is retained only for as long as reasonably necessary to:</p>
        <LegalList
          items={[
            "respond to the request,",
            "maintain business records,",
            "comply with applicable legal obligations,",
            "resolve disputes if necessary.",
          ]}
        />
      </LegalSection>

      <LegalSection number="07" title="Security">
        <p>
          We use reasonable administrative, technical, and organizational measures to help protect
          the information you submit. However, no method of transmission over the internet, and no
          method of electronic storage, can be guaranteed to be completely secure.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Your Rights">
        <p>
          You may request access to, correction of, or deletion of the personal information you have
          submitted to us by contacting{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="09" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected on this
          page, and the &ldquo;Last updated&rdquo; date above will indicate when the policy was last
          revised.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
