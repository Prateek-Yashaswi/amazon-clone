import { ProductDetails } from "../../components/Products/Products.interfaces";

const getImageUrl = (id: number, width?: number, height?: number): string => {
  if (width === undefined) {
    width = 150;
  }

  if (height === undefined) {
    height = 150;
  }
  return (
    "https://picsum.photos/id/" + id + "/" + width + "/" + height + ".webp"
  );
};

const products1: ProductDetails = {
  paperHeading: "Keep shopping for",
  linkText: "View your browsing history",
  products: [
    {
      imgUrl: getImageUrl(2),
      title: "Laptop",
    },
    {
      imgUrl: getImageUrl(30),
      title: "Mug",
    },
    {
      imgUrl: getImageUrl(96),
      title: "Controller",
    },
    {
      imgUrl: getImageUrl(160),
      title: "Mobile",
    },
  ],
};

const products2: ProductDetails = {
  paperHeading: "Pick up where you left off",
  linkText: "See more",
  products: [
    {
      imgUrl: getImageUrl(175),
      title: "Clock",
    },
    {
      imgUrl: getImageUrl(225),
      title: "Kettle",
    },
    {
      imgUrl: getImageUrl(336),
      title: "Lock",
    },
    {
      imgUrl: getImageUrl(367),
      title: "Kindle",
    },
  ],
};

const products3: ProductDetails = {
  paperHeading: "Deals inspired by your recent history",
  linkText: "See all deals",
  products: [
    {
      imgUrl: getImageUrl(401),
      title: "Hot Air Balloon",
    },
    {
      imgUrl: getImageUrl(403),
      title: "Typewriter",
    },
    {
      imgUrl: getImageUrl(425),
      title: "Coffee",
    },
    {
      imgUrl: getImageUrl(442),
      title: "Map",
    },
  ],
};

export const imgList: Array<string> = Array.from({ length: 10 }, (_, idx) =>
  getImageUrl(idx + 20)
);

export const topCarouselImgs: Array<string> = Array.from(
  { length: 5 },
  (_, idx) => getImageUrl(idx + 35, 1000, 300)
);

export const products = { products1, products2, products3 };
