import { Link } from 'react-router-dom';

export const Product = ({item}) => {
    return (
        <div className='product'>
            <Link to={`/product/${item.id}`} state={{item}} className='productLink'>
            <img src={item.images} alt='' className='productImage' />
            <p className="productTitle">
                <strong>{item.title}</strong>
            </p>
            <p className="productPrice">
                ${item.price}
            </p>
            </Link>
            <button className='addToCartBttn'>
                Add to Cart
            </button>

        </div>
    );
}