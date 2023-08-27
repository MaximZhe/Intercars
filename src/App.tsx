import { useEffect, useState } from 'react'
import './App.scss'
import Button from './components/UI/Button/Button'
import axios from 'axios'


import ListRates from './components/ListRates/ListRates';
function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5173/data/data.json');
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [])

  return (
    <div className='main'>
      <div className='container'>
        <div>
          <Button className='search'>
            Search
          </Button>
          <ListRates/>
        </div>
      </div>
    </div>
  )
}

export default App
