import React, { Component } from "react";
import "./Contador.css"

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value
        })
    }

    /*constructor(props) {
        super(props)

        this.inc = this.inc.bind(this)

        this.state = {
            numero: props.numeroInicial
        }
    }*/

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>{this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" 
                        value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador