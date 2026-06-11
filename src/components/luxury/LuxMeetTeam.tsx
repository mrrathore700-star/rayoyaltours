import driverImg from "@/assets/team-driver.jpg";
import guideImg from "@/assets/team-guide.jpg";
import specialistImg from "@/assets/team-specialist.jpg";
import LuxSectionHeading from "./LuxSectionHeading";

const team = [
  {
    name: "Ravi Singh",
    role: "Senior Chauffeur",
    image: driverImg,
    bio: "Twelve years behind the wheel across every corner of Rajasthan. Calm, careful, and the first to spot the perfect roadside chai stall.",
    tag: "Driver",
  },
  {
    name: "Mahendra Sharma",
    role: "Heritage Guide · Jaipur",
    image: guideImg,
    bio: "Born inside the walled city. Knows the stories behind Amber's mirror halls, the hidden frescoes of Shekhawati, and the best rooftop at sunset.",
    tag: "Guide",
  },
  {
    name: "Priya Rathore",
    role: "Travel Specialist",
    image: specialistImg,
    bio: "Plans every itinerary with care — from heritage hotel selection to private dining inside a fort. Your quiet voice on WhatsApp.",
    tag: "Planner",
  },
];

const LuxMeetTeam = () => (
  <section className="py-24 md:py-32" style={{ backgroundColor: "#FFFAF2" }}>
    <div className="container mx-auto px-6">
      <LuxSectionHeading
        eyebrow="Meet The Team"
        title="The Family Behind Your Journey"
        intro="A small, hand-picked team of Rajasthani drivers, guides and planners — each one chosen for warmth, knowledge, and a genuine love for hosting."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        {team.map((m) => (
          <article
            key={m.name}
            className="group bg-[#F8F5EF] border border-[#C9A84C]/25 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(110,15,31,0.3)] hover:border-[#C9A84C]/60"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={m.image}
                alt={`${m.name} — ${m.role}`}
                loading="lazy"
                width={896}
                height={1152}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/55 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-[#C9A84C] text-[#0F0F0F] text-[10px] tracking-[0.22em] uppercase font-semibold px-3 py-1 rounded-full">
                {m.tag}
              </span>
            </div>
            <div className="p-7 md:p-8 text-center">
              <h3 className="font-display text-xl md:text-2xl text-[#6E0F1F] font-semibold">{m.name}</h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] mt-2">{m.role}</p>
              <div className="w-10 h-px bg-[#C9A84C]/50 mx-auto my-5" />
              <p className="font-serif italic text-[15px] leading-relaxed text-[#0F0F0F]/75">
                {m.bio}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center font-serif italic text-sm md:text-base text-[#0F0F0F]/60 max-w-2xl mx-auto mt-14">
        Every driver and guide on our team is local, English-speaking, and personally vetted by Kailash.
      </p>
    </div>
  </section>
);

export default LuxMeetTeam;
