import crossed from './assets/img/crossed.jpg';
import './App.css';
//import axios for use of Public Holiday API
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
//import both files in components folder
import Holidays from './components/Holidays.js';
import Search from './components/Search.js';

function App() {
  //list constants for the API
  const [holidays, setHolidays] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHolidays, setFilteredHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    //fetch the API data
    //fetch API data using axios for API URL https://date.nager.at/api/v3/publicholidays/2025/AT and Request of GET /api/v3/PublicHolidays/{Year}/{CountryCode} 
    const fetchHolidays = async () => {
      try {
        const response = await axios.get('https://date.nager.at/api/v3/publicholidays/2025/DE');
        setHolidays(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching holidays:', error);
        setLoading(false);
      }
    };
    fetchHolidays();
  }, []);
  

  useEffect(() => {
    if (searchTerm) {
      const filtered = holidays.filter(holiday =>
        holiday.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        holiday.localName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        holiday.date.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHolidays(filtered);
    } else {
      setFilteredHolidays(holidays);
    }
  }, [searchTerm, holidays]);

  //if the data is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  } 

//create a small white header with a tiny height and with a tiny logo and red title 'Public Holiday'

  return (
    <div className="App">
      <header className="App-header">
        <img src={crossed} alt="crossed out" style={{ height: '1.5em' }} /> 
        <h1 style={{ color: '#dc3545', fontSize: '0.8em' }}>Public Holidays</h1>
      </header>

<div id="output">
  <div className="search-bar">
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </div>
  <div className="holiday-count">
    <p>Total Holidays: {filteredHolidays.length}</p>
  </div>  
  <Holidays holidays={filteredHolidays} />
  <div className="footer">
    <p>
      <a href="https://date.nager.at/Api">Powered by Public Holiday API</a>
    </p>
  </div>
</div>

    </div>
  );
}

export default App;
