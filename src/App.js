import React, {Component} from 'react';
import './App.css';

import {products} from './data';
import ProductList from "./components/ProductList";

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Products Manager</h1>
                <ProductList/>
            </div>
        );
    }
}

export default App;
