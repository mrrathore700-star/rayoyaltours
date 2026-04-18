import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => (
  <>
    <Helmet>
      <title>Terms & Conditions | Heritage Jaipur Travels</title>
      <meta name="description" content="Terms and Conditions governing the use of Heritage Jaipur Travels' website and tour booking services." />
      <link rel="canonical" href="/terms-and-conditions" />
    </Helmet>
    <main className="pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing our website or booking any services with Heritage Jaipur Travels, you agree to be bound by these Terms & Conditions. Please read them carefully before making a reservation.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">2. Booking & Confirmation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All bookings are subject to availability and confirmation by Heritage Jaipur Travels.</li>
              <li>An advance payment may be required to confirm your booking.</li>
              <li>Final itinerary and vouchers will be shared after full payment is received.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">3. Pricing</h2>
            <p>Tour costs are quoted on a per-request basis depending on group size, season, hotel category and inclusions. Prices may change without prior notice until a booking is confirmed in writing.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">4. Inclusions & Exclusions</h2>
            <p>Each tour quote will clearly mention what is included (transport, accommodation, sightseeing, etc.) and what is excluded (personal expenses, tips, monument entry fees unless specified, travel insurance, etc.).</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">5. Traveller Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Travellers must carry valid identification and travel documents.</li>
              <li>Foreign nationals are responsible for their own visas and travel insurance.</li>
              <li>Punctuality is essential — delays caused by travellers may affect the planned itinerary.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">6. Changes to Itinerary</h2>
            <p>Heritage Jaipur Travels reserves the right to modify itineraries due to unforeseen events such as weather, political situations, monument closures (e.g., Taj Mahal closed on Fridays) or other circumstances beyond our control.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">7. Liability</h2>
            <p>We act as a facilitator between travellers and service providers (hotels, transport operators, etc.). We shall not be held liable for any loss, injury, damage, delay or inconvenience caused by third-party providers or events beyond our reasonable control.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">8. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">9. Contact Us</h2>
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

export default TermsAndConditions;
