import { WEATHER_DATA } from "./ActionType";
function StoreWeatherData(data, dispatch) {
  dispatch({ type: WEATHER_DATA, payload: data });
}

export { StoreWeatherData };
