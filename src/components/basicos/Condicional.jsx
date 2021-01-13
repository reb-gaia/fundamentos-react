import React from 'react'
import If from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <div>
            <h2>O numero é { props.number }</h2>
            <If test={props.number % 2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.number % 2 === 1}>
                <span>Impar</span>
            </If>
            
            {/* { props.number % 2 == 0 ? 
                <span>Par</span> 
                : <span>Impar</span>
            } */} 
        </div>
    )
}