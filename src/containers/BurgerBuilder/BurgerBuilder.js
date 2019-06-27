import React, { Component } from 'react';
import Auxiliry from '../../hoc/Auxiliry'
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {

    render() {
        return (
            <Auxiliry>
                <Burger/>
                <div>Build Controls</div>
            </Auxiliry>
                
        );
    }
}

export default BurgerBuilder;
