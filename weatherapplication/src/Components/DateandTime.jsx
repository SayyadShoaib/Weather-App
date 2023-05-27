import React from "react";
import { DateCOnverter } from "../JS files/fetch";

function DateandTime({ weather }) {
  const { timezone, dt, name, country } = weather;

  const date = DateCOnverter(timezone, dt);
  return (
    <div
      className="text-center
    "
    >
      <div className="my-6 text-white justify-center items-center font-extralight max-[420px]:text-xs">
        {date}
      </div>
      <div className="font-medium text-white text-xl my-3 max-[420px]:text-xs">
        {name} ,{country}
      </div>
    </div>
  );
}

export default DateandTime;
