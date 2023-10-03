import React, {useEffect, useState} from "react";
import "../styles/App.css"
import ProductList from "../components/ProductList";
import ProductService from "../API/ProductService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";

function Jewelery() {

    const [products, setProducts] = useState([])
    const [fetchProducts, isProductsLoading, productError] = useFetching(async () => {
        const products = await ProductService.getCategory("jewelery")
        setProducts(products)
    })

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div className="App">
            {productError
                ? <h1>Произошла ошибка!</h1>
                : <div>
                    {isProductsLoading
                        ? <div className="loader__place"><Loader/></div>
                        : <ProductList products={products} title="Jewelery"/>
                    }
                </div>

            }

        </div>
    );
};

export default Jewelery;