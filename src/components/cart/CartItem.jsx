import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext'

export const CartItem = ({item}) => {
    console.log('item', item);
    const [cartItem, setCartItem] = useState([]);
    const { removeFromCart } = useContext(ShopContext);

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${item.productId}`).then(({data}) => {
            setCartItem(data);
        });
    }, []);

    return (
        <div className='cartItem'>
            <div className='cartTitle'>
                {cartItem.title}
            </div>
            <div>
                <img src={cartItem.images} className='cartImage' alt='' />
            </div>
            <button className='deleteBttn' onClick={() => removeFromCart(item.id, cartItem.id)}>
                Delete
            </button>
        </div>
    );
}