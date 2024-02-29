import React from "react";
import { useState, useEffect } from "react";

const Product = () => {
    const [products, getProducts] = useState([]);

    useEffect(() => {
        //api
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((result) => getProducts(result));
        console.log(products);
    }, []);
    return (
        <>
            <div>Product Dashboard</div>
            {/* {JSON.stringify(products)} */}
        </>
    );
};

export default Product;
