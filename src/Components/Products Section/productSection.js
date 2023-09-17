import React, { useRef, useState } from "react";
import "./productSection.css";
import ProductCard from "../Product Card/productCard";

function ProductSection({ loading, data }) {
  const [selectedItem, setSelectedItem] = useState(1);
  const productListRef = useRef(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const scrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollLeft -= 260;
    }
  };

  const scrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollLeft += 260;
    }
  };

  return (
    <div className="product-main-section">
      <div className="product-sub-section">
        <div className="product-heading-section">
          <h1>New products</h1>
          <div className="product-heading-button-section">
            <button onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="6"
                viewBox="0 0 56 6"
                fill="none"
              >
                <path
                  d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
                  fill="#161615"
                />
              </svg>
            </button>
            <button onClick={scrollRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="6"
                viewBox="0 0 56 6"
                fill="none"
              >
                <path
                  d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
                  fill="#161615"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="product-main-section">
          <div className="product-left-menu-section">
            <ul>
              <li
                className={selectedItem === 0 ? "selected" : ""}
                onClick={() => handleItemClick(0)}
              >
                Apparel
              </li>
              <li
                className={selectedItem === 1 ? "selected" : ""}
                onClick={() => handleItemClick(1)}
              >
                Accessories
              </li>
              <li
                className={selectedItem === 2 ? "selected" : ""}
                onClick={() => handleItemClick(2)}
              >
                Best sellers
              </li>
              <li
                className={selectedItem === 3 ? "selected" : ""}
                onClick={() => handleItemClick(3)}
              >
                50% off
              </li>
            </ul>
          </div>
          <div className="product-right-display-section">
            {loading ? (
              <p> Loading Products</p>
            ) : (
              <div className="product-list" ref={productListRef}>
                {data.map((product) => (
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
