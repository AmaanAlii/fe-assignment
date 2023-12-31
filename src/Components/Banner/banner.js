import React, { useState } from "react";
import "./banner.css";

import BannerStarImg from "../../Assets/Banner/Banner-Star-BackgroundIMG.png";
import BannerMainImg from "../../Assets/Banner/Banner-MainImg.png";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" },
];

function Banner() {
  const [wishListValue, setWishListValue] = useState(0);
  const [bagValue, setBagValue] = useState(0);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false); // State for submenu visibility

  const toggleProductsMenu = () => {
    setProductsMenuOpen(!productsMenuOpen);
  };

  return (
    <div className="fe-banner">
      <div className="banner-top">
        <h1>ShopKart</h1>
        <div className="banner-top-right">
          <span>WISHLIST({wishListValue})</span>
          <span>Bag({bagValue})</span>
        </div>
      </div>

      <nav className="banner-navbar">
        <ul>
          {navbar.map((item) => (
            <li key={item.id}>
              {item.child ? (
                <>
                  <span onClick={toggleProductsMenu}>
                    {item.name.toUpperCase()} {productsMenuOpen ? "▲" : "▼"}
                  </span>
                  {productsMenuOpen && (
                    <ul className="navbar-submenu">
                      {item.child.map((subItem) => (
                        <li key={subItem.id}>{subItem.name.toUpperCase()}</li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                item.name.toUpperCase()
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="banner-center-content">
        <div className="banner-center-content-sub-section">
          <div className="banner-center-content-left">
            <div className="banner-text-section">
              <h1 className="banner-text-first">Fresh</h1>
              <h1 className="banner-text-second">2022</h1>
              <h1 className="banner-text-third">Look</h1>
            </div>
            <div className="banner-see-more-section">
              <button>
                See More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M7.66415 9.29595C7.6683 8.24949 7.66814 7.20275 7.66799 6.15636C7.6679 5.51676 7.6678 4.87729 7.66869 4.23809L7.6692 3.87526L7.41263 4.13182L1.85487 9.68941L1.96094 9.79548L1.85487 9.68941C1.64005 9.90423 1.23453 9.90397 1.01651 9.68596L0.313922 8.98339C0.313911 8.98338 0.3139 8.98337 0.313889 8.98336C0.096074 8.76537 0.0957675 8.36005 0.310613 8.14504C0.310624 8.14502 0.310635 8.14501 0.310646 8.145L5.86837 2.58744L6.1244 2.33142L5.76232 2.33138C5.24959 2.33132 4.70196 2.33179 4.13402 2.33227C3.02993 2.33322 1.84907 2.33423 0.698618 2.33157C0.699919 1.9827 0.700896 1.6612 0.701871 1.34019C0.70303 0.95888 0.704186 0.57825 0.705882 0.15322C2.80036 0.159447 4.88104 0.156514 7.09597 0.153392C7.98874 0.152133 8.90331 0.150844 9.8494 0.150112C9.84225 1.9923 9.844 3.81936 9.84584 5.73654C9.84693 6.88257 9.84806 8.06081 9.84734 9.29372C9.56213 9.2945 9.25322 9.29442 8.93494 9.29435C8.51668 9.29424 8.08224 9.29414 7.66415 9.29595Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="banner-center-content-right">
            <div className="banner-right-background-star">
              <img src={BannerStarImg} alt="Banner Star Image" />
            </div>
            <div className="banner-right-main-image">
              <img src={BannerMainImg} alt="Banner Main Image" />
              <div className="banner-right-details">
                <span>OREGAN JACKET</span>
                <span>$124</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
