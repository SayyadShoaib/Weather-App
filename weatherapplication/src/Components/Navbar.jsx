import React from "react";

function Navbar({ cityfnct }) {
  const city = [
    { id: "1", city: "Bengaluru" },
    { id: "2", city: "Dehli" },

    { id: "3", city: "Mumbai" },

    { id: "4", city: "pune" },

    { id: "5", city: "Hyderabad" },
  ];

  const getdata = (cityname) => {
    cityfnct(cityname);
  };

  return (
    <div className="text-white flex justify-around px-8 font-medium max-[420px]:text-xs">
      {city.map((ele) => {
        return (
          <button
            onClick={() => {
              getdata(ele.city);
            }}
            id={ele.id}
            className="hover:cursor-pointer"
          >
            {ele.city}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
