import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        const {name, price} = this.props;
        return (
            <div className="product-item">
                <span>{name}</span> - <span>{price}</span>
            </div>
        );
    }
}

export default ProductItem;