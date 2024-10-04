import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products", error));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error deleting product", error);
        }
    };

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
