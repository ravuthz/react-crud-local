import React, {Component} from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModify: false
        };
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onModify = this.onModify.bind(this);
    }

    onUpdate(event) {
        event.preventDefault();
        const name = this.nameInput.value;
        const price = this.priceInput.value;
        console.log("ProductItem.onUpdate: ", {name, price});
        this.props.onUpdate(name, price, this.props.name);
        this.setState({isModify: false});
    }

    onDelete() {
        const {name, onDelete} = this.props;
        console.log("ProductItem.onDelete: ", name);
        onDelete(name);
    }

    onModify() {
        this.setState({isModify: true});
        console.log("ProductItem.onModify: ", this.state.isModify);
    }

    render() {
        const {name, price} = this.props;
        return (
            <div>
                {
                    this.state.isModify ?
                        (
                            <form onSubmit={this.onUpdate}>
                                <input placeholder="Name" defaultValue={name} ref={nameInput => this.nameInput = nameInput}/>
                                <input placeholder="Price" defaultValue={price} ref={priceInput => this.priceInput = priceInput}/>
                                <button>Save</button>
                            </form>
                        )
                        :
                        (
                            <div className="product-item">
                                <span>{name}</span> - <span>{price}</span>
                                <button onClick={this.onModify}>UPDATE</button>
                                <button onClick={this.onDelete}>DELETE</button>
                            </div>
                        )
                }
            </div>

        );
    }
}

export default ProductItem;