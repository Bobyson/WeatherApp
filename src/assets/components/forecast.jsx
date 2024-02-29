import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data, currentUserForecast }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      {!data && (
        <>
          <label className="title">Daily</label>
          <Accordion allowZeroExpanded>
            {currentUserForecast?.list?.splice(0, 7).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        src={`Icons/${item.weather[0].icon}.png`}
                        alt="weather"
                        className="icons-small"
                      />
                      <label className="days">{forecastDays[idx]}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}°C /{" "}
                        {Math.round(item.main.temp_max)}°C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-items">
                      <label>Feels like:</label>
                      <label>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Pressure:</label>
                      <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Humidity:</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Wind speed:</label>
                      <label>{item.wind.speed}km/h</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Clouds:</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Sea level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
      {data && (
        <>
          <label className="title">Daily</label>
          <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        src={`Icons/${item.weather[0].icon}.png`}
                        alt="weather"
                        className="icons-small"
                      />
                      <label className="days">{forecastDays[idx]}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}°C /{" "}
                        {Math.round(item.main.temp_max)}°C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-items">
                      <label>Feels like:</label>
                      <label>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Pressure:</label>
                      <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Humidity:</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Wind speed:</label>
                      <label>{item.wind.speed}km/h</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Clouds:</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-items">
                      <label>Sea level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </>
  );
};

export default Forecast;
