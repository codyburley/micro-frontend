import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <>
    <Header />
    <h1 className="text-3xl my-8">Home page content</h1>
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
