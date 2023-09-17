import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header/header";
import Banner from "./Components/Banner/banner";
import ProductSection from "./Components/Products Section/productSection";
import Footer from "./Components/Footer/footer";

function App() {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Fetching Data:", error);
        setLoading(false);
      });
  });
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductSection loading={loading} data={productData} />
      <Footer />
    </div>
  );
}

export default App;
