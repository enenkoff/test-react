import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Item from './Item.react';

class ItemWrap extends Component {
    constructor() {
        super();
        this.state = { showItem: true};
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
        this.setState({ showItem: false });
    }

    render() {

        var item = this.state.showItem ? <Item data_items={this.props.data_items} /> : '';
        var button = this.state.showItem ? <button onClick={this.removeItem} className="btn-remove">X</button> : '';
        return (
            <div className="item-box__container">
                {item}
                {button}
            </div>
        );
    }

}

export default ItemWrap;