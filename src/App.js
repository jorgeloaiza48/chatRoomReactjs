
import { useState } from 'react';
import './App.css';
import UseChat from './UseChat';
import { db } from './FireBase';

function App() {
  const [message, setMessage] = useState("")
  const { messages } = UseChat();

  const sendMessage = (e) => {
    e.preventDefault();
    setMessage("")
    db.collection('messages').add({
      fecha_de_envio: new Date().toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', weekday: "long", hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' }),
      message,
      id: Date.now()

    })
  }
  const limpiarventana = () => {
    const padre = document.getElementById("listado")
    //const hijo = document.querySelectorAll("#listado_child")
    padre.remove()
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul id="listado">
          {messages.map(m => <li id='listado_child' key={m.id}>{m.message} <p>Enviado el : {m.fecha_de_envio} </p></li>)}
        </ul>
        <p>Escribe tu mensaje</p>
        <form>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type='submit' onClick={sendMessage}>Enviar Mensaje</button>
        </form>
        <button onClick={limpiarventana}>Limpiar ventana</button>

      </header>
    </div>
  );
}

export default App;
