import Link from 'next/link'

export default function TermsOfService() {
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
          <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">Terms of Service</h1>
          <p className="text-muted text-sm">Last updated: July 15, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Introduction</h2>
            <p className="text-ink leading-relaxed">
              Welcome to <strong>Francis Ganyo Software Development Services</strong>. These Terms of Service
              ("Terms") govern your access to and use of our website at <strong>https://francisganyo.dev</strong> (the
              "Site") and any services, content, or features we provide (collectively, the "Services").
            </p>
            <p className="text-ink leading-relaxed mt-4">
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              If you do not agree to these Terms, please do not access or use our Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Acceptance of Terms</h2>
            <p className="text-ink leading-relaxed">
              By using our Services, you represent and warrant that you have read, understood, and agree to be
              bound by these Terms. You also represent that you have the legal capacity to enter into these Terms
              or that you have obtained the necessary consent from your parent or legal guardian if you are under
              the age of majority in your jurisdiction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Description of Services</h2>
            <p className="text-ink leading-relaxed mb-4">
              Francis Ganyo provides the following services:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Software Development:</strong> Custom web application development, API development,
                backend systems, and full-stack solutions tailored to your business needs.
              </li>
              <li>
                <strong>Consulting Services:</strong> Technical consulting, system architecture design, and
                technology advisory services.
              </li>
              <li>
                <strong>Payment Integration:</strong> Integration with payment gateways including Paystack,
                Flutterwave, MTN Mobile Money, and Stripe for seamless transaction processing.
              </li>
              <li>
                <strong>Fintech Solutions:</strong> Development of financial technology applications and
                infrastructure.
              </li>
              <li>
                <strong>Automation Tools:</strong> Custom automation scripts and tools to streamline your
                business processes.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">User Responsibilities</h2>
            <p className="text-ink leading-relaxed mb-4">
              When using our Services, you agree to:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>Provide accurate, current, and complete information when required</li>
              <li>Comply with all applicable laws, regulations, and these Terms</li>
              <li>Not use our Services for any illegal, harmful, or unauthorized purpose</li>
              <li>Not violate, misappropriate, or infringe upon the rights of any third party</li>
              <li>Not engage in any activity that could interfere with or disrupt our Services</li>
              <li>Not attempt to gain unauthorized access to any portion of our Services or systems</li>
              <li>Not transmit any viruses, worms, defects, or harmful code</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Intellectual Property</h2>
            <p className="text-ink leading-relaxed mb-4">
              The Services and all content, features, and functionality (including but not limited to text,
              graphics, logos, images, software, and code) are the property of Francis Ganyo or our content
              providers and are protected by international copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>
            <p className="text-ink leading-relaxed">
              These Terms do not grant you any right, title, or interest in the Services or our intellectual
              property. You may not reproduce, publish, transmit, distribute, modify, create derivative works
              from, sell, or exploit in any way any portion of our Services or intellectual property without our
              express written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">User Content</h2>
            <p className="text-ink leading-relaxed mb-4">
              You retain all rights to any content you submit, post, or display on or through our Services
              ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free
              license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish,
              transmit, display, and distribute such User Content in any and all media or distribution methods.
            </p>
            <p className="text-ink leading-relaxed">
              You represent and warrant that you have all the rights, power, and authority necessary to grant
              the rights granted herein to any User Content submitted by you, and that such User Content does
              not violate these Terms or any applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Prohibited Activities</h2>
            <p className="text-ink leading-relaxed mb-4">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>Using our Services for any illegal or unauthorized purpose</li>
              <li>Violating any applicable local, state, national, or international law</li>
              <li>Exploiting, harming, or attempting to exploit or harm minors in any way</li>
              <li>Harassing, abusing, or threatening others</li>
              <li>Engaging in spam, phishing, or other deceptive practices</li>
              <li>Transmitting chain letters, junk mail, or other unsolicited messages</li>
              <li>Attempting to probe, scan, or test the vulnerability of our systems</li>
              <li>Impersonating or misrepresenting your affiliation with any person or entity</li>
              <li>Forging headers or manipulating identifiers to disguise the origin of any content</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Payments and Billing</h2>
            <p className="text-ink leading-relaxed mb-4">
              We use third-party payment processors (including Paystack) to handle payment transactions.
              Your use of these payment services is governed by the terms and conditions of the respective
              payment processor.
            </p>
            <p className="text-ink leading-relaxed">
              All fees and payment terms will be clearly communicated to you before any payment is processed.
              You agree to pay all charges incurred by you or any user under your account at the prices then
              in effect for the Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Termination</h2>
            <p className="text-ink leading-relaxed mb-4">
              We may terminate or suspend your access to our Services at any time, without prior notice or
              liability, for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>Breach of these Terms or applicable law</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Our belief that your use of the Services poses a risk to us or our other users</li>
              <li>Our discontinuation of the Services</li>
            </ul>
            <p className="text-ink leading-relaxed mt-4">
              Upon termination, your right to use our Services will immediately cease. We reserve the right to
              permanently delete your account and any associated data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Disclaimers and Limitation of Liability</h2>
            <p className="text-ink leading-relaxed mb-4">
              Our Services are provided "AS IS" and "AS AVAILABLE" without warranty of any kind, either express
              or implied. We disclaim all warranties, whether express, implied, statutory, or otherwise,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>Any warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Any warranties that the Services will be uninterrupted, secure, or error-free</li>
              <li>Any warranties that the results obtained from the use of the Services will be accurate or reliable</li>
            </ul>
            <p className="text-ink leading-relaxed mt-4">
              To the maximum extent permitted by law, Francis Ganyo shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to damages for
              loss of profits, goodwill, use, data, or other intangible losses resulting from your use or
              inability to use the Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Indemnification</h2>
            <p className="text-ink leading-relaxed">
              You agree to defend, indemnify, and hold harmless Francis Ganyo and our affiliates, and their
              respective directors, officers, employees, and agents from and against any and all claims,
              damages, obligations, losses, liabilities, costs, debts, and expenses (including but not limited
              to attorney's fees) arising from:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4 mt-4">
              <li>Your use of and access to our Services</li>
              <li>Your violation of any provision of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any intellectual
                property right or privacy right</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Governing Law</h2>
            <p className="text-ink leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of Ghana, without regard
              to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
              shall not operate as a waiver of such right or provision.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Changes to Terms</h2>
            <p className="text-ink leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of any changes by
              posting the revised Terms on the Site and updating the "Last updated" date. Your continued use of
              our Services after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Contact Us</h2>
            <p className="text-ink leading-relaxed">
              If you have any questions about these Terms or our Services, please contact us at:
            </p>
            <p className="text-ink leading-relaxed mt-2">
              Email: francisganyo98@gmail.com
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl text-ink mb-4">Business Description</h2>
            <p className="text-ink leading-relaxed">
              Francis Ganyo is a professional software developer and consultant based in Ghana, West Africa.
              We specialize in building scalable, production-ready software solutions for businesses and
              individuals. Our expertise includes:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4 mt-4">
              <li>
                <strong>Backend Development:</strong> Django, Node.js, Express.js, RESTful APIs
              </li>
              <li>
                <strong>Frontend Development:</strong> React.js, Next.js, TypeScript, Tailwind CSS
              </li>
              <li>
                <strong>Database Design:</strong> PostgreSQL, MongoDB, Firebase, Prisma ORM
              </li>
              <li>
                <strong>Payment Integration:</strong> Paystack, Flutterwave, MTN Mobile Money, Stripe
              </li>
              <li>
                <strong>DevOps & Cloud:</strong> Docker, Git, AWS, DigitalOcean, Netlify
              </li>
              <li>
                <strong>Fintech Solutions:</strong> Digital payment systems, transaction processing,
                financial application development
              </li>
            </ul>
            <p className="text-ink leading-relaxed mt-4">
              We serve clients globally with a focus on African markets, helping businesses leverage technology
              to solve real-world problems and drive growth.
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
