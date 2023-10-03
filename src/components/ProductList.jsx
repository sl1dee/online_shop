import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({products, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <div className="product__cards">
                {products.map(product =>
                    <ProductItem product={product} key={product.id}/>,
                    console.log(products)
                )}
            </div>
        </div>
    );
};

export default ProductList;