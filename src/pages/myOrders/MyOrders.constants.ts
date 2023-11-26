import { CardData } from "./MyOrders.interface";

export const tabItems = [
  "Orders",
  "Buy Again",
  "Not Yet Shipped",
  "Cancelled Orders",
];

export const durations = ["Last 30 Days", "Last 3 Months", "2023", "2022"];

export const totalOrders: CardData[] = [
  {
    basicInfoItem: [
      { heading: "Order Placed", content: "22/11/2023" },
      { heading: "Total", content: "999" },
      { heading: "Ship To", content: "Prateek Yashaswi" },
    ],
    orderId: "123-456-789654123",
    deliveryDate: "25/11/2023",
    handedToWhom: "Security Guard",
    productDetails:
      "RAGE COFFEE Instant Coffee Combo Pack of 2 - Butterscotch Delight & Irish Hazelnut (Flavoured Instant Coffee 50gms each made using premium Arabica Beans), Glass Bottle",
    productImage: "https://m.media-amazon.com/images/I/41n7jE4yr0L._SY90_.jpg",
    returnWindow: "30/11/2023",
  },
  {
    basicInfoItem: [
      { heading: "Order Placed", content: "20/11/2023" },
      { heading: "Total", content: "1999" },
      { heading: "Ship To", content: "Prateek Yashaswi" },
    ],
    orderId: "123-456-789654124",
    deliveryDate: "23/11/2023",
    handedToWhom: "Customer",
    productDetails:
      "The Derma Co 1% Kojic Acid Daily Glow Body Serum Lotion For Skin Radiance - 250ml",
    productImage: "https://m.media-amazon.com/images/I/316-wUlMDYL._SY90_.jpg",
    returnWindow: "30/11/2023",
  },
];

export const cardContentButtons = [
  "Track Package",
  "Leave Seller Feedback",
  "Leave Delivery Feedback",
  "Write a Product Review",
];
