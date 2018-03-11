import React, {Component} from 'react';
import ProductItem from "./ProductItem";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount() {
        this.getProducts();
    }

    getProducts() {
        const products = JSON.parse(localStorage.getItem('products'));
        this.setState({products});
    }

    onDelete(name) {
        console.log("ProductList.onDelete: ", name);
        let {products} = this.state;
        products = products.filter(product => product.name !== name);
        this.setState({products});
        localStorage.setItem('products', JSON.stringify(products));
    }

    render() {
        return (
            <div className="product-list">
                {
                    this.state.products.map(product => {
                        return (
                            <ProductItem key={product.name} {...product} onDelete={this.onDelete}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default ProductList;