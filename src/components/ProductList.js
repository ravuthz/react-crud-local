import React, {Component} from 'react';
import ProductItem from "./ProductItem";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        this.getProducts();
    }

    getProducts() {
        const products = JSON.parse(localStorage.getItem('products'));
        this.setState({products});
    }

    render() {
        return (
            <div className="product-list">
                {
                    this.state.products.map(product => {
                        return (
                            <ProductItem key={product.name} {...product}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default ProductList;