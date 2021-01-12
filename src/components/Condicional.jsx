import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <div>
            <h2>O numero é { props.number }</h2>
            { props.number % 2 == 0 ? 
                <span>Par</span> 
                : <span>Impar</span>
            }
        </div>
    )
}