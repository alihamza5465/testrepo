import React from "react";
import "./Nav.css";
const Navbar = ({ filterItem, setData, Menu }) => {
  return (
    <>
      <div className="mainNav">
        <div className="navbar">
          <a href="#" onClick={() => filterItem("breakfast")}>
            BREAKFAST{" "}
          </a>
          <a href="#" onClick={() => filterItem("lunch")}>
            LUNCH{" "}
          </a>
          <a href="#" onClick={() => filterItem("dinner")}>
            DINNER{" "}
          </a>
          <a href="#" onClick={() => setData(Menu)}>
            ALL{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
