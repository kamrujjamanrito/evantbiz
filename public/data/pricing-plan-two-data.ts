import shape1 from "@/public/images/pricing/shape-1.png";
import shape2 from "@/public/images/pricing/shape-2.png";

const PricingPlanTwoData = [
  {
    id: 1,
    title: "SINGLE ACCESS",
    price: "$19",
    note: "All prices exclude 15% VAT",
    includedTitle: "WHAT'S INCLUDED",
    features: [
      "Breakfast, Lunch, Free Parking",
      "Standard Networking Opportunities",
      "Recording of All Talks",
      "<del>Premium Conference Materials</del>",
      "<del>Full or half-day instructor-led course</del>",
    ],
    delay: "300",
    link: {
      href: "pricing",
      text: "Get a Ticket",
      btnClass: "theme-btn",
    },
    cardClass: "pricing-card-item asslideupcta",
  },
  {
    id: 2,
    title: "FOR VIP ACCESS",
    price: "$49",
    note: "All prices exclude 15% VAT",
    includedTitle: "WHAT'S INCLUDED",
    features: [
      "Breakfast, Lunch, Free Parking",
      "Standard Networking Opportunities",
      "Recording of All Talks",
      "Premium Conference Materials",
      "<del>Full or half-day instructor-led course</del>",
    ],
    delay: "500",
    link: {
      href: "pricing",
      text: "Get a Ticket",
      btnClass: "theme-btn style-2",
    },
    cardClass: "pricing-card-item style-2",
    shapes: [
      { src: shape1, className: "shape-1" },
      { src: shape2, className: "shape-2" },
    ],
  },
  {
    id: 3,
    title: "STANDARD ACCESS",
    price: "$49",
    note: "All prices exclude 15% VAT",
    includedTitle: "WHAT'S INCLUDED",
    features: [
      "Breakfast, Lunch, Free Parking",
      "Standard Networking Opportunities",
      "Recording of All Talks",
      "Premium Conference Materials",
      "Full or half-day instructor-led course",
    ],
    delay: "700",
    link: {
      href: "pricing",
      text: "Get a Ticket",
      btnClass: "theme-btn style-3",
    },
    cardClass: "pricing-card-item style-3 asslideupcta",
  },
];

export default PricingPlanTwoData;
