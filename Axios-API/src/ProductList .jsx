import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ProductList.css"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                const productData = response.data.products.map(product => ({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    category: product.category,
                    price: product.price
                }));
                setProducts(productData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4" style={{ fontFamily: "cursive" }}>Product List - Axios API</h1>
            <div className="row">
                {products.map(p => (
                    <div className="col-md-4 mb-4" key={p.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{p.category}</h6>
                                <p className="card-text">{p.description}</p>
                                <p className="card-text"><strong>Price:</strong> ${p.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
