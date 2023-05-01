import { Navbar,Container,Nav,Form,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';

export function NavBarTemp({comp,fone,links}) {
    return (
          <Navbar bg="light" variant="light" expand="md" className='text-dark' fixed='top'>
            <Container className='fs-5'>
                SiteSoft
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Container>
                    <Nav>
                    <div className="responsive">
                    <Link to={comp} relative="path"><img className='img-fluid a' src={require('../../../../img/nav1.png')} alt='bom'/></Link>
                    <Link to={fone}><img className='img-fluid fone' src={require('../../../../img/nav2.png')} alt='bom'/></Link>
                    </div>
                    <Button variant='outline-dark' size='sm'><Link className='dropdown-item' target="_blank" to={links} relative="path">Editar este modelo</Link></Button>
                    </Nav>
                    </Container>
                </Navbar.Collapse>
                </Container>
            </Navbar>
      )
}
export  function NavBarBlue({title}) {
  return(
      <>
      <Navbar bg="primary" variant="dark" id="bord" className="col-md-11 br-1 m-auto" collapseOnSelect expand='md'>
          <Container>
          <Navbar.Brand href="#">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#">Home</Nav.Link>
                      <Nav.Link href="#">Sobre</Nav.Link>
                  </Nav>
                  <Nav>
                      <Form className="d-flex">
                          <Form.Control
                              type="search"
                              placeholder="Pesquisar"
                              className="me-2"
                              aria-label="Search"
                          />
                          <Button variant="outline-light">Pesquisar</Button>
                          </Form>
                  </Nav>
              </Navbar.Collapse>
          </Container>
    </Navbar>
  </>
  )}
export function NavBarLight({href,titles}){
    return(
        <nav className="navbar navbar-expand border-bottom">
            <div className="alinha d-flex flex-wrap justify-content-center container">
                <a href="/" id="a" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                  <span className="fs-4 text-dark tititi">{titles}</span>
                </a>
                <div className="navbar-collape">
                  <ul className=" me-auto nav nav-pills">
                    <li className="nav-item"><a href={href} className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href={href} className="nav-link">FeedBack</a></li>
                    <li className="nav-item"><a href={href} className="nav-link">Sobre</a></li>
                  </ul>
                </div>
            </div>
        </nav>
    )
}