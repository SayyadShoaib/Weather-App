import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faTemperatureHalf,
  faSun,
  faCloudSun,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
function Information() {
  return (
    <div className="my-10">
      <div className="text-center text-white text-xl font-light">
        <p>Clear</p>
      </div>
      <div className="flex flex-row justify-around items-center my-4">
        <div>
          <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
        </div>
        <div className="text-white text-4xl font-bold">18°</div>
        <div className="flex flex-col justify-center items-center text-white text-sm text-left">
          <div className="flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faTemperatureHalf} className="mr-2" /> fell
            in : <span className=" font-bold ml-2">17°</span>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faDroplet} className="mr-2" /> Humidity :{" "}
            <span className="font-bold ml-2">45%</span>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faWind} className="mr-2" /> Wind :{" "}
            <span className="font-bold ml-2">4 Km/h</span>
          </div>
        </div>
      </div>
      <div className="my-6 flex flex-row justify-center items-center text-white ">
        <FontAwesomeIcon icon={faSun} size={16} />
        <p className="mx-2">
          Sun rise : <span className="font-light">6:00 AM</span>
        </p>
        <p className="mx-2">|</p>

        <FontAwesomeIcon icon={faCloudSun} size={16} />
        <p className="mx-2">
          Sun set : <span className="font-light mx-2">7:00 PM</span>
        </p>
        <p className="mx-2">|</p>

        <FontAwesomeIcon icon={faTemperatureArrowUp} size={16} />
        <p className="mx-2">
          Temp-High : <span className="font-light mx-2">40°</span>
        </p>
        <p className="mx-2">|</p>

        <FontAwesomeIcon icon={faTemperatureArrowDown} size={16} />
        <p className="mx-2">
          Temp-Low : <span className="font-light mx-2">18°</span>
        </p>
      </div>
      <hr className="font-light w-3/4 m-auto " />
    </div>
  );
}

export default Information;
