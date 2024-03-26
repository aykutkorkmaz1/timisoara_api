import './App.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Item from './components/Item/Item';
import axios from 'axios';

function App() {

  const URL_PARAM = "products"
  const URL = `https://65ffe1bcdf565f1a61456e41.mockapi.io/api/v1/products/${URL_PARAM}`
  const [api, setApi] = useState([]);

  console.log("API", api)

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    try {
      const response = await axios.get(URL);
      setApi(response.data);
    } catch (error) {
        console.error('GET error:', error)
    }
  }


  return (
    <div className="App">
      <Navbar />

      <div className='homepage-campaign'>
        LIMITED TIME OFFER! BUY 2 PAY 1 WITH 35% OFF! 
      </div>

      <div className='header'>
        PRODUCTS
      </div>

      <div className='item-list'>
        {
          api.map(api => (
            <Item key={api.id} item={api} />
          ))
        }
      </div>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/publish'><button className='publish-page'>PUBLISH PRODUCT</button></Link>
      <p className='thank-you'>Made by Aykut. Thanks to Metecan, who has provided indescribable benefits to my career.</p>
    </div>
  );
}

export default App;