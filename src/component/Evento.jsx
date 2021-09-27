import React, {useState} from 'react'

const Evento = () => {
    let [contador, setNumero] = useState(0)
    let [tipo, setTipo] = useState('')
    const eventoClick = () => {
        contador = contador+=1
        contador%2 === 0 ? setTipo('par') : setTipo('impar')
        setNumero(contador)
    }

    const eventoLimpiar = () => {
        setNumero(0)
        setTipo('')
    }

    return (
        <div>
            <h1>{ contador }</h1>
            <h1>{ tipo }</h1>
            <button onClick={()=>eventoClick()}>Enviar</button>
            <button onClick={()=>eventoLimpiar()}>Limpiar</button>
        </div>
    )
    
}

export default Evento
