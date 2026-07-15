import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-paper min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-ink mb-6 inline-block hover:text-accent transition-colors"
          >
            FG<span className="text-accent">.</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">Privacy Policy</h1>
          <p className="text-muted text-sm">Last updated: July 15, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Introduction</h2>
            <p className="text-ink leading-relaxed">
              Francis Ganyo ("we", "our", "us") respects your privacy and is committed to protecting your
              personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website <strong>https://francisganyo.dev</strong> (the "Site") or use our
              services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Information We Collect</h2>
            <p className="text-ink leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Personal Information:</strong> When you contact us through the Site, you may provide
                your name, email address, phone number, and any other information you choose to share.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and use the Site, including your
                IP address, browser type, operating system, referring URLs, and pages visited.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking
                technologies to enhance your experience and analyze Site usage.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">How We Use Your Information</h2>
            <p className="text-ink leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve and customize our Site and services</li>
              <li>To analyze usage trends and Site performance</li>
              <li>To detect, prevent, and address technical issues or security concerns</li>
              <li>To send you updates, newsletters, or marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">How We Share Your Information</h2>
            <p className="text-ink leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following
              limited circumstances:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>
                <strong>With Service Providers:</strong> Third-party vendors who help us operate the Site or
                provide services to you (e.g., hosting providers, analytics services).
              </li>
              <li>
                <strong>For Legal Reasons:</strong> If required by law or in response to valid requests by
                public authorities or to protect our rights, privacy, safety, or property.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information for any other purpose with
                your explicit consent.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Data Security</h2>
            <p className="text-ink leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data
              against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
              However, no method of transmission over the Internet or electronic storage is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Your Rights and Choices</h2>
            <p className="text-ink leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw your consent at any time (if we rely on consent as the legal basis for processing)</li>
            </ul>
            <p className="text-ink leading-relaxed mt-4">
              To exercise any of these rights, please contact us at the email address provided at the end of
              this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Data Retention</h2>
            <p className="text-ink leading-relaxed">
              We will retain your personal information only for as long as necessary for the purposes set out
              in this Privacy Policy, or as required by applicable law. When your personal information is no
              longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Third-Party Links</h2>
            <p className="text-ink leading-relaxed">
              Our Site may contain links to third-party websites or services that are not operated by us. This
              Privacy Policy does not address the privacy practices of such third parties. We encourage you to
              review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Children's Privacy</h2>
            <p className="text-ink leading-relaxed">
              Our Site is not intended for use by children under the age of 13 (or 16 in the European Economic
              Area). We do not knowingly collect personal information from children under this age. If you are
              a parent or guardian and you are aware that your child has provided us with personal data, please
              contact us. If we become aware that we have collected personal data from children without verification
              of parental consent, we will take steps to remove that information from our servers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">International Data Transfers</h2>
            <p className="text-ink leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state,
              province, country, or other governmental jurisdiction where the data protection laws may differ
              from those in your jurisdiction. We will take all steps reasonably necessary to ensure that your data
              is treated securely and in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl text-ink mb-4">Contact Us</h2>
            <p className="text-ink leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-ink leading-relaxed mt-2">
              Email: francisganyo98@gmail.com
            </p>
          </section>

          {/* Back to home */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
