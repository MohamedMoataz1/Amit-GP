import React, { Component, Fragment } from "react";
import "../css/CC.css"
class leoleo extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
            vitolo: null

        }
    }
    IncrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    DecrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    Reset = () => {
        this.setState({
            counter: 0
        })
    }
    vitoloHandling = () => {

        if (this.state.vitolo !== "") {
            this.setState({
                vitolo: ""
            })
        }
        else {

            this.setState({
                vitolo: "welcome"
            })
        }
    }

    render() {
        return (
            <Fragment>

                <div className="buttons">
                    <h1>kota kota {this.state.counter}</h1>
                    <h1>{this.state.vitolo}</h1>
                    <button onClick={() => this.IncrementCounter()}>Increment </button>
                    <button onClick={() => this.DecrementCounter()}>Decrement </button>
                    <button onClick={() => this.Reset()}>Reset </button>
                    <button onClick={() => this.vitoloHandling()}>Show</button>
                </div>
            </Fragment>

            // <button>Decrement </button>
            // <button>Reset </button>
        )
    }
}
export default leoleo