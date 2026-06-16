import SEO from "@/components/SEO";
import LuxHero from "@/components/luxury/LuxHero";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import heroPalace from "@/assets/hero-palace.jpg";

const Reviews = () => (
  <main className="lux-cream-bg">
    <SEO
      title="Reviews | Heritage Jaipur Travels"
      description="Read verified Google reviews from travellers who explored Rajasthan with Kailash and the Heritage Jaipur Travels team — over 20 years of trusted, personal service."
      path="/reviews"
    />

    <LuxHero
      image={heroPalace}
      eyebrow="Loved By Travellers"
      title={<>Words From Our <span className="text-[#C9A84C]">Guests</span></>}
      subtitle="Honest Google reviews from travellers who explored Rajasthan with us."
      height="regular"
    />

    <LuxGoogleReviews />

    <LuxCtaBand
      image={heroPalace}
      eyebrow="Begin"
      title={<>Become Our Next <span className="text-[#C9A84C]">Happy</span> Traveller</>}
      subtitle="Share your travel dates and interests — we'll plan the rest."
      primary={{ label: "Plan Your Journey", to: "/contact" }}
      secondary={{ label: "WhatsApp Kailash", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default Reviews;
