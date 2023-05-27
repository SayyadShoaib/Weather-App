import React from "react";
import { geticon, DateCOnverter } from "../JS files/fetch";
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
function Information({ weather }) {
  const {
    main,
    icon,
    temp,
    speed,
    feels_like,
    humidity,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    timezone,
  } = weather;

  const image_url = geticon(icon);

  const get_sunrise = DateCOnverter(timezone, sunset, "hh:mm a");

  const get_sunset = DateCOnverter(timezone, sunrise, "hh:mm a");

  return (
    <div className="my-10  ">
      <div className="text-center text-white text-xl font-light   max-[420px]:text-xs">
        <p>{main}</p>
      </div>
      <div className="flex flex-row justify-around items-center my-4">
        <div>
          <img size={20} src={image_url} alt="" className="max-[420px]:w-12" />
        </div>
        <div className="text-white text-4xl font-bold max-[420px]:text-sm">
          {Math.floor(temp) + "°"}
        </div>

        <div className="flex flex-col justify-center items-center text-white text-sm text-left">
          <div className="flex flex-row justify-center items-center max-[420px]:text-xs ">
            <FontAwesomeIcon icon={faTemperatureHalf} className="mr-2" /> fell
            in :{" "}
            <span className=" font-bold ml-2">
              {Math.floor(feels_like) + "°"}
            </span>
          </div>

          <div className="flex flex-row justify-center items-center max-[420px]:text-xs ">
            <FontAwesomeIcon icon={faDroplet} className="mr-2" /> Humidity :{" "}
            <span className="font-bold ml-2">{Math.floor(humidity) + "%"}</span>
          </div>

          <div className="flex flex-row justify-center items-center max-[420px]:text-xs ">
            <FontAwesomeIcon icon={faWind} className="mr-2" /> Wind :{" "}
            <span className="font-bold ml-2">{Math.floor(speed)} Km/h</span>
          </div>
        </div>
      </div>

      <div
        className="my-6 flex flex-row justify-center items-center text-white   max-[420px]:text-xs "
        id="buttomsection"
      >
        <FontAwesomeIcon icon={faSun} size={16} />
        <p className="mx-2">
          Sun rise : <span className="font-light">{get_sunrise}</span>
        </p>
        <p className="mx-2">|</p>

        <FontAwesomeIcon icon={faCloudSun} size={16} />
        <p className="mx-2">
          Sun set : <span className="font-light mx-2">{get_sunset}</span>
        </p>
        <p className="mx-2">|</p>

        <FontAwesomeIcon icon={faTemperatureArrowUp} size={16} />
        <p className="mx-2">
          Temp-High :{" "}
          <span className="font-light mx-2">{Math.floor(temp_max)}°</span>
        </p>
        <p className="mx-2">|</p>

        <FontAwesomeIcon icon={faTemperatureArrowDown} size={16} />
        <p className="mx-2">
          Temp-Low :{" "}
          <span className="font-light mx-2">{Math.floor(temp_min)}°</span>
        </p>
      </div>
      <hr className="font-light w-3/4 m-auto " />
    </div>
  );
}

export default Information;
