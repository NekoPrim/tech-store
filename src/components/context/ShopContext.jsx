import { createContext } from 'react';
// import axios from 'axios';

export const ShopContext = createContext(null);

// const getDefaultCart = (shop) => {
//     let cart = {};
//     for (let i = 1; i < shop.length +1; i++) {
//         cart[i] = 0;
//     }
//     console.log('cart', cart);
//     return cart;
// };

export const ShopContextProvider = (props) => {
    // const [shopItems, setShopItems] = useState([]);
    // useEffect(() => {
    //     axios.get('https://api.escuelajs.co/api/v1/products').then(({data}) => {
    //         setShopItems(data);
    //     });
    // }, []);

    // const [cartItems, setCartItems] = useState([getDefaultCart(shopItems)]);
    // console.log('cart items', cartItems);

    const cart = [];

    const addToCart = (itemId) => {
        // setCartItems((cartItems) => (
        //     console.log('prev cart', cartItems),
        //     console.log('item id', itemId),
        //     console.log('cart id', cartItems[itemId]),
        //     {...cartItems, [itemId]: cartItems[itemId] ++}
        //     ));

        // setCartItems(cartItems.map((item) =>
        // [item] === itemId ? { ...item, item + 1 } : item
        // ));
        cart.push(itemId);
        console.log('cart', cart);
    };

    const removeFromCart = (itemId) => {
        // setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    // setup to pass throu Provider
    const contextValue = { cart, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};