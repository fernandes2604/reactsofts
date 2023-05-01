import {NavBarTemp,NavBarLight} from '../Support/NavBars'
import '../folha1.module.css'
import Footer from '../../../layouts/Footer'
import HomeCarousel from "../../../layouts/carousel"
import {  Row } from "react-bootstrap"
import Produt from "../Support/Prodt"
import { useEffect } from 'react'
export default function TemplateDois(){
  useEffect(()=>{
    document.title="Templates - Venda de Bolsas femininas"
  })
  
    return(
      <div className="bg-light m-auto text-dark" >
         <NavBarTemp
         fone='View'
         comp='#'
         links='https://codesandbox.io/s/modelos-de-venda-de-bolsas-3d6nv2'/>
        <p id="espaço"></p>
        <NavBarLight titles='Nome do Site' href='/#/Templates/template-de-venda-de-bolsas'/>
        <HomeCarousel
          src1={require('../../../../img/bolsas/c1.png')}
          src2={require('../../../../img/bolsas/C2.jpg')}
          src3={require('../../../../img/bolsas/c3.jpg')}
        />
        <Row>
          <Produt
          src={require("../../../../img/bolsas/a(2).jpg")} 
          nome='Polkadot tome mini black'
          preco='AOA 250.500 kzs'
        />
        <Produt
          src={require("../../../../img/bolsas/d (1).jpg")} 
          nome='Wall street P black'
          preco='AOA 430.234 kzs'
        />
        <Produt
          src={require("../../../../img/bolsas/a(2).jpg")} 
          nome='Odeon 25 Grafite'
          preco='AOA 30.234 kzs'
        />
        <Produt
          src={require("../../../../img/bolsas/c(2).jpg")} 
          nome='Ali tote G violet'
          preco='AOA 160.000 kzs'
        />
        <Produt
          src={require("../../../../img/bolsas/d(2).jpg")} 
          nome='Wall street P black'
          preco='AOA 430.234 kzs'
        />
      </Row>
      <Footer/>
    </div>
   )
}
