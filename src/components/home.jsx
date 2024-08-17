import { Link } from "react-router-dom"
import '../styles/home.css'
export default function home(){
    return(
        <div className="container">
            <h1>Bienvenido!</h1>
            <h2>Escoje que quieres hacer</h2>
            <div className="buttons">
            <Link to="/decimal-binario">
             <button>Convertir de decimal a binario</button>
            </Link>
            <Link to="/binario-decimal">
             <button>Convertir de binario a decimal</button>
            </Link>
            </div>
        </div>
    )
}