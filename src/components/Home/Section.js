import { Link } from "react-router-dom";
import React from "react";
import Iframe from "./Iframe";
import Aside from "./Aside";
import { CardTextRight,CardTextleft } from "../layouts/Cards";
export default function Section() {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="mb-4">
        <Iframe/>
        </div>
        <div className="b-example-divider"/>
        <div className="mt-3 mb-3">
          <CardTextRight 
          src={require('../../img/pexels-fauxels-3183150.png')}
          alt='Pessoas trabalhando em seu escritorio'
          title='Modelos Grátis'
          text='Um grande processo foi feito para definir modelos de site que sejem práticos, simples de entender e adaptavel à sí, de modo a ser mais pratico'
          opcional={<Link to='/Templates' className="btn btn-primary">Conhecer todos os templates</Link>}
          />
        </div>
        <div className="b-example-divider"/>
        <div className="mt-3 mb-3">
          <CardTextleft
          src={require('../../img/modelo.png')}
          title='Template de Loja Virtual'
          text='Faça a sua loja virtual usando nossos templates de loja, Este é um dos modelos de loja de venda de sapatos. Este template é perfeito para lojas que têm foco em venda de sapatos, fazendo update de seus artigos torne este templante o seu site de venda'
          opcional={<Link target='_blank' to='Templates/template-de-tenis' className="btn btn-primary">Ver este template</Link>}
          />
        </div>
        <div className="b-example-divider"/>
        <div className="mt-3 mb-3">
          <CardTextRight src={require('../../img/responsive.png')} alt="Responsivete" 
          title='Templates responsivas' text="Responsividade é tonar o teu site compativel com qualquer aparelho em resolução de imagem,tornando o seu site mais amplo de ser usado Todos os nossos Templates oferecem a responsividade para que possa ter um mercado de acção mais amplo e dinâmico" opcional=''/>
        </div>
        <div className="b-example-divider"/>
      </div>
      <div  className="col-md-3">
        <Aside/>
      </div>
        <div className="mt-5 mb-5">
          <CardTextleft src={require('../../img/sitespagos.jpg')} alt='Imagen de escritorio'
            title='Deseja um sites totalmente novo e feito especificamente pra o seu negocio ou actividade?' text='Para este tipo de desafios temos o serviço de compra de sites, este serviço é destinado a quem tem plena convicção de que quer apostar neste recurso para a sua empresa, loja ou ideia'
            opcional={
             // eslint-disable-next-line 
      <a className="btn btn-primary text-light" href="javascript:void(window.open('https://form.jotform.com/230694299244061','blank','scrollbars=yes,toolbar=no, width=700,  height=500' )  ) ">
      Solicitação de site
    </a>}
          />
        </div>
     
    </div>
  );
}

