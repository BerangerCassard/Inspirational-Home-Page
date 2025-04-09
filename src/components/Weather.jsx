import React, { useState, useEffect } from 'react';

/**
 * Composant Weather - Affiche les informations météorologiques
 * 
 * Ce composant récupère les informations météorologiques pour une ville spécifique
 * et les affiche sous forme de carte interactive.
 */
function Weather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = 'fe8d75aa93c4dbe8b4a970e7e06969c3';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${API_KEY}`;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                setWeather(data);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) {
        return <div>Chargement des informations météorologiques...</div>;
    }

    if (error) {
        return <div>Erreur lors du chargement des informations météorologiques: {error.message}</div>;
    }

    return (
        <div className="fixed top-0 right-0 p-4">
            <div className="bg-slate-400 bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-white font-bold">Météo à {weather.name}</h2>
                <p className="text-white">Température: {Math.round(weather.main.temp - 273.15)}°C</p>
                <p className="text-white">Conditions: {weather.weather[0].description}</p>
            </div>
        </div>
    );
}

export default Weather;