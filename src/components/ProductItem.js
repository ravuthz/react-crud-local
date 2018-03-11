import React, {Component} from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        const {name, onDelete} = this.props;
        console.log("ProductItem.onDelete: ", name);
        onDelete(name);
    }

    render() {
        const {name, price} = this.props;
        return (
            <div className="product-item">
                <span>{name}</span> - <span>{price}</span>
                <button onClick={this.onDelete}>DELETE</button>
            </div>
        );
    }
}

export default ProductItem;