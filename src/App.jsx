import { useEffect, useState } from "react";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Map from "./components/Map/Map";
import './App.scss'

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async (city = "london") => {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${city}`
      );
      const data = await request.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className="App">
      <div>
        <WeatherForm onChangeCity={handleChangeCity} />
        <WeatherInfo info={weather} />
      </div>
      <div>
        <Map info={weather} />
      </div>
    </div>
  );
};

export default App;
