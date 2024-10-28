//import React from 'react'
import { useEffect, useState } from 'react'
import { db } from './FireBase'

function UseChat() {
    const [error, setError] = useState(null)
    const [loading, setLoaiding] = useState(true)
    const [messages, setMessage] = useState([])

   

    useEffect(() => {
        const unsubscribe = db.collection('messages').onSnapshot(
            snapshot => {
                setLoaiding(false)
                const datos = (snapshot.docs.map(d => ({ id: d.id, ...d.data() }))) //se trae los datos de la BD de Firebase
                setMessage(datos.sort((a,b)=> a.fecha_de_envio > b.fecha_de_envio ))//ordena el array por fechas de manera ascendente
            },
            err => {
                setError(err)
            }
        )
        return () => unsubscribe()
    }, [setMessage]
    )

console.log(messages)
    return (
        { error, loading, messages }
    )
}

export default UseChat