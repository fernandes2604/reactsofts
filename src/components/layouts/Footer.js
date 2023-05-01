import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {FaFacebook,FaGoogle,FaInstagram,FaWhatsapp,FaHome} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsTelephoneFill} from 'react-icons/bs'
export default function Footer() {
  return (
    <MDBFooter className='text-muted border-top mt-3'>
  
        <MDBContainer  className='container text-center mt-4 text-md-start'>
          <MDBRow className='mt-0'>
            <MDBCol sm="3" md="4" lg="4" xl="4" className='mx-auto'>
            <h6 className='text fw-bold mb-4'><img className='col-1 me-1' src={require('../../img/favicon.ico')} alt="Logotipo do site"/>Sites Softs</h6>
              <p>Sites Soft é um projeto criado para prover Templates gratís aos internautas, deste modo facilitar a tarefa de criação de alguns sites no uso destes templates.</p>
            </MDBCol>
            <MDBCol sm="3" md="2" lg="2" xl="2" id='footer' className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>LINKS ÚTEIS</h6>
              <p><a href='/' className='text-reset'>Home</a></p>
              <p><a href='../../../../#/Templates' className='text-reset'>Templates</a></p>
              <p><a href='../../../../#/TemplatesDeblogs' className='text-reset'>Templates de Blogs</a></p>
              <p><a href='../../../../#/Feedback' className='text-reset'>Feedback</a></p>
            </MDBCol>

            <MDBCol sm="3" md="3" lg="3" xl="3" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Redes sociais:</h6>
              <p>
                <div>
                  <a target='_black' href="https://facebook.com/fernandes2004" className='me-2 text-reset'><FaFacebook size={20}/></a>
                  <a target='_black' href="https://instagram.com/evandro_2604" className='me-2 text-reset'><FaInstagram size={20}/></a>
                  <a target='_black' href="https://wa.me/936155670" className='me-2 text-reset'><FaWhatsapp size={20}/></a>
                  <a target='_black' href="mailto:evandrofernandesfx2@gmail.com" className='me-2 text-reset'><FaGoogle size={20}/></a>
                </div>
              </p>
            </MDBCol>
            <MDBCol sm="3" md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p><FaHome size={20}/><MDBIcon className="me-2" />Benguela, Lobito </p>
              <p><SiGmail/><MDBIcon icon="envelope" className="me-2"/>evandrofernandesfx2@gmail.com</p>
              <p><BsTelephoneFill/><MDBIcon icon="phone" className="me-2"/>+244 936 155 670 </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      <div className='text-center text-light' style={{backgroundColor: '#303a44'}}>
        &copy;2023 &nbsp;&nbsp;
        <a className='text-reset' rel="noreferrer" target='_blank' href='https://softs.vercel.app/'>
          Sites Soft
        </a>
      </div>
    </MDBFooter>
  );
}