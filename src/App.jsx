import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/First'
import Parametro from './components/Parametro'
import Filhos from './components/Filhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <div className="App">
        <Card titulo="#05 - Condicional">
            <Condicional number={11}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente com filhos">
            <Filhos>
                <ul>
                    <li>Bruno</li>
                    <li>Rebeca</li>
                    <li>Sophie</li>
                </ul>
            </Filhos>
        </Card>

        <Card titulo="#02 - Componente com parametro">
            <Parametro title='Rebeca' subtitle='Gaia'></Parametro>
        </Card>
        
        <Card titulo="#01 - Primeiro Componente">
            <First />
        </Card>


    </div>
);