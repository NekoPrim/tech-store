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
        console.log('value', cartItems[itemId]);
        for (let i = 0; i < cartItems.length +1; i ++);
            if (cartItems[i] === itemId) {
                let newItem = cartItems[i] ++;
                setCartItems(...cartItems, {itemId: newItem});
            }
        // setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        // if (cartItems.length > 0) {
        //     cartItems.map((value) => {
        //         if ([value] === [itemId]) {
        //             let newValue = value + 1;
        //             setCartItems([...cartItems, {[itemId]: newValue}]);
        //         }
        //     })
        // }
        // setCartItems({[itemId]: 1});
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