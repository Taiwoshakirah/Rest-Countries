import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "../dropdown/Dropdown";
import './SearchSection.css'

const SearchSection = ({ handleSearch, isLoading, handleRegion }) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [optionDisplay, setOptionDisplay] = useState("");

  const handleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column gap-4 text-start py-4 flex-md-row justify-content-between">
          <div className="search-input position-relative">
            <IoMdSearch className="fs-2 position-absolute start-0 top-0 mt-3 ms-3" />
            <input
              disabled={isLoading}
              onChange={handleInputChange}
              className=" border-0 py-3 rounded-2 ps-5 bg-element custom-text-white w-100"
              type="text"
              placeholder="Search for a country..."
            />
          </div>
          <div onClick={handleDropDown} className="dropdown1 bg-element py-3 ps-4 rounded-2 d-flex justify-content-between align-items-center position-relative">
            <p className="m-0">
              {optionDisplay === "" ? "Filter by region" : optionDisplay}
            </p>
            <IoIosArrowDown  />
            {toggleDropDown ? (
              <Dropdown
                setToggleDropDown={setToggleDropDown}
                setOptionDisplay={setOptionDisplay}
                handleRegion={handleRegion}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
