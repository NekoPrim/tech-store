import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

const getDefaultCart = (shop) => {
    let cart = {};
    for (let i = 1; i < shop.length +1; i++) {
        cart[i] = 0;
    }
    console.log('cart', cart);
    return cart;
};

export const ShopContextProvider = (props) => {
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then(({data}) => {
            setShopItems(data);
        });
    }, []);

    const [shopItems, setShopItems] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart(shopItems));
    console.log('cart items', cartItems);

    const addToCart = (itemId) => {
        setCartItems((prev) => (
            console.log('prev', prev),
            {...prev, [itemId]: prev[itemId] + 1}
            ));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    // setup to pass throu Provider
    const contextValue = { cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};