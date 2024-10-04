import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const ProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { name, price };
        try {
            const response = await axios.post('http://localhost:8000/products', newProduct);
            onAddProduct(response.data);
            setName('');
            setPrice('');
        } catch (error) {
            console.error("Error adding product", error);
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <div className="form-control">
                <label>Product Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-control">
                <label>Product Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
