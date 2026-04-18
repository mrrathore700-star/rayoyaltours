import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy | Heritage Jaipur Travels</title>
      <meta name="description" content="Read the Privacy Policy of Heritage Jaipur Travels to understand how we collect, use and protect your personal information." />
      <link rel="canonical" href="/privacy-policy" />
    </Helmet>
    <main className="pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">1. Introduction</h2>
            <p>Heritage Jaipur Travels ("we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or book our travel services.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal details:</strong> name, email, phone number, nationality, and passport details (when required for bookings).</li>
              <li><strong>Travel preferences:</strong> tour packages of interest, travel dates, group size, dietary or accessibility needs.</li>
              <li><strong>Communication data:</strong> messages sent to us via website forms, WhatsApp, email, or phone.</li>
              <li><strong>Technical data:</strong> IP address, browser type, and pages visited (collected automatically via cookies/analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide customised tour quotations.</li>
              <li>To arrange bookings, transport, accommodation and guides.</li>
              <li>To send booking confirmations, itineraries and important travel updates.</li>
              <li>To improve our website, services and customer experience.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">4. Sharing of Information</h2>
            <p>We share your information only with trusted partners necessary to deliver your trip — such as hotels, transport providers, guides and monument authorities. We never sell your personal data to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">5. Data Security</h2>
            <p>We implement reasonable technical and organisational measures to protect your data against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">6. Cookies</h2>
            <p>Our website may use cookies and similar technologies to enhance user experience and analyse site traffic. You can disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">7. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at the details below.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
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

export default PrivacyPolicy;
