import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
