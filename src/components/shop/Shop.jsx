import { useEffect, useState } from 'react';
import axios from 'axios';
import RingLoader from 'react-spinners/RingLoader'
import { Product } from '../product/Product';
import './Shop.css';

export const Shop = () => {
    const [shopItems, setShopItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then(({data}) => {
            setShopItems(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className='shop'>
            <div className='loader'>
                <RingLoader
                    loading={loading}
                    color={'black'}
                />
            </div>
            <div className='shopItems'>
                {shopItems.map((item) => {
                    return (
                        <Product items={item} />
                    );
                })}
            </div>
        </div>
    );
}


