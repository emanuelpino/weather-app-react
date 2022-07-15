import { useState } from "react";
import "./WeatherForm.scss";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
    setCity("");
  };

  const handlechange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };

  return (
    <form className="WeatherForm" onSubmit={handlesubmit}>
      <input
        className="WeatherForm-input"
        type="text"
        onChange={handlechange}
        value={city}
        placeholder="Enter City
        "
      />
      <button className="WeatherForm-button">Search</button>
    </form>
  );
};

export default WeatherForm;
