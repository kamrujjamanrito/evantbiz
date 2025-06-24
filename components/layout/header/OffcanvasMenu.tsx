"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo/black-logo.svg";
import AnimateHeight from "react-animate-height";
import NavbarData from "@/public/data/navbar-data";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffcanvasMenu = ({ isOpen, onClose }: OffcanvasProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={onClose}>
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <h3 className="offcanvas-title">Hello There!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              </p>

              <div className="mobile-menu fix mt-3 mb-3 mean-container d-block d-xl-none">
                <div className="offcanvas-menu__list">
                  <div className="navbar__menu">
                    <ul>
                      {NavbarData.map((item, index) => {
                        if (item.megabar) {
                          return (
                            <li className="has-dropdown menu-thumb" key={index}>
                              <a onClick={() => handleDropdownToggle(index)}>
                                {item.title} <i className="fal fa-plus"></i>
                              </a>
                              <ul className="submenu has-homemenu">
                                <li>
                                  <div className="homemenu-items">
                                    <div className="row">
                                      {item.megabar.map((mega, i) => (
                                        <div
                                          className="col-lg-4 homemenu"
                                          key={i}
                                        >
                                          <div className="homemenu-thumb mb-15">
                                            <Link href={mega.path}>
                                              <Image
                                                src={mega.image}
                                                alt="img"
                                              />
                                            </Link>
                                          </div>
                                          <div className="homemenu-content text-center">
                                            <h4 className="homemenu-title">
                                              <Link href={mega.path}>
                                                {mega.title}
                                              </Link>
                                            </h4>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          );
                        } else if (item.submenuMobile) {
                          return (
                            <li
                              className="has-dropdown active d-xl-none"
                              key={index}
                            >
                              <a
                                className="border-none"
                                onClick={() => handleDropdownToggle(index)}
                              >
                                {item.title}
                                <i
                                  className={`fal ${
                                    openDropdown === index
                                      ? "fa-minus"
                                      : "fa-plus"
                                  }`}
                                ></i>
                              </a>
                              <AnimateHeight
                                duration={400}
                                height={openDropdown === index ? "auto" : 0}
                              >
                                <ul className="submenu">
                                  {item.submenuMobile.map((sub, i) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </AnimateHeight>
                            </li>
                          );
                        } else if (item.submenu) {
                          return (
                            <li key={index}>
                              <a onClick={() => handleDropdownToggle(index)}>
                                {item.title}
                                <i
                                  className={`fal ${
                                    openDropdown === index
                                      ? "fa-minus"
                                      : "fa-plus"
                                  }`}
                                ></i>
                              </a>
                              <AnimateHeight
                                duration={400}
                                height={openDropdown === index ? "auto" : 0}
                              >
                                <ul className="submenu">
                                  {item.submenu.map((sub, i) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </AnimateHeight>
                            </li>
                          );
                        } else {
                          return (
                            <li key={index}>
                              <Link href={item.path}>{item.title}</Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="social-icon d-flex align-items-center">
                <Link href="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="/">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="/">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link href="/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>

              <div className="offcanvas__contact">
                <h3>Information</h3>
                <ul className="contact-list">
                  <li>
                    <span>Address:</span> Graaf Floriss 22A CH NY
                  </li>
                  <li>
                    <span>Call Us:</span>{" "}
                    <Link href="tel:+00012345688">+000 123 456 88</Link>
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <Link href="mailto:helloevantbiz@gmail.com">
                      helloevantbiz@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>

              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas__overlay ${isOpen ? "overlay-open" : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default OffcanvasMenu;
