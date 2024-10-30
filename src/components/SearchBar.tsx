import React, { useState } from 'react'

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
                placeholder='Enter city name' />
                <button onClick={handleSearch}>Search</button>
        </div>
    )
};

export default SearchBar;

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}