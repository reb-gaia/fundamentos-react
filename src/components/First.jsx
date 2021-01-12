import React from 'react'

// option 1
function First() {
    return (
       /*  <div>
            <h1>Primeiro</h1>
            <h2>Exemplo de um componente em react</h2>
        </div> */
        <>
            <h1>Primeiro</h1>
            <h2>Exemplo de um componente em react</h2>
        </>
       /*  <React.Fragment>
            <h1>Primeiro</h1>
            <h2>Exemplo de um componente em react</h2>
        </React.Fragment> */
    )
}

export default First

// option 2
/* export default () =>
    <React.Fragment>
        <h1>Primeiro</h1>
        <h2>Exemplo de um componente em react</h2>
    </React.Fragment> */

