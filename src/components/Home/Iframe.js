import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function Iframe(){
    const [open, setOpen] = useState(false);
    return(
        <div id='frame' className='mt-3'>
        <h2 className='fs-4 fw-light'>Oque é um site e para q serve?</h2>
        <p>Um site é o conjunto de páginas ordenadas num servidor de internet cujo acesso ocorre a partir de um domínio...</p>
        <Collapse in={open} dimension="height">
          <div id="divdecolapso">
            <div>
            <p>Sites são formas de usar a internet de modo a que empresas, Lojas e qualquer outro tipo de negocio ou ideia tenha os seus serviços ou produto exibidos de uma forma mais facil e simples a todo mundo q pretende obter ou conhecer. A criação de um WebSite ajuda a evitar enchentes em lojas, a utilização de WebSites torna-se uma grande ajuda para qualquer que seja o negocio em questão.Tendo isso em vista para quem não tem uma grande certeza em se ao obter este recurso ele será bem recebido por parte dos clientes e pelo facto que o custo de aquisição pode ser de gastos elevados temos pra sí sites gratis para o seus negocio.</p>
            <p>Os sites disponiveis para sí são modelos genericos para certas areas de traballho desta forma eles são estetizados de forma a que seja totalmente útil. E claro que se estiver convicto que este recurso será bem recebido oferecemos o serviço de encomenda,isto é, pagar a criação de um site especifico para o seu negocio feito com as suas especificaçoes e com o bonûs de uma base de dados integrada. O site tem a função de informar sobre tudo que a empresa oferece e sua finalidade. Mesmo que não ocorra uma conversa “clássica”, a troca de informações ocorre da mesma maneira.</p>
            </div>
          </div>
        </Collapse>
        <Button
        size='sm'
        variant='outline-primary'
        onClick={() => setOpen(!open)}
        aria-controls="divdecolapso"
        aria-expanded={open}>

        Para saber mais sobre sites clique aqui
        
      </Button>
      <div style={{ maxHeight: '150px' }}>
      </div>
        </div>
    )
}
export default Iframe