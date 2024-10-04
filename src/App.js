import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    };

    return (
        <div className="app">
            <ProductForm onAddProduct={handleAddProduct} />
            <ProductList products={products} />
        </div>
    );
};

export default App;
