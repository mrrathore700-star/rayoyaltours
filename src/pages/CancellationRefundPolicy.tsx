import SEO from "@/components/SEO";

const CancellationRefundPolicy = () => (
  <>
    <SEO
      title="Cancellation & Refund Policy | Heritage Jaipur Travels"
      description="Cancellation and refund terms for tours, transport and experiences booked with Heritage Jaipur Travels."
      path="/cancellation-refund-policy"
    />
    <main className="pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Cancellation & Refund Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">1. Booking Cancellation Terms</h2>
            <p>
              All cancellations must be communicated to us in writing at{" "}
              <a className="text-primary underline" href="mailto:info@heritagejaipurtravels.com">
                info@heritagejaipurtravels.com
              </a>{" "}
              or via WhatsApp at +91 98876 88843. The effective date of cancellation is the date on which we receive your written request during business hours.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">2. Customer Cancellation Policy</h2>
            <p>If you cancel a confirmed booking, the following charges will apply on the total tour cost:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>30 days or more before travel:</strong> 10% cancellation charge.</li>
              <li><strong>15–29 days before travel:</strong> 25% cancellation charge.</li>
              <li><strong>7–14 days before travel:</strong> 50% cancellation charge.</li>
              <li><strong>Less than 7 days or no-show:</strong> 100% cancellation charge (non-refundable).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">3. Company Cancellation Policy</h2>
            <p>
              In the rare event that Heritage Jaipur Travels must cancel a tour due to circumstances beyond our control — including natural disasters, political unrest, pandemics, or supplier failures — we will offer either a full refund of the unused portion of your booking or an alternative tour of equivalent value, at your preference.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">4. Refund Eligibility</h2>
            <p>
              Refunds are calculated on the net tour cost after deducting the applicable cancellation charges above, plus any non-recoverable expenses already paid on your behalf to hotels, airlines, monuments or other third-party suppliers. Peak-season bookings (Christmas, New Year, Diwali, Holi, festivals) and special heritage properties may carry stricter supplier policies that will be applied in addition.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">5. Refund Processing Time</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approved refunds are processed within <strong>7–14 business days</strong> from the date of confirmation.</li>
              <li>Refunds are issued to the original payment method used at the time of booking.</li>
              <li>International bank transfers may take an additional 5–10 business days to reflect in your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">6. Non-Refundable Services</h2>
            <p>The following are strictly non-refundable under any circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Visa fees and travel insurance premiums.</li>
              <li>Monument entry tickets and permits already purchased.</li>
              <li>Bank charges, payment gateway fees and currency conversion losses.</li>
              <li>Any third-party services already utilised during the journey.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">7. Special Circumstances</h2>
            <p>
              For medical emergencies, bereavement or other genuine hardship cases supported by valid documentation, we will review cancellation charges on a case-by-case basis and do our best to minimise loss to the traveller, subject to recoveries possible from our suppliers. Date changes or itinerary modifications after confirmation are subject to availability and may incur additional supplier charges.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">8. Contact Information</h2>
            <p>For any cancellation or refund-related queries, please reach out to us:</p>
            <p>
              <strong>Heritage Jaipur Travels</strong><br />
              G 31 Ground Floor, Ganpati Plaza, MI Road, Jaipur, Rajasthan – 302001<br />
              Phone: +91 98876 88843<br />
              Email:{" "}
              <a className="text-primary underline" href="mailto:info@heritagejaipurtravels.com">
                info@heritagejaipurtravels.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  </>
);

export default CancellationRefundPolicy;
