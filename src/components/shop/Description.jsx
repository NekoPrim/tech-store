import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation, useNavigate } from 'react-router-dom';
import './Description.css';

export const Description = () => {
    const { addToCart } = useContext(ShopContext);
    const nav = useNavigate();
    const location = useLocation();
    const { item } = location.state;

    return (
        <table className='description'>
            <tbody className='descriptionContents'>
                <tr>
                    <td className='descriptionTitle deSpace'>
                        {item.title}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={item.images} alt='' className='descriptionImage' />
                    </td>
                </tr>
                <tr>
                    <td className='descriptionPrice deSpace'>
                        ${item.price}
                    </td>
                </tr>
                <tr>
                    <td className='theDescription deSpace'>
                        {item.description}
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={() => addToCart(item.id)} className='descriptionBttn addToCartBttn bttn'>
                            Add to Cart
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={() => nav('/')} className='descriptionBttn bttn'>
                            Back
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};