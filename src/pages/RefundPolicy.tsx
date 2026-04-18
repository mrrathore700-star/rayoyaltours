import { Helmet } from "react-helmet-async";

const RefundPolicy = () => (
  <>
    <Helmet>
      <title>Refund & Cancellation Policy | Heritage Jaipur Travels</title>
      <meta name="description" content="Refund and cancellation policy for tours and services booked with Heritage Jaipur Travels." />
      <link rel="canonical" href="/refund-policy" />
    </Helmet>
    <main className="pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Refund & Cancellation Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">1. Cancellation by Traveller</h2>
            <p>If you wish to cancel a confirmed booking, please notify us in writing at <a className="text-primary underline" href="mailto:info@heritagejaipurtravels.com">info@heritagejaipurtravels.com</a>. Cancellation charges will apply as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>30 days or more before travel date:</strong> 10% of total tour cost.</li>
              <li><strong>15–29 days before travel date:</strong> 25% of total tour cost.</li>
              <li><strong>7–14 days before travel date:</strong> 50% of total tour cost.</li>
              <li><strong>Less than 7 days or no-show:</strong> 100% of total tour cost (non-refundable).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">2. Peak Season & Special Bookings</h2>
            <p>For peak season travel (Christmas, New Year, Diwali, Holi, etc.) and special hotels/properties, hotels and airlines may impose stricter cancellation policies. In such cases, the policy of the supplier shall apply in addition to ours.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">3. Cancellation by Heritage Jaipur Travels</h2>
            <p>In rare cases, we may need to cancel a tour due to reasons beyond our control (natural disasters, political unrest, pandemics, etc.). In such situations, we will offer either a full refund of the unused portion or an alternative tour of equivalent value.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">4. Refund Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approved refunds will be processed within 7–14 business days from the date of confirmation.</li>
              <li>Refunds will be issued to the original payment method used at the time of booking.</li>
              <li>Bank charges, payment gateway fees and currency conversion losses (if any) are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">5. Non-Refundable Items</h2>
            <p>Visa fees, travel insurance premiums, monument entry tickets already purchased, and any third-party services already utilised are strictly non-refundable.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">6. Modifications</h2>
            <p>Date changes or itinerary modifications after confirmation are subject to availability and may incur additional charges from hotels, transport operators or other service providers.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">7. Contact Us</h2>
            <p>For any cancellation or refund-related queries, please reach out to us:</p>
            <p>
              <strong>Heritage Jaipur Travels</strong><br />
              G 31 Ground Floor, Behind Airtel, Ganpati Plaza, MI Road, Jaipur, Rajasthan - 302001<br />
              Phone: +91 94610 69858<br />
              Email: <a className="text-primary underline" href="mailto:info@heritagejaipurtravels.com">info@heritagejaipurtravels.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  </>
);

export default RefundPolicy;
