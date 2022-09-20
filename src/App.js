import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Stock from "./Pages/Stock";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  function renderPage() {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Stock") {
      return <Stock />;
    } else {
      return <Home />;
    }
  }

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
