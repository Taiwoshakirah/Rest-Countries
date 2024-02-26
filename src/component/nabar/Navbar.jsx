import React from "react";
import { IoMdMoon } from "react-icons/io";

const Navbar = ({ lightMode, setLightMode }) => {
  const handleLightMode = () => {
    setLightMode(!lightMode);

    // const root = document.querySelector("#root");

    // if (root.classList.contains("light-mode")) {
    //   root.classList.remove("light-mode");
    // } else {
    //   root.classList.add("light-mode");
    // }
    // root.classList.toggle("light-mode");
  };

  return (
    <div className="bg-element">
      <div className="container">
        <div className="d-flex justify-content-between py-4">
          <h1 className="fs-3">Where in the world</h1>
          <div
            onClick={handleLightMode}
            className="d-flex gap-2 align-items-center"
            style={{
              cursor: "pointer",
            }}
          >
            <IoMdMoon />
            <p className="m-0">Dark mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
