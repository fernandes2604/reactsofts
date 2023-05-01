import { Card} from "react-bootstrap";
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { NavBarTemp } from "../Support/NavBars";
import NavV from "./Nav";
import  './temp4.css'
export default function TemplatesQuatro(){
    document.title="Templates - Venda de Smartphones"
return(
    <div>
      <NavBarTemp comp={''} fone={'View'} links="https://codesandbox.io/s/inspiring-rumple-nrcbxv?file=/index.html"/>
      <NavV/>
    {/*-- Masthead-*/}
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">Benvindo à nossa loja!</div>
        <div className="masthead-heading text-uppercase">
          temos os produtos perfeitos para si
        </div>
      </div>
    </header>
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Alguns produtos</h2>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <BoDy src="https://t2.tudocdn.net/492980?w=150&h=304"/>
            <h4 className="my-3">iPhone 11 Pro Max</h4>
            <Text/>
          </div>
          <div className="col-md-4">
            <BoDy src="https://t2.tudocdn.net/513553?w=133&h=304"/>
            <h4 className="my-3">Samsung Galaxy Z Flip</h4>
            <Text/>
          </div>
          <div className="col-md-4">
            <BoDy src="https://t2.tudocdn.net/615767?w=141&h=304" />
            <h4 className="my-3">Samsung Galaxy A33</h4>
            <Text/>
          </div>
        </div>
      </div>
    </section>
    {/*-- Portfolio Grid-*/}
    <section className="page-section bg-light text-dark" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">+Categorias</h2>
          <h3 className="section-subheading text-muted">
            Veja todos os produtos disponiveis.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            {/*-- Portfolio item 1-*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"/>
                  </div>
                </div>
                <CaT src={require("../../../../img/Apple_watch-series7_hero_09142021_big.jpg.jpg")}/>
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Aple watch</div>
                <div className="portfolio-caption-subheading text-muted">
                  Botão para ver
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/*-- Portfolio item 2-*/}
            <div className="portfolio-item">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <CaT src={require("../../../../img/5f3daf1c81b7aba0516a3d311823d0a5.jpg")}/>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Airpods</div>
                <div className="portfolio-caption-subheading text-muted">
                  Escute suas musicas com melhor qualidade
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/*-- Portfolio item 3-*/}
            <div className="portfolio-item">
              <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <CaT src={require("../../../../img/portfolio/3.jpg")}/>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Mais produts</div>
                <div className="portfolio-caption-subheading text-muted">
                  Detalhes
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/*-- About-*/}
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Sobre-nós</h2>
          <h3 className="section-subheading text-muted">Nome da empresa.</h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <BoDyY src={require("../../../../img/about/1.jpg")}/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2009-2011</h4>
                <h4 className="subheading">algumas informaçõs</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Curta biografia</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <BoDyY src={require("../../../../img/about/2.jpg")}/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Informaçõs</h4>
                <h4 className="subheading">Informaçõs</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Informaçõs!</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <BoDyY src={require("../../../../img/about/3.jpg")}/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Informaçõs</h4>
                <h4 className="subheading">Informaçõs</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Informaçõs</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <BoDyY src={require("../../../../img/about/4.jpg")}/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Informaçõs</h4>
                <h4 className="subheading">PInformaçõs</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Informaçõs</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    {/*-- Team-*/}
    <section className="page-section bg-light text-dark" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Detalhes da administração
          </h2>
          <h3 className="section-subheading text-muted">Equipe.</h3>
        </div>
        <div className="row">
        <div className="team-member col">
          <CaT src={require("../../../../img/team/1.jpg")}/>
          <h4>Nome do Membro</h4>
          <p className="text-muted">lider de disign</p>
        </div>
        <div className="team-member col">
          <CaT src={require("../../../../img/team/1.jpg")}/>
          <h4>Nome do Membro</h4>
          <p className="text-muted">lider de disign</p>
        </div>
        <div className="team-member col">
          <CaT src={require("../../../../img/team/1.jpg")}/>
          <h4>Nome do Membro</h4>
          <p className="text-muted">lider de disign</p>
        </div>
        </div>
      </div>
    </section>
    {/*-- Clients-*/}
    <div className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <a href="#!">
              <FaMicrosoft size={50} color='white'/>
            </a>
          </div>
          <div className="col">
            <a href="#!"
              ><FaGoogle size={50} color='white'/>
                </a>
          </div>
          <div className="col">
            <a href="#!"
              ><FaFacebook size={50} color='white'/>
                </a>
          </div>
          <div className="col">
            <a href="#!"
              ><SiIbm size={50} color='white'/>
                </a>
          </div>
        </div>
      </div>
    </div>
    {/*-- Contact-*/}
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contacte nos</h2>
          
        </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                {/*-- Name input-*/}
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                />
                <div className="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div className="form-group">
                {/*-- Email address input-*/}
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                />
                <div className="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div className="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div className="form-group mb-md-0">
                {/*-- Phone number input-*/}
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  data-sb-validations="required"
                />
                <div className="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/*-- Message input-*/}
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  data-sb-validations="required"
                ></textarea>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          {/*-- Submit success message-*/}
          {/*---*/}
          {/*-- This is what your users will see when the form-*/}
          {/*-- has successfully submitted-*/}
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms"                >https://startbootstrap.com/solution/contact-forms</a>
            </div>
          </div>
          {/*-- Submit error message-*/}
          {/*---*/}
          {/*-- This is what your users will see when there is-*/}
          {/*-- an error submitting the form-*/}
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          {/*-- Submit Button-*/}
          <div className="text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase disabled"
              id="submitButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    {/*-- Footer-*/}
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright &copy; Sites Softs 2022
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Twitter"
              ><i className="fab fa-twitter"></i></a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="LinkedIn"
              ><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
   </div>
)

}
export function BoDy({src}){
  return(
      <Card.Body>
        <img className="img-fluid w-50 rounded-5" src={src} alt=""/>
      </Card.Body>
  )
}export function CaT({src}){
  return(
      <Card.Body>
        <img className="img-fluid" src={src} alt=""/>
      </Card.Body>
  )
}
export function BoDyY({src}){
    return(
        <Card.Body>
          <img className="img-fluid rounded-circle w-100" src={src} alt=""/>
        </Card.Body>
    )
}export function Text(){
 return(
        <div className="row ddd">
          <p className="col">Preço: $ 668,00</p>
          <p className="col">SO : IOS 16</p>
          <p className="col">Rede: 5G</p>
          <p className="col">Armazenamento: 128 GB</p>
        </div>
 )
}