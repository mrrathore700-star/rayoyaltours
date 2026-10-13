// Real Google Business rating — keep in sync with LuxGoogleReviews.
export const GOOGLE_RATING = { ratingValue: "4.8", reviewCount: "23", bestRating: "5", worstRating: "1" };

export const aggregateRating = { "@type": "AggregateRating", ...GOOGLE_RATING };

export const sampleReviews = [
  { author: "Muriel Chaume", body: "A pleasure to travel with Kailash: perfect driving in all circumstances, punctual, discreet, and elegant…the perfect driver to show you the beauties of North India!" },
  { author: "Yuliya Masyukova", body: "Me and my Mom travelled through Golden Triangle and absolutely loved Kailash services! Honest, always in time, super friendly." },
  { author: "Janine Parmenter", body: "My husband and I enjoyed a fantastic experience on our 10 day tour of Rajasthan with Kailash. He is reliable, trustworthy and knowledgable." },
].map((r) => ({
  "@type": "Review",
  author: { "@type": "Person", name: r.author },
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  reviewBody: r.body,
}));

export const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Heritage Jaipur Travels",
  url: "https://heritagejaipurtravels.com",
  image: "https://www.heritagejaipurtravels.com/og-image.jpg",
  telephone: "+91-9887688843",
  email: "info@heritagejaipurtravels.com",
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
  areaServed: "Rajasthan, India",
  aggregateRating,
  review: sampleReviews,
};
