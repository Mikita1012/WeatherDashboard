import { WeatherData } from "../types/WeatherData";

interface WeatherDisplayProps {
    weather: WeatherData
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
    return (
        <div>
            <h2>Weather in {weather.city}</h2>
            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.description} />
            <p>Temperature: {weather.temperature}</p>
            <p>Condition: {weather.description}</p>
            <p>Humidity: {weather.humidity}</p>
            <p>Wind Speed: {weather.windSpeed}</p>
        </div>
    )
};

export default WeatherDisplay;