import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import ReactBasics from "./components/react-basics/ReactBasics";
// import ReactHooks from "./components/react-hooks/ReactHooks";
// import ReactPractical from "./components/react-practical/ReactPractical";
// import ReactFormik from "./compon11ents/react-formik/ReactFormik";
import About from "./components/react-router/react-router-components/About";
import FeaturedProducts from "./components/react-router/react-router-components/FeaturedProducts";
import Home from "./components/react-router/react-router-components/Home";
import Navbar from "./components/react-router/react-router-components/Navbar";
import NewProducts from "./components/react-router/react-router-components/NewProducts";
import NoMatch from "./components/react-router/react-router-components/NoMatch";
import OrderSummary from "./components/react-router/react-router-components/OrderSummary";
import Products from "./components/react-router/react-router-components/Products";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {/*       <div className="App">*/}
        {/* REACT JS BASICS/FUNDAMENTALS */}
        {/* <ReactBasics /> */}

        {/* HOOKS IN REACT JS */}
        {/* <ReactHooks /> */}

        {/* PRACTICAL REACT JS */}
        {/* <ReactPractical /> */}

        {/* FORMIK IN REACT JS */}
        {/* <ReactFormik /> */}

        {/*       </div>*/}
      </div>
    );
  }
}

export default App;
