import axios from "axios";
import { DateTime } from "luxon";

const Base_url = "https://api.openweathermap.org/data/2.5";
const API = "f0d8e36b6e7c534ac583c9c185a407bb";

const getdata = (info, param) => {
  const url = new URL(Base_url + "/" + info);
  url.search = new URLSearchParams({ ...param, appid: API });
  // console.log(url);

  const data = axios.get(url).then((res) => res.data);

  return data;
};

const formatCurrentData = (data) => {
  // console.log(data);
  const {
    timezone,
    dt,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    weather,
    sys: { country, sunrise, sunset },
    wind: { speed },
  } = data;

  const { main, description, icon } = weather[0];

  return {
    timezone,
    dt,
    temp,
    feels_like,
    temp_max,
    temp_min,
    name,
    country,
    sunrise,
    sunset,
    icon,
    description,
    main,
    speed,
    humidity,
  };
};

const getweatherdata = async (param) => {
  const Currentdata = await getdata("weather", param).then((data) =>
    formatCurrentData(data)
  );

  const { timezone, dt } = Currentdata;

  const { icon } = Currentdata;

  DateCOnverter(timezone, dt);
  const icondata = geticon(icon);
  // console.log(icondata);

  return Currentdata;
};

const DateCOnverter = (
  timezone,
  dt,
  format = " cccc, dd LLL yyyy' | Local Time :' hh:mm a"
) => {
  //DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);
  return DateTime.now().setZone(timezone).toFormat(format);
};

const geticon = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
export default getweatherdata;
export { geticon, DateCOnverter };
