import "./weather.css";

const Weather = ({ data, currentUserData }) => {
  console.log("from weather component", currentUserData);

  return (
    <div>
      {!data && (
        <div className="weather">
          <div className="top">
            <div>
              <p className="city">{currentUserData?.name}</p>
              <p className="weather-description">
                {currentUserData?.weather[0]?.description}
              </p>
            </div>
            <img
              src={`Icons/${currentUserData?.weather[0]?.icon}.png`}
              alt="weather"
              className="weather-icon"
            />
          </div>
          <div className="bottom">
            <p className="temperature">
              {Math.round(currentUserData?.main?.temp)}°C
            </p>
            <div className="details">
              <div className="parameter-row">
                <span className="parameter-label">Feels like:</span>
                <span className="parameter-value">
                  {Math.round(currentUserData?.main?.feels_like)}°C
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Wind speed:</span>
                <span className="parameter-value">
                  {currentUserData?.wind?.speed}km/h
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Humidity:</span>
                <span className="parameter-value">
                  {currentUserData?.main?.humidity}%
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Pressure:</span>
                <span className="parameter-value">
                  {currentUserData?.main?.pressure}Pa
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        {data && (
          <div className="weather">
            <div className="top">
              <div>
                <p className="city">{data?.city}</p>
                <p className="weather-description">
                  {data?.weather[0]?.description}
                </p>
              </div>
              <img
                src={`Icons/${data?.weather[0]?.icon}.png`}
                alt="weather"
                className="weather-icon"
              />
            </div>
            <div className="bottom">
              <p className="temperature">{Math.round(data?.main?.temp)}°C</p>
              <div className="details">
                <div className="parameter-row">
                  <span className="parameter-label">Feels like:</span>
                  <span className="parameter-value">
                    {Math.round(data?.main?.feels_like)}°C
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Wind speed:</span>
                  <span className="parameter-value">
                    {data?.wind?.speed}km/h
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Humidity:</span>
                  <span className="parameter-value">
                    {data?.main?.humidity}%
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Pressure:</span>
                  <span className="parameter-value">
                    {data?.main?.pressure}Pa
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
