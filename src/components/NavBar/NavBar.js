import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Quantum PC
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Procesadores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Mothers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Placas de video
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Almacenamiento
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Refrigeración
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Memorias RAM
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Gabinetes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Fuentes
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="/">
              Conectividad
            </a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
