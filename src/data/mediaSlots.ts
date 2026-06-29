/**
 * Phase 1 Media Foundation — slot key registry.
 *
 * Central, type-safe list of every named placement the site WILL eventually
 * resolve through the central media library. Nothing here changes how the
 * site currently renders — it only documents the contract for Phase 2.
 *
 * Naming convention: `<area>.<subject>.<role>[.<index>]`
 *   home.hero
 *   home.gallery.1
 *   packages.jaipur.hero
 *   packages.jaipur.gallery.1
 *   destination.jaipur.hero
 *   blog.best-time-jaipur.cover
 *   vehicle.innova.hero
 */

export const MEDIA_SLOT_KEYS = [
  // Homepage
  "home.hero",
  "home.cta.band",
  "home.gallery.1",
  "home.gallery.2",
  "home.gallery.3",
  "home.gallery.4",

  // Static pages
  "about.hero",
  "contact.hero",
  "reviews.hero",
  "experiences.hero",
  "packages.hero",
  "gallery.hero",
  "taxi.hero",
  "sightseeing.hero",
  "blog.hero",

  // Destinations
  "destination.jaipur.hero",
  "destination.udaipur.hero",
  "destination.jodhpur.hero",
  "destination.jaisalmer.hero",
  "destination.ranthambore.hero",
  "destination.pushkar.hero",
] as const;

export type MediaSlotKey = (typeof MEDIA_SLOT_KEYS)[number];

/** Loose helper so dynamic content (per-tour, per-blog) can build slot keys. */
export const slotKey = {
  tourHero: (slug: string) => `tour.${slug}.hero`,
  tourGallery: (slug: string, i: number) => `tour.${slug}.gallery.${i}`,
  destinationHero: (slug: string) => `destination.${slug}.hero`,
  destinationGallery: (slug: string, i: number) => `destination.${slug}.gallery.${i}`,
  blogCover: (slug: string) => `blog.${slug}.cover`,
  experienceHero: (slug: string) => `experience.${slug}.hero`,
  vehicleHero: (slug: string) => `vehicle.${slug}.hero`,
};
