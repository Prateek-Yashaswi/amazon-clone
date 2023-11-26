import { Address, DrawerContent } from "./Navbar.interfaces";

export const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

export const categoryMenuItems = ["All", "Mobiles", "Clothing"];
export const languageMenuItems = ["EN", "HI"];
export const secondaryToolbarItems = [
  "Health, Household & Personal Care",
  "Sell",
  "Amazon miniTV",
  "Gift Cards",
  "Buy Again",
  "Books",
  "Amazon Pay",
  "Gift Ideas",
];
export const addressBook: Address[] = [
  {
    name: "Prateek Yashaswi",
    fullAddress:
      "102, Some Apartment, Some street, Bangalore, Karnataka 000000",
    isDefault: true,
  },

  {
    name: "Jane Doe",
    fullAddress:
      "103, Some Apartment, Some street, Bangalore, Karnataka 000000",
    isDefault: false,
  },
];

export const drawerItems: DrawerContent[] = [
  {
    heading: "Trending",
    items: ["Best Sellers", "New Releases", "Movers and Shakers"],
  },
  {
    heading: "Digital Content And Devices",
    items: [
      "Echo & Alexa",
      "Fire TV",
      "Kindle E-Readers & eBooks",
      "Audible Audiobooks",
      "Amazon Prime Video",
      "Amazon Prime Music",
    ],
  },
  {
    heading: "Shop By Category",
    items: [
      "Mobile & Computers",
      "TV, Appliances & Electronics",
      "Men's Fashion",
      "Women's Fashion",
    ],
  },
  {
    heading: "Programs & Features",
    items: [
      "Amazon Pay",
      "Gift Cards & Mobile Recharges",
      "Amazon Launchpad",
      "Handlooms & Handicrafts",
    ],
  },
  {
    heading: "Help & Settings",
    items: ["Your Account", "Customer Service", "Sign Out"],
  },
];
