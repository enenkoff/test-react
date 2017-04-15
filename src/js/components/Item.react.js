import React, { Component } from 'react';
import Select from './Select.react';
import Counter from './Counter.react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: this.props.data_items[0].image,
            countMin: this.props.data_items[0].min,
            countMax: this.props.data_items[0].max,
            price: this.props.data_items[0].price,
            totalPrice: this.props.data_items[0].price
        };
        this.skuChange = this.skuChange.bind(this);
        this.priceCalc = this.priceCalc.bind(this);
    }

    opacityAdd(event){ event.target.style.opacity = 0.8 }
    opacityRemove(event){ event.target.style.opacity = 1 }

    skuChange(event) {

        var defaultTotal = this.props.data_items[event].price * this.props.data_items[event].min
        //this.props.cnt(event)

        this.setState(
            {
                img: this.props.data_items[event].image,
                countMin: this.props.data_items[event].min,
                countMax: this.props.data_items[event].max,
                price: this.props.data_items[event].price,
                totalPrice: defaultTotal
            }
        );

    }

    priceCalc(cnt){
        var newTotal = this.state.price * cnt
        this.setState({totalPrice: newTotal})

    }


    render() {



        return (
            <section className="item" data-index={this.props.data_index}>
                <div className="item__data">
                    <div className="item__data__image">
                        <img
                            src={"../src/media/" + this.state.img}
                            alt={this.state.img}
                            onMouseEnter={this.opacityAdd}
                            onMouseLeave={this.opacityRemove}
                            />
                    </div>
                    <div className="item__data__content">
                        <div className="item__data__head">
                            <h3>Title Lorem ipsum dolor sit</h3>
                            <p>Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.</p>
                        </div>
                        <div className="item__data__select">
                            <Select values={this.props.data_items} onChange={this.skuChange}/>
                        </div>
                    </div>
                </div>
                <div className="item__price">
                    <div className="item__price__counter">
                        <Counter min={this.state.countMin} max={this.state.countMax} onChange={this.priceCalc} />
                    </div>
                    <div className="item__price__result">
                        <span>{this.state.totalPrice}.00 &euro;</span>
                    </div>
                </div>

            </section>
        );
    }
}

export default Item;