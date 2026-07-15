import Link from 'next/link'

export default function RefundPolicy() {
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
          <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">Refund Policy</h1>
          <p className="text-muted text-sm">Last updated: July 15, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Introduction</h2>
            <p className="text-ink leading-relaxed">
              Thank you for using the services of <strong>Francis Ganyo Software Development</strong>. We
              value your business and want to ensure you understand our refund policy for all services and
              products we provide.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">General Refund Policy</h2>
            <p className="text-ink leading-relaxed mb-4">
              Due to the custom nature of software development and consulting services, we generally do not
              offer refunds once work has commenced or been delivered. However, we understand that
              circumstances may arise that warrant special consideration.
            </p>
            <p className="text-ink leading-relaxed">
              All refund requests are evaluated on a case-by-case basis at our sole discretion. We encourage
              you to contact us before making a purchase if you have any concerns or questions about our refund
              policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Service-Specific Refund Terms</h2>

            <div className="mb-8">
              <h3 className="font-display text-xl text-ink mb-3">Custom Software Development</h3>
              <p className="text-ink leading-relaxed mb-4">
                For custom software development projects:
              </p>
              <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
                <li>
                  <strong>Deposit Payments:</strong> A non-refundable deposit (typically 30-50% of the total
                  project fee) is required to initiate work. This deposit secures your project in our queue and
                  covers initial planning and setup costs.
                </li>
                <li>
                  <strong>Milestone Payments:</strong> Payments made at project milestones are generally
                  non-refundable as work has already been completed to that stage.
                </li>
                <li>
                  <strong>Final Payment:</strong> The final payment is due upon project completion and
                  delivery. No refund is provided after delivery.
                </li>
                <li>
                  <strong>Project Cancellation:</strong> If you cancel a project after work has begun, you
                  are responsible for paying for all work completed up to the cancellation date at our
                  standard hourly rate.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-xl text-ink mb-3">Consulting Services</h3>
              <p className="text-ink leading-relaxed mb-4">
                For consulting and advisory services:
              </p>
              <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
                <li>
                  <strong>Hourly Consulting:</strong> Payment is due in advance for blocks of consulting hours.
                  Unused hours may be refunded at our discretion if requested within 7 days of purchase, minus
                  any hours already used.
                </li>
                <li>
                  <strong>Retainer Agreements:</strong> Retainer fees are non-refundable. Unused retainer
                  hours may be carried forward to the next billing period at our discretion.
                </li>
                <li>
                  <strong>Session Cancellation:</strong> If you cancel a scheduled consulting session with
                  less than 24 hours' notice, the full session fee will be charged. With 24+ hours' notice, the
                  session may be rescheduled without penalty.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-xl text-ink mb-3">Pre-Built Products & Templates</h3>
              <p className="text-ink leading-relaxed mb-4">
                For any pre-built software, templates, or digital products we may offer:
              </p>
              <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
                <li>
                  <strong>Digital Downloads:</strong> Due to the instantaneous delivery of digital products,
                  we do not offer refunds for digital downloads once the purchase is complete and the product
                  has been delivered.
                </li>
                <li>
                  <strong>Defective Products:</strong> If a digital product is defective or does not work as
                  described, we will either provide a replacement or refund at our discretion, provided you
                  report the issue within 14 days of purchase.
                </li>
                <li>
                  <strong>Licensing:</strong> All sales of software licenses are final. License fees are
                  non-refundable.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-xl text-ink mb-3">Payment Processing Fees</h3>
              <p className="text-ink leading-relaxed mb-4">
                When we integrate payment processing solutions (Paystack, Flutterwave, Stripe, etc.) into your
                systems:
              </p>
              <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
                <li>
                  <strong>Integration Fees:</strong> Our integration service fees are non-refundable once the
                  integration is complete.
                </li>
                <li>
                  <strong>Third-Party Fees:</strong> We are not responsible for and do not provide refunds for
                  any transaction fees charged by payment processors. These are governed by the respective
                  payment processor's terms.
                </li>
                <li>
                  <strong>Test Transactions:</strong> Any test transactions processed during development
                  are your responsibility, and we do not provide refunds for test transaction fees.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Refund Request Process</h2>
            <p className="text-ink leading-relaxed mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>
                Contact us within <strong>14 days</strong> of the purchase or service delivery date. Refund
                requests made after this period will not be considered.
              </li>
              <li>
                Provide your order details, purchase receipt, and a clear explanation of why you are
                requesting a refund.
              </li>
              <li>
                Allow 5-10 business days for us to review your request and respond.
              </li>
              <li>
                If your refund is approved, the refund will be processed using the original payment method
                within 5-10 business days. Please note that your bank or payment processor may take
                additional time to post the refund to your account.
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Non-Refundable Items</h2>
            <p className="text-ink leading-relaxed mb-4">
              The following are explicitly non-refundable:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>Project deposits and milestone payments</li>
              <li>Completed custom development work</li>
              <li>Consulting sessions already delivered</li>
              <li>Digital products that have been downloaded or accessed</li>
              <li>Domain registration and hosting fees (if arranged through us)</li>
              <li>Third-party service fees (payment processors, APIs, cloud services)</li>
              <li>Urgent/rush project fees</li>
              <li>Any work that has been customized specifically for your requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Exceptions</h2>
            <p className="text-ink leading-relaxed mb-4">
              We may consider refund exceptions in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Service Not Delivered:</strong> If we fail to deliver the agreed-upon services within
                the specified timeframe without valid reason.
              </li>
              <li>
                <strong>Material Defects:</strong> If the delivered work contains critical defects that
                prevent it from functioning as specified in the agreement, and we are unable to resolve
                these defects within a reasonable timeframe.
              </li>
              <li>
                <strong>Misrepresentation:</strong> If we have materially misrepresented our capabilities,
                services, or the expected outcomes.
              </li>
              <li>
                <strong>Gross Error:</strong> In cases where we have made a significant error in our work
                that cannot be reasonably corrected.
              </li>
            </ul>
            <p className="text-ink leading-relaxed mt-4">
              <strong>Note:</strong> Even in these cases, we reserve the right to offer to redo the work or
              provide alternative compensation instead of a refund.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Chargebacks</h2>
            <p className="text-ink leading-relaxed">
              If you initiate a chargeback with your payment provider without first attempting to resolve the
              issue with us directly, we reserve the right to:
            </p>
            <ul className="list-disc list-inside text-ink leading-relaxed space-y-2 ml-4 mt-4">
              <li>Dispute the chargeback with evidence of our communication and work delivered</li>
              <li>Suspend or terminate any ongoing services</li>
              <li>Pursue collection of any outstanding balances</li>
              <li>Refuse future service to you or your associated entities</li>
            </ul>
            <p className="text-ink leading-relaxed mt-4">
              We strongly encourage you to contact us first to discuss any concerns. We are committed to
              working with you to find a fair resolution.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl text-ink mb-4">Contact Us</h2>
            <p className="text-ink leading-relaxed">
              If you have any questions about this Refund Policy or wish to request a refund, please contact
              us:
            </p>
            <p className="text-ink leading-relaxed mt-2">
              Email: francisganyo98@gmail.com
            </p>
            <p className="text-ink leading-relaxed mt-4">
              We will respond to your inquiry within 2-3 business days.
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
