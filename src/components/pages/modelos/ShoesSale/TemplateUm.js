import {NavBarTemp} from "../Support/NavBars"
import Produt from "../Support/Prodt"
import {Row} from "react-bootstrap"
import ReactSlick from "../../../layouts/ReactSlick"
import styles from '../folha1.module.css'
import { NavBarLight } from "../Support/NavBars"
import Footer from "../../../layouts/Footer"
export default function TemplateUm(){
  document.title="Templates - Venda de Tenís"
    return(
      <div className={`bg-light text-dark ${styles.interface}`}>
        <NavBarTemp
         fone='View'
         comp='#'
         links='https://codesandbox.io/s/shoos-sale-template-qzc61h'/>
        <p id="espaço"></p>
        <NavBarLight href='/template-de-tenis'/>
        <h2 className="display-6 fs-3 text-center">Nike</h2>
          <ReactSlick 
            sld={<Produt
              src={require("../../../../img/nike/a(1).jpg")} 
              nome='Polkadot tome mini black'
              preco='AOA 250.500 kzs'
              alt='Polkadot tome mini black'
            />}
          
            sld1={<Produt
              src={require("../../../../img/nike/a(2).jpg")} 
              nome='Wall street P black'
              preco='AOA 430.234 kzs'
              alt='Wall street P black'
            />}
            
            sld2={<Produt
              src={require("../../../../img/nike/a(3).jpg")} 
              nome='Odeon 25 Grafite'
              preco='AOA 30.234 kzs'
              alt=''
            />}
            
            sld3={<Produt
              src={require("../../../../img/nike/a(4).jpg")} 
              nome='Ali tote G violet'
              preco='AOA 160.000 kzs'
              alt=''
            />}
            sld4={<Produt
              src={require("../../../../img/nike/a(5).jpg")} 
              nome='Ali tote G violet'
              preco='AOA 160.000 kzs'
              alt=''
            />}
            sld5={
              <Produt
              src={require("../../../../img/nike/b3.jpg")} 
              nome='Ali tote G violet'
              preco='AOA 160.000 kzs'
              alt=''
            />}          
          />
          
          <ReactSlick
            sld={ 
              <Produt 
                src={require("../../../../img/adidas/a.jpg")} 
                nome='Polkadot tome mini black' 
                preco='AOA 250.500 kzs'
                alt=''/>
              }           
            sld1={
              <Produt 
                src={require("../../../../img/adidas/b.jpg")} 
                nome='Wall street P black' 
                preco='AOA 430.234 kzs'
                alt=''/>
              }           
            sld2={
              <Produt 
                src={require("../../../../img/adidas/c.jpg")} 
                nome='Odeon 25 Grafite' 
                preco='AOA 30.234 kzs'
                alt=''/>
              }           
            sld3={
                <Produt 
                src={require("../../../../img/adidas/d.jpg")} 
                nome='Ali tote G violet' 
                preco='AOA 160.000 kzs'
                alt=''/>
              }           
            sld4={
               <Produt 
                src={require("../../../../img/adidas/e.jpg")} 
                nome='Ali tote G violet' 
                preco='AOA 160.000 kzs'
                alt=''/>
            }           
            sld5={
              <Produt 
                src={require("../../../../img/adidas/e.jpg")} 
                nome='Ali tote G violet' 
                preco='AOA 160.000 kzs'
                alt=''/>
              }
            />
          <ReactSlick
            sld={<Produt 
                src={require("../../../../img/lacoste/a.jpg")} 
                nome='Polkadot tome mini black' 
                preco='AOA 250.500 kzs'
                alt=''/>}
            sld1={<Produt 
                src={require("../../../../img/lacoste/b.jpg")} 
                nome='Wall street P black' 
                preco='AOA 430.234 kzs'
                alt=''/>}
            sld2={<Produt 
                src={require("../../../../img/lacoste/c.jpg")} 
                nome='Odeon 25 Grafite' 
                preco='AOA 30.234 kzs'
                alt=''/>}
            sld3={<Produt 
                src={require("../../../../img/lacoste/d.jpg")} 
                nome='Ali tote G violet' 
                preco='AOA 160.000 kzs'
                alt=''/>}
            sld4={<Produt 
                src={require("../../../../img/lacoste/e.jpg")} 
                nome='Ali tote G violet' 
                preco='AOA 160.000 kzs'
                alt=''/>}
            sld5={<Produt 
              src={require("../../../../img/lacoste/f.jpg")} 
              nome='Ali tote G violet' 
              preco='AOA 160.000 kzs'
              alt=''/>}
            />
          <Row md className='mt-4'>
            <h2 className="display-6 fs-3 text-center">Lacoste</h2>
          </Row>
          <Footer/>
    </div>
   )
}