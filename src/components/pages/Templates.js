import Footer from "../layouts/Footer"
import { Row,Col} from "react-bootstrap"
import NavBar from "../layouts/NavBar"
import Cards from "../Templates/Cards"
import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import { useEffect } from "react"
function Templates() {
  useEffect (()=>{
    document.title='Sites Softs - Templates'
  },[])
  return(
    <div>
      <NavBar active1="" active2={`${styles.active}`} active3='' classs='aqui'/>
      <p id="espaço"/>
      <Row>
        <Col>
          <h2 className="display-6 fs-4 text-center mb-3">Templates de moda</h2> 
          <Row>
            <Col sm={6} md={6} lg={6} className='mt-3'>
              <Cards
                src={require("../../img/modls/modelo2.jpg")}
                title1= {<p>Venda de Bolsas<br/>Gratís</p>}
                href={<Link to='template-de-venda-de-bolsas' className="btn btn-outline-light">Ver este Template</Link>}
                href2={<Link target="_bank" to='https://codesandbox.io/s/modelos-de-venda-de-bolsas-3d6nv2template-de-venda-de-bolsas/use' className="btn btn-outline-light">Editar este Template</Link>}
              />
            </Col>
            <Col sm={6} md={6} lg={6} className='mt-3'>
              <Cards
                src={require("../../img/modls/127.0.0.1_5500_modelos_index.html.jpg")}
                title1= {<p>Venda de tenís<br/>Gratís</p>}
                href={<Link to='template-de-tenis' className="btn btn-outline-light">Ver este Template</Link>}
                href2={<Link to='https://codesandbox.io/s/shoos-sale-template-qzc61h' target='_blank' className="btn btn-outline-light">Editar este Template</Link>}
              />
            </Col>  
            <Col sm={6} md={6} lg={6} className='mt-3'>
              <Cards
                src={require("../../img/modls/modelo2-(2).jpg")}
                title1= {<p>Venda de Bolsas<br/>Gratís</p>}
                href={<Link to='#' className="btn btn-outline-light">Ver este Template</Link>}
                href2={<Link to='#' className="btn btn-outline-light">Editar este Template</Link>}
              />
            </Col>
            <Col sm={6} md={6} lg={6} className='mt-3'>
              <Cards
                src={require("../../img/modls/www.bagaggio.com.jpg")}
                title1= {<p>Em desenvolvimento<br/>Gratís</p>}
                href={<Link to='#' className="btn btn-outline-light">Ver este Template</Link>}
                href2={<Link to='#' className="btn btn-outline-light">Editar este Template</Link>}
              />  
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <h2 className="display-6 fs-4 text-center mb-3">Templates de tecnologias</h2>                    
              <Col sm={6} md={6} lg={6} className='mt-3'>
                <Cards
                  src={require("../../img/modls/modelo.jpg")}
                  title1={
                  <p>Em desenvolvimento<br/>Template pago</p>
                }
                  description='descrição'
                  href={<Link to='#' className="btn btn-outline-light">Ver este Template</Link>}
                  href2={<Link to='#' className="btn btn-outline-light">Editar este Template</Link>}
                />
              </Col>
              <Col sm={6} md={6} lg={6} className='mt-3'>
                <Cards
                  src={require("../../img/modls/127.0.0.1_5500_modelos_index4.jpg")}
                  title1={<p>Venda de computadores<br/>Gratís</p>}
                  description='descrição'
                  href={<Link to='template-de-venda-de-computadores' className="btn btn-outline-light">Ver este Template</Link>}
                  href2={<Link to='https://codesandbox.io/s/computer-sale-template-xde103'target='_blank' className="btn btn-outline-light">Editar este Template</Link>}
                />
              </Col>
              <Col sm={6} md={6} lg={6} className='mt-3'>
                <Cards
                  src={require("../../img/modls/nrcbxv.csb.png")}
                  title1={<p>Venda de telemoveis<br/>Gratís</p>}                
                  href={<Link to='template-de-venda-de-Smartphones' className="btn btn-outline-light">Ver este Template</Link>}
                  href2={<Link target='_blank' to='https://codesandbox.io/s/inspiring-rumple-nrcbxv?file=/index.html' className="btn btn-outline-light">Editar este Template</Link>}
                />
              </Col>
              <Col sm={6} md={6} lg={6} className='mt-3'>
                <Cards
                  src={require("../../img/modls/modelo.jpg")}
                  title1={ <p>Em desenvolvimento<br/>Template pago</p>}                 
                  href={<Link to='#' className="btn btn-outline-light">Ver este Template</Link>}
                  href2={<Link to='#' className="btn btn-outline-light">Editar este Template</Link>}
                />
              </Col>
            </Row>
        </Col>
        </Row>
        <div className="row">
          <h2 className="display-6 fs-4 text-center mb-4 mt-4">Templates diversos</h2>                    
        <div className="col">
          <Cards
            src={require("../../img/modls/modelo.jpg")}
            title1={ <p>Em desenvolvimento<br/>Template pago</p>}
            description='descrição'
              href={<Link to='#' className="btn btn-outline-light">Ver este Template</Link>}
              href2={<Link to='#' className="btn btn-outline-light">Editar este Template</Link>}
          />
        </div>
        <div className="col">
          <Cards
            src={require("../../img/modls/9qv3ng.png")}
            title1={<p>Portifolio<br/>Gratís</p>}
            href={<Link to='template-de-portifolio' className="btn btn-outline-light">Ver este Template</Link>}
            href2={<Link to='https://codesandbox.io/s/template-9qv3ng' target={'_blank'} className="btn btn-outline-light">Editar este Template</Link>}
          />
        </div>
        <div className="col">
          <Cards
            src={require("../../img/modls/modelo.jpg")}
            title1={ <p>Em desenvolvimento<br/>Template pago</p>}
              href={<Link to='#' className="btn btn-outline-light">Ver este Template</Link>}
              href2={<Link to='#' className="btn btn-outline-light">Editar este Template</Link>}
          />
        </div>
        <div className="col">
          <Cards
            src={require("../../img/modls/modelo1.jpg")}
            title1={<p>Em desenvolvimento<br/>Template pago</p>}
            description='descrição'
              href={<Link to='#' className="btn btn-outline-light">Ver este Template</Link>}
              href2={<Link to='#' className="btn btn-outline-light">Editar este Template</Link>}
          />
        </div>
        </div>
      <Footer/>
    </div>
  )
}
export default Templates