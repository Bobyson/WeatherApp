import "./App.css";
import Search from "./assets/components/search";
import Weather from "./assets/components/weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useEffect, useState } from "react";
import Forecast from "./assets/components/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [currentUserForecast, setCurrentUserForecast] = useState(null);

  useEffect(() => {
    // Get the user's current location when the component mounts
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

        // Fetch current weather data using the obtained latitude and longitude
        fetch(
          `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch current weather data");
            }
            return response.json();
          })
          .then((data) => {
            setCurrentUserData(data);
          })
          .catch((error) => {
            console.error("Error fetching current weather data:", error);
          });

        // Fetch forecast data using the obtained latitude and longitude
        fetch(
          `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch forecast data");
            }
            return response.json();
          })
          .then((data) => {
            setCurrentUserForecast(data);
          })
          .catch((error) => {
            console.error("Error fetching forecast data:", error);
          });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <Weather data={currentWeather} currentUserData={currentUserData} />
        <Forecast data={forecast} currentUserForecast={currentUserForecast} />
      </div>
    </>
  );
}

export default App;
