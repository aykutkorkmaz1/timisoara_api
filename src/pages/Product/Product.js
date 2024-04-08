import './Product.css';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Cog} from 'lucide-react';
import {Trash2} from 'lucide-react';
import {Star} from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import {MessageCircleQuestion} from 'lucide-react';
import {Share} from 'lucide-react';
import {Truck} from 'lucide-react';
import {Package} from 'lucide-react';
import {ScanEye} from 'lucide-react';
import {ChevronsDown} from 'lucide-react';
import classNames from 'classnames';

function Product() {

  const {id} = useParams();
  const URL = `https://65ffe1bcdf565f1a61456e41.mockapi.io/api/v1/products/products/${id}`
  const [api, setApi] = useState([]);

  console.log(URL)

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
    <div className="Product">
      <Navbar />
      <div className='wrapper-product'>
        
        <div className='image-section-product'>
          <img src={api.imageURL} />
          <div className='item-actions'>
            <button className='delete-item'><Trash2 color="#181818" size={22} strokeWidth={1.5} /></button>
            <button className='edit-item'><Cog color="#181818" size={22} strokeWidth={1.5} /></button>
          </div>
        </div>

        <div className='details-section'>
          <div className='general-details'>
            <div className='product-generals'>
              <p id='product-brand'>TIMISOARA</p>
              <p id='product-name'>{api.title}</p>
              <div className='product-rating'>
                <Star color="#181818" size={14} strokeWidth={1} fill='#181818' />
                <Star color="#181818" size={14} strokeWidth={1} fill='#181818' />
                <Star color="#181818" size={14} strokeWidth={1} fill='#181818' />
                <Star color="#181818" size={14} strokeWidth={1} fill='#181818' />
                <Star color="#181818" size={14} strokeWidth={1} />
                <p className='product-votes'>19,427</p>
              </div>
              <div className='product-pricing'>
                <p className='product-current-price'>{api.pricing}</p>
                <p className='product-old-price'>$89.99</p>
                <p className='percent-save-indicator'>SAVE 19%</p>
              </div>
              <div className='product-current-viewers'>
                <ScanEye color="#181818" size={25} strokeWidth={1.5} />
                <p>32 people are viewing this right now</p>
              </div>
              <div className='product-left-quantity'>
                <ChevronsDown color="#181818" size={25} strokeWidth={1.5}/>
                <p>Remaining products:</p>
                <p>4 products</p>
              </div>
              <div className='product-size-select'>
                <p>Size: {api.size}</p>
                <div className='size-select'>
                  <p className = {
                    classNames(api.size === 'S' ? 'product-size-active' : 'product-size-passive')
                  }>S</p>
                  <p className = {
                    classNames(api.size === 'M' ? 'product-size-active' : 'product-size-passive')
                  }>M</p>
                  <p className = {
                    classNames(api.size === 'L' ? 'product-size-active' : 'product-size-passive')
                  }>L</p>
                </div>
              </div>
            </div>
            <button className='favorite-btn'>
              <Star color="#181818" size={22} strokeWidth={1.5}/>
            </button>
          </div>

          <div className='product-buy'>
            <div>
              <p>Quantity</p>
              <div className='product-set-quantity'>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <button className='product-order-button'>ORDER NOW</button>
          </div>

          <div className='product-about'>
            <div className='product-utilities'>
              <div>
                <ArrowUpDown color="#181818" size={22} strokeWidth={1.5} />
                <p>Compare</p>
              </div>
              <div>
                <MessageCircleQuestion color="#181818" size={22} strokeWidth={1.5} />
                <p>Ask a question</p>
              </div>
              <div>
                <Share color="#181818" size={22} strokeWidth={1.5} />
                <p>Share</p>
              </div>
            </div>
            <hr />
            <div className='product-delivery-infos'>
              <div>
                <Truck color="#181818" size={22} strokeWidth={1.5} />
                <p>Estimated delivery: Apr 7 - Apr 9</p>
              </div>
              <div>
                <Package color="#181818" size={22} strokeWidth={1.5} />
                <p>Free shipping & Delivery: For all orders that exceeds $80</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Product;