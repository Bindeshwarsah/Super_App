import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';
import axios from 'axios';
import pressureLogo from "../../assets/logo/pressureLogo.svg"
import windLogo from "../../assets/logo/windLogo.svg"
import humidityLogo from "../../assets/logo/humidityLogo.svg"

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = '88c686317efa4c7bb53174951232611';
                const city = 'Visakhapatnam';
                const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
                const response = await axios.get(apiUrl);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchWeatherData();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Loading...</p>;
    }
    if (!weatherData) {
        return <p className={styles.error}>Error fetching weather data</p>;
    }

        // Map Weather Icons based on the weather condition
    const getWeatherIcon = (conditionCode) => {
        switch (conditionCode) {
            case 1000:
                return 'wi-day-sunny'; // Clear sky
            case 1003:
                return 'wi-day-cloudy'; // Partly cloudy
            case 1006:
                return 'wi-cloudy'; // Cloudy
            case 1189:
            case 1192:
            case 1195:
            case 1198:
                return 'wi-rain'; // Rain
            case 1183:
            case 1186:
            case 1180:
            case 1240:
            case 1243:
                return 'wi-showers'; // Showers
            case 1150:
            case 1153:
            case 1168:
            case 1171:
                return 'wi-thunderstorm'; // Thunderstorm
            case 1063:
            case 1183:
            case 1072:
            case 1087:
                return 'wi-sleet'; // Sleet
            case 1080:
            case 1147:
            case 1180:
            case 1183:
                return 'wi-snow'; // Snow
            default:
                return 'wi-day-sunny'; // Default icon
        }
    };


    const conditionCode = weatherData.current.condition.code;
    const weatherIconClass = getWeatherIcon(conditionCode);

    return (
        <div className={styles.weatherContainer}>
            <div className={styles.weatherInfo}>
                <i className={`wi ${weatherIconClass} ${styles.weatherIcon}`}></i>
                <p className={styles.weatherCondition}>{weatherData.current.condition.text}</p>
            </div>
            <hr className={styles.horizontalLine}/>
            <div className={styles.temperatureInfo}>
                <p className={styles.tempMeasurement}>{weatherData.current.temp_c} °C</p>

                <div className={styles.pressureInfo}>
                    <div className={styles.pressureLogo}>
                        <img src={pressureLogo} alt="Pressurelogo" />
                    </div>
                    <div>
                        <p> {weatherData.current.pressure_mb} mbar</p>
                        <p>Pressure</p>
                    </div>
                </div>

            </div>
            <hr className={styles.horizontalLine}/>
            <div className={styles.windHumidityInfo}>
                <div className={styles.humidityInfo}>
                    <div>        
                        <img src={windLogo} alt="Windlogo" />
                    </div>
                    <div>
                        <p> {weatherData.current.wind_kph} km/h</p>
                        <p>Wind</p>
                    </div>
                </div>
               
                <div className={styles.windInfo}>
                    <div>
                        <img src={humidityLogo} alt="Humiditylogo" />
                    </div>
                    
                    <div>
                        <p> {weatherData.current.humidity}%</p>
                        <p>Humidity</p>
                    </div>
               </div>
                
            </div>
        </div>
    );
};

export default Weather;