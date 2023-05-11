import React from "react";

function Navbar() {
  const city = [
    { id: "1", city: "London" },
    { id: "2", city: "Sydney" },

    { id: "3", city: "Tokyo" },

    { id: "4", city: "Toronto" },

    { id: "5", city: "Paris" },
  ];
  return (
    <div className="text-white flex justify-around px-8 font-medium">
      {city.map((ele) => {
        return (
          <button id={ele.id} className="hover:cursor-pointer">
            {ele.city}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
