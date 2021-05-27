import React, { Component } from 'react'

import Counter from '../components/index';

class CounterPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            parityType: 'even'
            
        }
    }

    handleIncrement = () => {
        this.setState((state) => {
            return {
                countValue: state.countValue + 1
            }
        })
    }

    handleDecrement = () => {
        this.setState((state) => {
            if (state.countValue > 0) return {
                countValue: state.countValue - 1
            } 
        
        })
    }

    handleReset = () => {
        this.setState({ countValue: 0})
    }

    render() {
        return (
            <Counter 
            countValue={this.state.countValue} 
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleReset={this.handleReset}
            />
        )
    }
}

export default CounterPageContainer;
