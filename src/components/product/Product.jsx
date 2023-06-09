export const Product = ({items}) => {
    console.log('items', items);
    return (
        <div className='product'>
            <img src={items.images} alt='' className='productImage' />
            <p className="productTitle">
                <strong>{items.title}</strong>
            </p>
            <p className="productPrice">
                ${items.price}
            </p>
            <button className='addToCartBttn'>
                Add to Cart
            </button>
        </div>
    );
}