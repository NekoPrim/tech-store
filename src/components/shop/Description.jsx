import { useLocation, useNavigate } from 'react-router-dom';
import './Description.css';

export const Description = () => {
    const nav = useNavigate();
    const location = useLocation();
    const { item } = location.state;
    console.log('item', item);
    return (
        <div className='description'>
            <img src={item.images} alt='' className='descriptionImage' />
            <div className='descriptionContents'>
                <div className='descriptionTitle'>
                    <strong>{item.title}</strong>
                </div>
                <div className='descriptionPrice'>
                    ${item.price}
                </div>
                <div className='theDescription'>
                    {item.description}
                </div>
                <button>
                    Add to Cart
                </button>
                <button onClick={() => nav('/')}>
                    Back
                </button>
            </div>
        </div>
    )
}