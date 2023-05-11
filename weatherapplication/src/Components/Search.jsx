import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
function Search() {
  return (
    <div className="flex flex-row justify-around my-10 items-center">
      <div className="flex  w-3/4 justify-center space-x-4 flex-row items-center mx-4">
        <input
          type="text"
          placeholder="search with City name.... "
          className="py-2 focus:outline-none capitalize placeholder:capitalize w-3/4 shadow-xl text-xl text-center"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={25}
          className="hover:scale-125 transition ease-out  text-white cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          size={25}
          className="hover:scale-125 transition ease-out  text-white cursor-pointer"
        />
      </div>
      <div className="flex justify-center w-1/4  flex-row items-center">
        <button
          className="text-white cursor-pointer font-light text-xl
        "
        >
          °C
        </button>
        <p className="mx-2 text-white">|</p>
        <button
          className="text-white cursor-pointer font-light text-xl
        "
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Search;
