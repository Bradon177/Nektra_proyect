import React from 'react'

export default function Props({valor, setValor}) {

const handleClick = ()=> {
setValor(valor+1);
}



  return (
    <div>
        <button
        onClick={handleClick}
        >
            Contador {valor}
        </button>
    </div>
  )
}
