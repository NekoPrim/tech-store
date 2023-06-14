import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { CartItem } from './CartItem';
import './Cart.css';

export const Cart = () => {
    const { cart } = useContext(ShopContext);
    return (
        <div className='cart'>
            <div className='cart2'>
                Your Cart Items
            </div>
            <div className='cart3'>
                {cart.map((id) => {
                    return (
                        <CartItem id={id} />
                    )
                })}
            </div>
        </div>
    );
};
