import React, { Component } from 'react';

class Water extends Component {

    state = {
        temperature: 28
    }

    renderWaterState = () => {
        let waterState = 'liquid';
        const { temperature } = this.state
        if (temperature < 0) {
            waterState = 'solid';
        } else if (temperature > 100) {
            waterState = 'gas';
        }

        return waterState;

    }

    handleChange = (event) => {
        const temperature = event.target.value;
        this.setState({ temperature })

    }

    render() {
        const { temperature } = this.state;

        return (
            <div className="Content">
                <h3 className="Content-Title"> Water State : {this.renderWaterState()} </h3>
                <div>
                    <label> Temperature: </label>
                    <input
                        value={temperature}
                        type="range"
                        min="-200"
                        max="1000"
                        step="1"
                        onChange={this.handleChange}
                    />
                    <span>{temperature} C </span>
                </div>
            </div>
        );
    }
}

export default Water;