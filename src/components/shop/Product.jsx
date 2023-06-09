import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export const Product = ({item}) => {
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='product' key={item.id}>
            <Link to={`/product/${item.id}`} state={{item}} className='productLink'>
            <img src={item.images} alt='' className='productImage' />
            <p className="productTitle">
                <strong>{item.title}</strong>
            </p>
            <p className="productPrice">
                ${item.price}
            </p>
            </Link>
            <button
                className='addToCartBttn bttn'
                onClick={() => addToCart(item.id)}
            >
                Add to Cart
            </button>

        </div>
    );
};