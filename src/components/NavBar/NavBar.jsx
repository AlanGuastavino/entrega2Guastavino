import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Quantum PC</h3>
      </Link>

      <div className="Category">
        <NavLink
          to={"/Category/microprocesadores"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Microprocesadores
        </NavLink>
        <NavLink
          to={"/Category/mother"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mothers
        </NavLink>
        <NavLink
          to={"/Category/placas de video"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Placas de video
        </NavLink>
        <NavLink
          to={"/Category/almacenamiento"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Almacenamiento
        </NavLink>
        <NavLink
          to={"/Category/ram"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Memorias RAM
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
