import { useEffect, useState } from 'react';
import axios from 'axios';

export const CartItem = ({id}) => {
    console.log('id', id);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(({data}) => {
            setCartItem(data);
        });
    }, []);

    return (
        <div className='cartItem'>
            <div className='cartTitle'>
                {cartItem.title}
            </div>
            <div>
                <img src={cartItem.images} className='cartImage' />
            </div>
            <button className='deleteBttn'>
                Delete
            </button>
        </div>
    );
}