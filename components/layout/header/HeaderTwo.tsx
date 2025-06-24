"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarData from "@/public/data/navbar-data";
import SearchBar from "./SearchBar";
import OffcanvasMenu from "./OffcanvasMenu";
import logo from "@/public/images/logo/black-logo.svg";

interface HeaderTwoProps {
  layout?: "two" | "four";
}

const HeaderTwo = ({ layout = "two" }: HeaderTwoProps) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openOffcanvas = () => setIsOffcanvasOpen(true);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header-sticky"
        className={`header-section header-1 header-2${
          layout === "four" ? " header-4" : ""
        }${scrolled ? " sticky" : ""}`}
      >
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <Link href="/" className="header-logo-21">
                  <Image src={logo} alt="logo-img" />
                </Link>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper d-none d-xl-flex">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {NavbarData.map((item, index) => {
                          if (item.megabar) {
                            return (
                              <li
                                className="has-dropdown menu-thumb"
                                key={index}
                              >
                                <Link href={item.path}>
                                  {item.title}
                                  <i className="fas fa-chevron-down"></i>
                                </Link>
                                <ul className="submenu has-homemenu">
                                  <li>
                                    <div className="homemenu-items">
                                      <div className="row gx-4 row-cols-2 row-cols-md-2 row-cols-xl-4">
                                        {item.megabar.map((mega, i) => (
                                          <div className="col homemenu" key={i}>
                                            <div className="homemenu-thumb">
                                              <Image
                                                src={mega.image}
                                                alt="Image"
                                              />
                                              <div className="demo-button">
                                                <Link
                                                  href={mega.path}
                                                  className="theme-btn"
                                                >
                                                  Demo Page
                                                </Link>
                                              </div>
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
                                <Link href={item.path} className="border-none">
                                  {item.title}
                                </Link>
                                <ul className="submenu">
                                  {item.submenuMobile.map((sub, i) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            );
                          } else if (item.submenu) {
                            return (
                              <li key={index} className="has-dropdown">
                                <Link href={item.path}>
                                  {item.title}
                                  <i className="fas fa-chevron-down"></i>
                                </Link>
                                <ul className="submenu">
                                  {item.submenu.map((sub, i) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  ))}
                                </ul>
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
                    </nav>
                  </div>
                </div>
                <Link href="contact" className="theme-btn style-2">
                  Join Forum <i className="fas fa-long-arrow-right"></i>
                </Link>
                <div className="header-search">
                  <button
                    className="d-flex align-items-center search-toggle"
                    onClick={openSearch}
                  >
                    <i className="far fa-search"></i>
                  </button>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div className="sidebar__toggle" onClick={openOffcanvas}>
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchBar isOpen={isSearchOpen} onClose={closeSearch} />
      <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={closeOffcanvas} />
    </>
  );
};

export default HeaderTwo;
