import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

   /*  return (
        <div>
            <button onClick={() => {
                props.onClicar(Math.random() )
            }}>Alterar</button>
        </div>
    ) */

    function acao() {
        props.onClicar(Math.random(), 'Gerado')
    }

    return (
        <div>
            <button onClick={ acao }>Alterar</button>
        </div>
    )
}