import { Link } from "react-router-dom"
import err from "../assets/error404.webp"

const NotFound = () => {
  return (
    <section className="sect-notfound">
      <img className="err-404" src={err} alt="imagen error 404" />
      <h1>Ops, página no encontrada</h1>
      <p>No pudimos encontrar la página a donde te dirigias, solo contamos con la posibilidad de trabajar con el chat.</p>
      <Link to="/chat"><button className="btn-go-chat">Ir al chat</button></Link>
    </section>
  )
}

export { NotFound }