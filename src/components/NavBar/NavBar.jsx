import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Quantum PC</h3>
      </Link>

      <div className="category">
        <NavLink
          to={"/category/microprocesadores"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Microprocesadores
        </NavLink>
        <NavLink
          to={"/category/mothers"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mothers
        </NavLink>
        <NavLink
          to={"/category/placas de video"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Placas de video
        </NavLink>
        <NavLink
          to={"/category/almacenamiento"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Almacenamiento
        </NavLink>
        <NavLink
          to={"/category/refrigeración"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Refrigeración
        </NavLink>
        <NavLink
          to={"/category/ram"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Memorias RAM
        </NavLink>
        <NavLink
          to={"/category/gabinetes"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Gabinetes
        </NavLink>
        <NavLink
          to={"/category/fuentes"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Fuentes
        </NavLink>
        <NavLink
          to={"/category/conectividad"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Conectividad
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
