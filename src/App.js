import './App.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Item from './components/Item/Item';
import { useMethod_GET } from './ApiServices';

function App() {

  const { data, error } = useMethod_GET();

  console.log('DATA', data)

  return (
    <div className="App">
      <Navbar />

      <div className='homepage-campaign'>
        LIMITED TIME OFFER! BUY 2 PAY 1 WITH 35% OFF! 
      </div>

      <div className='header'>
        <p className='header-text'>PRODUCTS</p>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/publish'><button className='publish-page'>PUBLISH PRODUCT</button></Link>
      </div>

      {
        data ? (
          <div className='item-list'>
              {data.map(data => (
                <Item key={data.id} item={data} />
              ))}
          </div>
        ) : ( <p>LOADING</p> )
      }
      <p className='thank-you'>Made by Aykut. Thanks to @metecan, who has provided indescribable benefits to my career.</p>
    </div>
  );
}

export default App;