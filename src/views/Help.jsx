import React from "react";
import { Link } from "react-router-dom"


const Help = () => {
  return (
    <div className="help-container">
      <h1> Centro de Ayuda </h1>

      <section>
        <h2> Funcionamiento General del Chat</h2>
        <p>
          Esta aplicación permite a los usuarios enviar y recibir mensajes en tiempo real simulando un entorno de chat. Los mensajes se almacenan localmente para mantener la persistencia entre sesiones. El contexto global gestiona el estado del chat y los usuarios activos.
        </p>
      </section>

      <section>
        <h2> Tecnologías Utilizadas</h2>
        <ul>
          <li>React (con JSX y componentes funcionales)</li>
          <li>React Router DOM para navegación entre rutas</li>
          <li>Context API para manejo global del estado (ChatContext)</li>
          <li>LocalStorage para persistencia de datos</li>
          <li>CSS modular para estilos personalizados</li>
        </ul>
      </section>

      <section>
        <h2> Posibles Mejoras Futuras</h2>
        <ul>
          <li>Comunicación entre dos usuarios en tiempo real</li>
          <li>Autenticación de usuarios con JWT</li>
          <li>Enviar fotos estre chats</li>
          <li>Personalización de temas</li>
        </ul>
      </section>
      <section className="help-navigation">
        <Link to="/chat"><button className="btn-go-chat">← Volver al chat</button></Link>
      </section>
    </div>
  );
};




export default Help