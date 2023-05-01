import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HomeCarousel from '../layouts/carousel';
import NavBar from '../layouts/NavBar';
import Section from '../Home/Section';
import Footer from '../layouts/Footer';
import carousel1 from '../../img/carousel1.jpg';
import carousel2 from '../../img/carousel2.jpg';
import carousel3 from '../../img/carousel3.jpg';

export default function Home() { 
  useEffect (() => {
    document.title = 'Sites Softs';
  }, []);

  return( 
    <div>
      <NavBar active1='btn-primary active' active2='' active3='' classs='' />
      <HomeCarousel 
        src1={carousel1} 
        src2={carousel2} 
        src3={carousel3} 
        titles='Templates dinâmicos'
        titles2='Modelos grátis'
        titles3='Templates de Blogs'
        p={<p className='fs-2 text-center display-6'>Faça alterações facilmente e altere ao seu gosto <br/> Temos vários Templates pra sí</p>}
        p2={<p className='fs-2 text-center display-6'>Templates responsivos para melhor adaptação dos seus clientes.<br/>Escolha os templates que melhor se adaptam ao seu projeto</p>}
        p3={<p className='fs-2 text-center display-6'>Pretende dar início a uma carreira de blogger?<br/>Nós estamos aqui para ajudar no seu progresso</p>}
        btn1={
          <Button variant='primary' className='btn-lg'>
            <Link className='dropdown-item' to='Templates'>Ver templates de sites</Link>
          </Button>
        }
      />
      <Section />
      <Footer />
    </div>
  );
}
