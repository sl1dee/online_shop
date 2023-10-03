import React, {useState} from 'react';

const ProductItem = (props) => {
    const [details, setDetails] = useState(false)

    return (
        <div className="product">
            <p>
                {/*{props.product.id}.*/}
                {props.product.title}
            </p>

            <img className="product__image" src={props.product.image} alt={props.product.title}/>

            <p className="product__price">{props.product.price}$</p>

            <div className="product__button">
                <button
                    className="button__info"
                    onClick={() => setDetails(prev => !prev)}
                >{details
                    ? 'Hide'
                    : 'Show'}</button>
            </div>


            {details &&
            <div>
                {props.product.description}
            </div>}


        </div>
    );
};

export default ProductItem;