import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ setToggleDropDown, setOptionDisplay, handleRegion }) => {
  const [options, setOption] = useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  const handleClick = (choosenOption) => {
    console.log(choosenOption);
    setOptionDisplay(choosenOption);
    setToggleDropDown(false);
    handleRegion(choosenOption === "America" ? "Americas" : choosenOption);
  };
  return (
    <div className="bg-element rounded-2 position-absolute w-100 top-100 start-0 mt-3 py-3">
      {options.map((option) => {
        return (
          <p
            onClick={() => {
              handleClick(option);
            }}
            key={option}
            className="option px-3 py-2 m-0"
          >
            {option}
          </p>
        );
      })}
    </div>
  );
};

export default Dropdown;
