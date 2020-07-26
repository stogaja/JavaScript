import React from "react";
import "./style.css";

import Navbar from "./Navbar";
import MainContent from "./MainContainer";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
