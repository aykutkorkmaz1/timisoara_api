import './Publish.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useState } from 'react';

function Publish() {

  const [title, setTitle] = useState('');
  const [pricing, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [image, setIMG] = useState('');
  const data = {title, pricing, size, image};


  return (
    <div className="Publish">
      <Navbar />
      <div className='page-header'>
        ADD PRODUCT
      </div>
      <div className='wrapper-publish'>
        <div className='input-section'>
          <input type='text' value={title} placeholder="Provide product name" onChange={e => setTitle(e.target.value)}/>
          <input type='number' value={pricing} placeholder="Provide price" onChange={e => setPrice(`$`+e.target.value)} />
          <input name='size' value={size} placeholder="Provide size" onChange={e => setSize(e.target.value)} />
          <input name='url' value={image} placeholder="Provide URL of image" onChange={e => setIMG(e.target.value)} />

          <button className='submit-btn'>ADD PRODUCT</button>
        </div>
        <div className='image-section-publish'>
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Publish;