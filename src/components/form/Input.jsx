import React, { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default Input => {
    const [nome, setNome] = useState('Bruno')

    return (
        <>
            <h3>{ nome }</h3>
            <input type="text" value= { nome } 
                onChange={e => setNome(e.target.value)}/>
        </>
    )
}
