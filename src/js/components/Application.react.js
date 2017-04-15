import React, { Component } from 'react';
import Header from './Header.react';
import Main from './Main.react';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main data_items={items} count_items='3' />

            </div>

        );
    }
}

export default App;