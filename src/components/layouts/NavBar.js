import {  Navbar,NavDropdown,Nav } from 'react-bootstrap'
import {FaInstagram, FaWhatsapp, FaFacebook,FaSun,FaMoon}from 'react-icons/fa'
import { SiGmail} from 'react-icons/si'
import { Link } from 'react-router-dom'
import  './Icons.module.css'
  export default function NavBar({active1,active2,active3,classs}){
    const heroActive = false 
      window.addEventListener('scroll', function() {
        if(window.screen.width>500){//para telas maiores
          if (window.scrollY >= 580) {//scrol a baixo de 140px
            if (!heroActive){
              this.heroActive = true
              this.mv.classList.add('aqui2')
              if(window.innerWidth < 956) return;
            }
          }else{
              if (!heroActive){
                this.heroActive = false
                this.mv.classList.remove('aqui2')
                if(window.innerWidth < 956) return;
              }
            }
        }else{
          this.mv.classList.add('style.aqui2')
        }
      })
      
    document.body.classList.add('e')
    function troca(){
      if(document.body.classList.contains('e')){
        document.body.classList.remove('e')
        document.body.classList.add('bg-light','text-dark')
      }else{         
        document.body.classList.add('e')
        document.body.classList.remove('bg-light','text-dark')
      }
    }//troca o tema
    function ver(){
      troca()
      localStorage.removeItem('LightMode')
      if(document.body.classList.contains('bg-light')){
        document.body.classList.remove('e')
        localStorage.setItem('LightMode',1)
      }
    }
    function load(){
      let dark=localStorage.getItem('LightMode')
      if(dark){
        troca()
      }
    }load()

    return (
        <Navbar variant="dark" expand="md" fixed='top' id='mv' className={classs}>
          <div className="container-fluid">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link id="home" className={`nav-link btn ${active1}`}to='..'>Home</Link>
                <NavDropdown className={`${active2}`} title="Templates" id="basic-nav-dropdown" menuVariant='dark'>
                  <Link className='dropdown-item' to='../Templates'>Templates para sites</Link>
                  <Link className='dropdown-item' to='../TemplatesDeblogs'>Templates para blog</Link>
                </NavDropdown>
                <Link id='feedback' className={`nav-link btn ${active3}`} to='../Feedback'>Sugestões & Sobre</Link>
              </Nav>
            </Navbar.Collapse>
            <ul className='d-flex nav-link ms-auto'>
              <div className='p-0'>Contacte-nos:</div>
              <Link target='_black' className='p-0 text-decoration-none' to="https://instagram.com/evandro_2604"><li className='li'><FaInstagram  size={20}/></li></Link>
              <Link target='_black' className='p-0 text-decoration-none' to="http://wa.me/936155670"><li className='li'><FaWhatsapp size={20}/></li></Link>
              <Link target='_black' className='p-0 text-decoration-none' to="https://facebook.com/fernandes2004"><li className='li'><FaFacebook size={20}/></li></Link>
              <Link target='_black' className='p-0 text-decoration-none' to="mailto:evandrofernandesfx2@gmail.com"><li className='li'><SiGmail/></li></Link>
              <li className='p-0'>
                <input type="checkbox"  id="theme-switche" onChange={ver}/>
                <label htmlFor="theme-switche" className="float-right">
                  <FaSun size={25} id='sun' className='iconsun'/>
                  <FaMoon size={25} id="moon" className='iconmoon'/>
                </label>
              </li>
            </ul>
          </div>
        </Navbar>
      );  
    }
