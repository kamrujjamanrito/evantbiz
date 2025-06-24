import homeOne from "@/public/images/header/home-1.jpg";
import homeTwo from "@/public/images/header/home-2.jpg";
import homeThree from "@/public/images/header/home-3.jpg";
import homeFour from "@/public/images/header/home-4.jpg";

const NavbarData = [
  {
    title: "Home",
    path: "/",
    megabar: [
      {
        title: "Home 01",
        path: "/",
        image: homeOne,
      },
      {
        title: "Home 02",
        path: "/index-2",
        image: homeTwo,
      },
      {
        title: "Home 03",
        path: "/index-3",
        image: homeThree,
      },
      {
        title: "Home 04",
        path: "/index-4",
        image: homeFour,
      },
    ],
  },
  {
    title: "Home",
    path: "/",
    submenuMobile: [
      {
        title: "Home 01",
        path: "/",
      },
      {
        title: "Home 02",
        path: "/index-2",
      },
      {
        title: "Home 03",
        path: "/index-3",
      },
      {
        title: "Home 04",
        path: "/index-4",
      },
    ],
  },

  {
    title: "Pages",
    path: "/about",
    submenu: [
      {
        title: "About Us",
        path: "/about",
      },
      {
        title: "Event Gallery",
        path: "/event-gallery",
      },
      {
        title: "Our Sponsors",
        path: "/sponsor",
      },
      {
        title: "Event Venue",
        path: "/event-venue",
      },
      {
        title: "Pricing Plan",
        path: "/pricing",
      },
      {
        title: "Our Faq",
        path: "/faq",
      },
      {
        title: "404 Error",
        path: "/error",
      },
    ],
  },
  {
    title: "Speakers",
    path: "/speaker",
    submenu: [
      {
        title: "Speakers",
        path: "/speaker",
      },
      {
        title: "Speaker Details",
        path: "/speaker-details",
      },
    ],
  },
  {
    title: "Schedule",
    path: "/schedule",
  },
  {
    title: "Blog",
    path: "/news",
    submenu: [
      {
        title: "Blog",
        path: "/news",
      },
      {
        title: "Blog Details",
        path: "/news-details",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

export default NavbarData;
