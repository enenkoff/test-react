import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Item from './Item.react';

class ItemWrap extends Component {
    constructor() {
        super();
        this.state = {
            showItem: true
        };
        this.removeItem = this.removeItem.bind(this);
        this.totalFuns = this.totalFuns.bind(this);
    }


    totalFuns(event){
        console.log(event)
        console.log(this.props.data_index)
        var e =  event;
        var i = this.props.data_index;
        this.props.obj({e: i})

    }



    removeItem() {
        this.setState({ showItem: false });
    }

    render() {

        var item = this.state.showItem ? <Item cnt={this.totalFuns} data_items={this.props.data_items} /> : '';
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