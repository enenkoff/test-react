import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.min,
            min: this.props.min,
            max: this.props.max

        };
        this.handleClick = this.handleClick.bind(this);
        this.changeCounter = this.changeCounter.bind(this);

    }

    changeCounter(e){
        console.log('asds')
        var cnt = e.target.innerHTML;
        this.props.onChange(cnt)
    }

    handleClick(event) {

        var new_cnt;
        var dir = event.target.className;

        if(dir == 'up'){

            new_cnt = this.state.count + 1;
            if(new_cnt <= this.state.max){
                this.props.onChange(new_cnt)
                this.setState(
                    {
                        count: new_cnt
                    }
                );
            }
        }
        else if(dir == 'down'){
            new_cnt = this.state.count - 1;
            if(new_cnt >= this.state.min){
                this.props.onChange(new_cnt)
                this.setState(
                    {
                        count: new_cnt
                    }
                );
            }
        }



    }



    shouldComponentUpdate(nextProps, nextState){
        this.state.count = nextProps.min;
        this.state.min = nextProps.min;
        this.state.max = nextProps.max;
        return true;
    }


    render() {

        return (
            <div onChange={this.changeCounter}>
                <button className="down" onClick={this.handleClick}>-</button>
                <span>{this.state.count}</span>
                <button className="up" onClick={this.handleClick}>+</button>
            </div>

        );
    }
}

export default Counter;