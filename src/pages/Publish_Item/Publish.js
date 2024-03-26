import './Publish.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useState } from 'react';

function Publish() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [image, setIMG] = useState('');
  
  const post_process = () => {
    const URL = "https://65ffe1bcdf565f1a61456e41.mockapi.io/api/v1/products/products/"
    const data = {title: {title}, price: {price}, size:{size}, imageURL:{image}};

    axios.post(URL, data)
    .catch(function (error) {
      console.warn('POST error', error);
    })
  }


  return (
    <div className="Publish">
      <Navbar />
      <div className='page-header'>
        ADD PRODUCT
      </div>
      <div className='wrapper'>
        <div className='input-section'>
          <input type='text' value={title} placeholder="Provide product name" onChange={e => setTitle(e.target.value)}/>
          <input type='number' value={price} placeholder="Provide price" onChange={e => setPrice(e.target.value)} />
          <input name='size' value={size} placeholder="Provide size" onChange={e => setSize(e.target.value)} />
          <input name='url' value={image} placeholder="Provide URL of image" onChange={e => setIMG(e.target.value)} />

          <button onClick={post_process} className='submit-btn'>ADD PRODUCT</button>
        </div>
        <div className='image-section'>
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Publish;