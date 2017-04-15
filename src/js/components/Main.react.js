import React, { Component } from 'react';
import ItemWrap from './ItemWrap.react';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            sss: 0
        };
        this.totalObject = this.totalObject.bind(this);

    }

    totalObject(event){
        console.log(event)
        this.setState({sss: event})
    }
    //totalFuns(event){
    //    console.log(event)
    //    this.setState({total: 3})
    //    return this.state.total
    //}


    componentWillMount(){

        var startState = 0;

        for(var j = 0; j < this.props.count_items; j++){
            startState = startState + this.props.data_items[0].price;
        };
        this.setState({
            total: startState
        })
    }


    render() {

        var items_index = [];
        for(var j = 0; j < this.props.count_items; j++){
            items_index.push(j)
        };

        var data = this.props.data_items;
        var items = items_index.map(function(item,i){
            return (
                <ItemWrap
                    key={i}
                    data_index={'item' + item}
                    data_items={data}
                    obj={this.totalObject}
                    //cnt={this.totalFuns}
                    />
            )
        });

        return (
            <main>
                <div className="main-content">
                    <div className="item-box">


                        {items}
                    </div>
                    <div className="total-sum">
                        <span>{this.state.total}</span>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;