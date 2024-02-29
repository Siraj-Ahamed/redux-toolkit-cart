import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = () => {
    const [products, getProducts] = useState([]);

    useEffect(() => {
        //api
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((result) => getProducts(result));
        console.log(products);
    }, []);

    const cards = products.map((product) => (
        <div
            className="col-md-3 col-sm-6 col-xs-12"
            style={{ marginBottom: "10px" }}
        >
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ width: "100px", height: "130px" }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>LKR: {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <>
            <div>Product Dashboard</div>
            <div className="row">{cards}</div>
            {/* {JSON.stringify(products)} */}
        </>
    );
};

export default Product;
