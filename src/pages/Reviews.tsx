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
      eyebrow="Guest Reviews"
      title={<>What Our <span className="text-[#C9A84C]">Travelers</span> Say</>}
      subtitle="Verified Google reviews from travelers who toured Rajasthan with our Jaipur-based team."
      height="regular"
    />

    <LuxGoogleReviews />

    <LuxCtaBand
      image={heroPalace}
      eyebrow="Start Planning"
      title={<>Plan Your Own <span className="text-[#C9A84C]">Rajasthan</span> Trip</>}
      subtitle="Share your travel dates and interests — our Jaipur team will put together a plan."
      primary={{ label: "Plan Your Rajasthan Tour", to: "/contact" }}
      secondary={{ label: "WhatsApp Our Jaipur Team", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default Reviews;
