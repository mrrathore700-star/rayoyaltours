import SectionHeading from "@/components/SectionHeading";
import desertSafari from "@/assets/desert-safari.jpg";
import villageTour from "@/assets/village-tour.jpg";
import rajasthaniFood from "@/assets/rajasthani-food.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import royalTour from "@/assets/royal-tour.jpg";

const experiences = [
  { image: desertSafari, title: "Camel Safari", desc: "Ride through the golden dunes of the Thar Desert at sunset for a magical, unforgettable experience." },
  { image: villageTour, title: "Village Tours", desc: "Visit authentic Rajasthani villages and interact with local artisans, potters, and weavers." },
  { image: rajasthaniFood, title: "Traditional Rajasthani Food", desc: "Savor dal-bati-churma, gatte ki sabzi, and other royal Rajasthani delicacies in heritage settings." },
  { image: culturalDance, title: "Cultural Dance Experience", desc: "Enjoy mesmerizing Kalbelia and Ghoomar folk dance performances under the desert stars." },
  { image: royalTour, title: "Fort & Palace Visits", desc: "Walk through centuries-old forts and palaces with expert guides who bring history alive." },
];

const Experiences = () => (
  <main className="pt-24 pb-20">
    <section className="container mx-auto px-4">
      <SectionHeading
        title="Heritage Experiences"
        subtitle="Immerse yourself in the living culture of Rajasthan beyond the ordinary tourist trail"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, i) => (
          <div key={i} className="heritage-card group">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{exp.desc}</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Inquire Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Experiences;
