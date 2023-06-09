import { useEffect, useState } from 'react';
import axios from 'axios';

export const Shop = () => {
    const [shopItems, setShopItems] = useState([]);
    console.log('shopItems', shopItems);
    
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then(({data}) => {
            setShopItems(data);
        });
    }, []);

    return (
        <div className='shop'>
            
        </div>
    );
}
