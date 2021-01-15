import React, { Component } from 'react';
import Botoes from './Botoes';
import Display from './Display';
import PassosForm from './PassosForm';

export default class Contador extends Component {

    constructor(props) {
        super(props);

        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0
        };
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPassos = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                
                <PassosForm passos={ this.state.passo } 
                    setPassos={ this.mudarPassos }></PassosForm>
                
                <Display valor={ this.state.valor } ></Display>

                <Botoes onInc={ this.inc } onDec={ this.dec }></Botoes>
            </div>
        );
    }
}

