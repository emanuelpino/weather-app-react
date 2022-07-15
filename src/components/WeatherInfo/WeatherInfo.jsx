import "./WeatherInfo.scss";

const WeatherInfo = ({ info }) => {
  return (
    <div className="WeatherInfo">
      <h2 className="WeatherInfo-name">{info?.location.name}</h2>
      <h3 className="WeatherInfo-country">{info?.location.country}</h3>
      <span className="WeatherInfo-temp">{info?.current.temp_c}°C</span>
      <figure>
        <img
          className="WeatherInfo-icon"
          src={`http:${info?.current.condition.icon}`}
          alt="weather icon"
        />
      </figure>
    </div>
  );
};

export default WeatherInfo;
