import one from "@/public/images/news/post-1.jpg";
import two from "@/public/images/news/post-4.jpg";
import three from "@/public/images/news/post-3.jpg";

const NewsData = [
  {
    id: 0,
    image: one,
    title: "Construction of a new high tech plant in washingtons",
    author: "Admin",
    comments: 3,
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",
    destination: "/news-details",
    delay: 100,
  },
  {
    id: 1,
    image: two,
    title: "Building resilient supply chains for industries",
    author: "Admin",
    comments: 23,
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",
    destination: "/news-details",
    delay: 100,
  },
  {
    id: 2,
    image: three,
    title: "Factories technologies in interactive and plants",
    author: "Salman",
    comments: 13,
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",
    destination: "/news-details",
    delay: 100,
  },
];

export default NewsData;
