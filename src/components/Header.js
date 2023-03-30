import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowSidebar } from "../store/show";
import { autoSuggestApi } from "../utils/constants";
import search_icon from "../assets/search_icon.jpg";
import { storeCache } from "../store/Cache";

const Header = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.cache);
  const dispatch = useDispatch();

  const handleHamburgerBtn = () => {
    dispatch(toggleShowSidebar());
  };

  const getSuggestions = async () => {
    const data = await fetch(autoSuggestApi + searchTxt);
    const result = await data.json();
    setSuggestions(result[1]);
    setShowSuggestions(true);
    dispatch(storeCache({ [searchTxt]: result[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchTxt]) {
        setSuggestions(cache[searchTxt]);
      } else {
        getSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTxt]);

  return (
    <div className="header fixed border-gray-300 border-b-2 bg-white flex justify-between p-4 w-full z-10 items-center top-0">
      <div className="header-logo-container flex space-x-2 items-center">
        <button onClick={handleHamburgerBtn}>
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="hamburger-icon"
          />
        </button>
        <Link to="/">
          <img
            className="h-14"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="Youtube-logo"
          />
        </Link>
      </div>
      <div className="header-search-container w-1/2 relative">
        <div className="w-full flex">
          <input
            type="text"
            className="border-2 border-gray-400 p-2 rounded-l-full h-10 w-full border-r-0 box-border"
            onChange={(event) => {
              setsearchTxt(event.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button className="search-icon h-10 rounded-r-full border-2 border-gray-400 p-1 bg-gray-300">
            Search
            {/* <img
            className="h-full"
            src="https://tse3.mm.bing.net/th?id=OIP.artsGkcWwb_UgjGqyw0shwHaHa&pid=Api&P=0"
          /> */}
          </button>
        </div>
        {showSuggestions && suggestions.length != 0 && (
          <div className="suggestions absolute top-full bg-white w-full rounded-lg shadow-lg p-2">
            <ol>
              {suggestions.map((element, index) => {
                return (
                  <>
                    <li key={index} className="m-1 hover:bg-gray-200 p-1">
                      <img
                        src={search_icon}
                        className="w-5 inline mr-1"
                        alt="search icon"
                      />
                      {element}
                    </li>
                  </>
                );
              })}
            </ol>
          </div>
        )}
      </div>
      <div className="header-user-logo">
        <img
          className="h-10"
          src="https://tse2.mm.bing.net/th?id=OIP._BXCcqxwmsduYNCJj2XDtgHaHa&pid=Api&P=0"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Header;
