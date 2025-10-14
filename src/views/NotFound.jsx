import { Link } from "react-router-dom"
import err from "../assets/error404.webp"

const NotFound = () => {
  return (
    <section className="sect-notfound">
      <img className="err-404" src={err} alt="imagen error 404" />
      <h1>Ops, página no encontrada</h1>
      <Link to="/chat"><button className="btn-notfound">← Volver al chat</button></Link>
    </section>
  )
}

export { NotFound }