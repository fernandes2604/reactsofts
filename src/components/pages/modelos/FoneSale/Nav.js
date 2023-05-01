export default function NavV(){
    return(
        
        <nav className="navbar navv navbar-expand-lg navbar-dark bg-dark fixed-top mt-5" id="mainNav">
      <div className="container">
        <a className="navbar-brand fw-lighter fs-5" href="#page-top">Nome do site</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/#/Templates/template-de-venda-de-Smartphones">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/Templates/template-de-venda-de-Smartphones">Produtos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/Templates/template-de-venda-de-Smartphones">Sobre-nós</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/#/Templates/template-de-venda-de-Smartphones">Nossa equipa</a></li>
            <li className="nav-item">
              <a className="nav-link" href="/#/Templates/template-de-venda-de-Smartphones">Contactos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}