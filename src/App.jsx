import './App.css'
import React from 'react'
/* import ReactDOM from 'react-dom'
 */
import First from './components/basicos/First'
import Parametro from './components/basicos/Parametro'
import Filhos from './components/basicos/Filhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Mega" color="#BB3128">
                <Mega qtdeNumeros={8}></Mega>
            </Card>

            <Card titulo="#10 - Input" color="#DB34D3">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            
            <Card titulo="#09 - Input" color="#3498DB">
                <Input></Input>
            </Card>

            <Card titulo="#08 - Comunicação indireta" color="#C97">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação direta" color="#F07818">
                <Pai sobrenome="Gaia"></Pai>
            </Card>

            <Card titulo="#05 - Condicional" color="#E94C6F">
                <Condicional number='11'></Condicional>
            </Card>

            <Card titulo="#04 - Repetição" color="#542733">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#03 - Componente com filhos" color="#5A6A62">
                <Filhos>
                    <ul>
                        <li>Ana</li>
                        <li>João</li>
                        <li>Sophie</li>
                    </ul>
                </Filhos>
            </Card>

            <Card titulo="#02 - Componente com parametro" color="#C6D5CD">
                <Parametro title='Rebeca' subtitle='Gaia'></Parametro>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#FDF200">
                <First />
            </Card>
        </div>

    </div>
);