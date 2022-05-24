import "./App.css";

import { useEffect, useState } from "react";

import RadioStationList from "./component/radioStation";

function App() {
  const [radioStation, setRadioStation] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRadioStation(data));
  }, []);
  return (
    <div className="App">
      <RadioStationList radioStation={radioStation} />
    </div>
  );
}

export default App;
