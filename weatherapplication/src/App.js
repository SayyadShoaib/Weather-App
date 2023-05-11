import "./App.css";
import DateandTime from "./Components/DateandTime";
import Information from "./Components/Information";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
  return (
    <div className="mx-auto max-w-screen-md py-5 mt-10 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-300">
      <Navbar />
      <Search />
      <DateandTime />
      <Information />
    </div>
  );
}

export default App;
