export const GALLERY_CATEGORIES = [
  "Jaipur",
  "Amber Fort",
  "Hawa Mahal",
  "City Palace",
  "Jodhpur",
  "Udaipur",
  "Jaisalmer",
  "Pushkar",
  "Ranthambore",
  "Luxury Hotels",
  "Vehicles",
  "Airport Pickup",
  "Guest Experiences",
  "Culture",
  "Food",
  "Festivals",
  "Nature",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];
