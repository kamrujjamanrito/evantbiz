import img1 from "@/public/images/event/event-17.jpg";
import img2 from "@/public/images/event/event-18.jpg";
import img3 from "@/public/images/event/event-19.jpg";
import img4 from "@/public/images/event/event-20.jpg";
import img5 from "@/public/images/event/event-21.jpg";

const GalleryThreeData = [
  {
    column: 0,
    delay: "300",
    items: [
      {
        id: 1,
        image: img1,
        alt: "Event 17",
        extraClass: "style-4",
      },
    ],
  },
  {
    column: 1,
    delay: "500",
    items: [
      {
        id: 2,
        image: img2,
        alt: "Event 18",
        extraClass: " ",
      },
      {
        id: 3,
        image: img3,
        alt: "Event 19",
        extraClass: " ",
      },
    ],
  },
  {
    column: 2,
    delay: "700",
    items: [
      {
        id: 4,
        image: img4,
        alt: "Event 20",
        extraClass: " ",
      },
      {
        id: 5,
        image: img5,
        alt: "Event 21",
        extraClass: " ",
      },
    ],
  },
];

export default GalleryThreeData;
