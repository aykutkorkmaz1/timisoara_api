import './Item.css';
import { Link } from 'react-router-dom';

function Item({ item }) {
    return (
        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
        <div className='Item'>
            <img src={item.imageURL} />
            <div className='item-details'>
                <div className='item-name'>{item.title}</div>
                <div className='item-price'>{item.pricing}</div>
            </div>
        </div>
        </Link>
    )
}

export default Item;