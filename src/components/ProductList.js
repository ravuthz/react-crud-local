import React, {Component} from 'react';
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        this.getProducts();
    }

    getProducts() {
        const products = JSON.parse(localStorage.getItem('products'));
        this.setState({products});
    }

    onSave(name, price) {
        console.log("ProductList.onSave: ", {name, price});
        let {products} = this.state;
        products.push({name, price});
        this.setState({products});
        localStorage.setItem('products', JSON.stringify(products));
    }

    onDelete(name) {
        console.log("ProductList.onDelete: ", name);
        let {products} = this.state;
        products = products.filter(product => product.name !== name);
        this.setState({products});
        localStorage.setItem('products', JSON.stringify(products));
    }

    onUpdate(name, price, originalName) {
        console.log("ProductList.onModify: ", {name, price});
        let {products} = this.state;
        products = products.map(product => {
            if (product.name === originalName) {
                product.name = name;
                product.price = price;
            }
            return product;
        });
        this.setState({products});
        localStorage.setItem('products', JSON.stringify(products));
    }

    render() {
        return (
            <div className="product-list">
                <h1>Product Management</h1>
                <ProductForm onSave={this.onSave}/>
                {
                    this.state.products.map(product => {
                        return (
                            <ProductItem key={product.name} {...product} onDelete={this.onDelete} onUpdate={this.onUpdate}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default ProductList;