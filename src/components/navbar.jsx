import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation(); // Hook para obtener la ruta actual

    return (
        <header>
            <Link to="/">
                <h3>Inicio</h3>
            </Link>
            <div className="buttonNavbar">
                <Link 
                    to="/decimal-binario" 
                    className={location.pathname === "/decimal-binario" ? "disabled-link" : ""}
                >
                    <button disabled={location.pathname === "/decimal-binario"}>
                        Convertir de decimal a binario
                    </button>
                </Link>
                <Link 
                    to="/binario-decimal" 
                    className={location.pathname === "/binario-decimal" ? "disabled-link" : ""}
                >
                    <button disabled={location.pathname === "/binario-decimal"}>
                        Convertir de binario a decimal
                    </button>
                </Link>
            </div>
        </header>
    );
}
