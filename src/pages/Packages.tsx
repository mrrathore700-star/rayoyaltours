import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import SEO from "@/components/SEO";
import { tours } from "@/data/tours";

const Packages = () => (
  <main className="pt-24 pb-20">
    <SEO
      title="Rajasthan Tour Packages | Golden Triangle, Desert Safari & More"
      description="Browse our curated Rajasthan tour packages — Golden Triangle, Jaipur Heritage, Jaisalmer Desert Safari, Udaipur Lake Tour and more. Customised itineraries by Jaipur locals."
      path="/packages"
    />
    <section className="container mx-auto px-4">
      <SectionHeading
        title="Rajasthan Tour Packages"
        subtitle="Explore our curated collection of heritage tours designed for international travelers"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard key={tour.slug} {...tour} />
        ))}
      </div>
    </section>
  </main>
);

export default Packages;
