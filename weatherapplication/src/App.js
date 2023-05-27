import "./App.css";
import DateandTime from "./Components/DateandTime";
import Information from "./Components/Information";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import getweatherdata from "./JS files/fetch";
import { useState, useEffect } from "react";

function App() {
  const [city, getCity] = useState("Bengaluru");
  const [unit, getUnit] = useState("metric");
  const [Data, getData] = useState(null);
  useEffect(() => {
    const startfunction = async () => {
      try {
        await getweatherdata({ q: city, units: unit }).then((data) =>
          getData(data)
        );
      } catch (err) {
        console.log(err);
      }
    };
    // console.log(city);
    startfunction();
  }, [city, unit]);

  return (
    <div className="mx-auto max-w-screen-md py-5 mt-10 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-300">
      {Data ? (
        <div>
          <Navbar weather={Data} cityfnct={getCity} />
          <Search weather={Data} cityfnct={getCity} />
          <DateandTime weather={Data} />
          <Information weather={Data} />
        </div>
      ) : (
        <div>Please enter valid city name</div>
      )}
    </div>
  );
}

export default App;
