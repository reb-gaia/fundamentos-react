import React, { useState } from 'react'
// eslint-disable-next-line
export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumeros).fill(0)) // fill: preencher todo o array com 0

    function gerarNumerosNaoIguais(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) 
                ? gerarNumerosNaoIguais(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumeros)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumerosNaoIguais(a)
                return [...a, novoNumero]
            }, [])
            .sort((a, b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{ numeros.join(' ') }</h4>
            <button onClick={ gerarNumeros }>Gerar números</button>
        </>
    )
}