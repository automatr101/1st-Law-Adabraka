/**
 * Central site config. When the custom domain is ready, update SITE_URL only —
 * sitemap, robots, metadata, canonical, and structured data all read from here.
 */
export const SITE_URL = "https://1st-law-website.vercel.app";

export const SITE = {
  name: "1st Law",
  legalName: "1st Law — Legal Practitioners / Consultants",
  tagline: "Legal Excellence, Every Step of the Way",
  description:
    "1st Law is a dynamic multi-practice law firm in Adabraka, Accra, Ghana. Specialising in Corporate & Commercial Law, Civil Litigation, Real Estate, Employment, Family, and Criminal Defence. Relationship-driven counsel since 2005.",
  url: SITE_URL,
  founded: "2005",
  phone: "+233244124472",
  phoneDisplay: "0244 124 472",
  email: "firstlawgh@yahoo.com",
  address: {
    street: "No. 28, Castle Road",
    locality: "Adabraka",
    region: "Greater Accra",
    city: "Accra",
    country: "GH",
  },
  geo: { lat: 5.5601, lng: -0.2045 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "08:00", close: "18:00" },
    { days: ["Saturday"], open: "09:00", close: "13:00" },
  ],
  practiceAreas: [
    "Corporate & Commercial Law",
    "Civil Litigation",
    "Real Estate & Property",
    "Employment Law",
    "Family Law",
    "Criminal Defense",
  ],
} as const;
