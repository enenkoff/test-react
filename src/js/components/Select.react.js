import React, { Component } from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'select SKU'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.props.onChange(event.target.value);
        this.setState({value: event.target.label});
    }


    render() {

        var options = this.props.values;

        var options_list = options.map(function(obj,i){

            return (
                <option value={i} key={i} label={obj.label} />
            )
        });

        return (
            <select value={this.state.value} onChange={this.handleChange}>
                {options_list}
            </select>

        );
    }
}

export default Select;