import { useEffect, useState } from 'react'
import './App.scss'
import Button from './components/UI/Button/Button'
import axios from 'axios'
import { ITariffData } from './types/types'



import ListRates from './components/ListRates/ListRates';
function App() {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [tariffData, setTariffData] = useState<ITariffData[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5173/data/data.json');
        const data = response.data;
        console.log(data);
        setTariffData(data);

      } catch (error) {
        console.error(error);
      }
    };
    if (isButtonClicked) {
      fetchData();
    }
  }, [isButtonClicked])
  const handleButtonClick = () => {
    setButtonClicked(true);
  };
  return (
    <div className='main'>
      <div className='container'>
        <div>
          <Button className='search' onClick={handleButtonClick}>
            Search
          </Button>
          <ListRates datas={tariffData} />
        </div>
      </div>
    </div>
  )
}

export default App
