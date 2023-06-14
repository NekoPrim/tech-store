import { useEffect, useState } from 'react';
import axios from 'axios';

export const CartItem = ({id}) => {
    console.log('id', id);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(({data}) => {
            setCartItems(data);
        });
    }, []);

    return (
        <div className='cartItem'>
            <div className='cartTitle'>
                {cartItems.title}
            </div>
            <div>
                <img src={cartItems.images} className='cartImage' />
            </div>
            <button className='deleteBttn'>
                Delete
            </button>
        </div>
    );
}