import { Link } from "react-router-dom"
import { useEffect } from "react"
export function BolsaSorces(){
    useEffect(()=>{
        document.title='Codigo-Fonte do template'
      })
    return(
        <div id="source">
          <BaseSource/>
          <div className="sourcess bg-light text-dark" id="viewOnly"> 
            &lt;nav className="navbar navbar-expand border-bottom"&gt;<br/>
            &nbsp; &lt;div className="alinha d-flex flex-wrap justify-content-center container"&gt;<br/>
            &nbsp; &nbsp; &lt;a href="/" id="a" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"&gt;&lt;span className="fs-4 text-dark tititi"&gt;&lt;/span&gt;&lt;/a&gt;<br/>
            &nbsp; &nbsp; &lt;div className="navbar-collape"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;ul className=" me-auto nav nav-pills"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;li className="nav-item"&gt;&lt;a href="" className="nav-link active" aria-current="page"&gt;Home&lt;/a&gt;&lt;/li&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;li className="nav-item"&gt;&lt;a href="#" className="nav-link"&gt;FeedBack&lt;/a&gt;&lt;/li&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;li className="nav-item"&gt;&lt;a href="#" className="nav-link"&gt;Sobre&lt;/a&gt;&lt;/li&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;/ul&gt;<br/>
            &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &lt;/div&gt;<br/>
            &lt;/nav&gt;<br/>
            &lt;div className="carousel slide"&gt;<br/>
            &nbsp; &lt;div className="carousel-indicators"&gt;<br/>
            &nbsp; &nbsp; &lt;button type="button" data-bs-target="" aria-label="Slide 1" aria-current="false"&gt;&lt;/button&gt;<br/>
            &nbsp; &nbsp; &lt;button type="button" data-bs-target="" aria-label="Slide 2" aria-current="true" className="active"&gt;&lt;/button&gt;<br/>
            &nbsp; &nbsp; &lt;button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"&gt;&lt;/button&gt;<br/>
            &nbsp; &lt;/div&gt;<br/>
            &nbsp; &lt;div className="active carousel-inner"&gt;<br/>
            &nbsp; &nbsp; &lt;div className="carousel-item"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;img className="d-block w-100" src=" " alt="First slide"/&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;div className="text-start carousel-caption"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;h4 className="display-6 fs-2 fw-normal fst-italic"&gt;Titulo do assunto da imagem&lt;/h4&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;p className="display-6 fs-4 col-7 fw-lighter"&gt; texto do slide &lt;/p&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &nbsp; &lt;/div&gt;<br/>
             &nbsp; &lt;div className="carousel-inner"&gt;<br/>
            &nbsp; &nbsp; &lt;div className="carousel-item"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;img className="d-block w-100" src=" " alt="Second slide"/&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;div className="text-start carousel-caption"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;h4 className="display-6 fs-2 fw-normal fst-italic"&gt;Titulo do assunto da imagem&lt;/h4&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;p className="display-6 fs-4 col-7 fw-lighter"&gt; texto do slide &lt;/p&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &lt;div className="carousel-inner"&gt;<br/>
            &nbsp; &nbsp; &lt;div className="carousel-item"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;img className="d-block w-100" src=" " alt="Third slide"/&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;div className="text-start carousel-caption"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;h4 className="display-6 fs-2 fw-normal fst-italic"&gt;Titulo do assunto da imagem&lt;/h4&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;p className="display-6 fs-4 col-7 fw-lighter"&gt; texto do slide &lt;/p&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &lt;/div&gt;<br/>
            &nbsp; &lt;a className="carousel-control-prev" role="button" tabindex="0" href="#"&gt;<br/>
            &nbsp; &nbsp; &lt;span aria-hidden="true" className="carousel-control-prev-icon"&gt;&lt;/span&gt;<br/>
            &nbsp; &nbsp; &lt;span className="visually-hidden"&gt;Previous&lt;/span&gt;<br/>
            &nbsp; &lt;/a&gt;<br/>
            &nbsp; &lt;a className="carousel-control-next" role="button" tabindex="0" href="#"&gt;<br/>
            &nbsp; &nbsp; &lt;span aria-hidden="true" className="carousel-control-next-icon"&gt;&lt;/span&gt;<br/>
            &nbsp; &nbsp; &lt;span className="visually-hidden"&gt;Next&lt;/span&gt;<br/>
            &nbsp; &lt;/a&gt;<br/>
    &lt;/div&gt;<br/>
    &lt;div className="row"&gt;<br/>
    &nbsp; &lt;div className="col-md "&gt;<br/>
        &nbsp; &nbsp; &lt;input type="file" accept="image/*" multiple="" style="display: none;"/&gt;<br/>
        &nbsp; &nbsp; &lt;div className="upload__image-wrapper"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;div className="row mt-2"&gt;<br/>

            &lt;!----repita o col para add mais artigos----&gt;<br/>

            &nbsp; &nbsp; &nbsp; &nbsp; &lt;div className="col-md"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;img src=" " className="img-fluid"&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;h2 className="fw-light fs-5"&gt;Nome do produto&lt;/h2&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;p className="fw-light text-success"&gt;Preço&lt;/p&gt;<br/>
            &nbsp; &nbsp; &nbsp; &nbsp;&lt;/div&gt;<br/>
            &nbsp; &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &nbsp; &lt;/div&gt;<br/>
            &nbsp; &lt;/div&gt;  <br/>
  &lt;/div&gt;<br/>
  </div>
  <div  className="btn btn-primary mt-3 mb-2" id="back-btn"><Link relative="path" to='../..' className="text-light">Voltar</Link> </div>
    <div className="text-center">&copy;Todos direitos reservados à Sites Softs</div>
        </div>
    )
}
export function ShoesSources(){
  useEffect(()=>{
    document.title='Codigo-Fonte do template'
  })
return(
  <div>
    <div id="source">
      <h3 className="text-center fw-lighter fs-3">Sites Softs</h3>
      <p className="text-center">Copie e cole no seu codigo (faça as alterações que quiser para tornar este template unico)</p>
      <p className="text-center">Instale as depenências de <a href="https://bootstrap.com" rel="noreferrer" className="text-primary" target="_blank">Bootstrap</a> para obter o aspecto</p>
      <p className="text-center">Instale as depenências de <a href="https://bootstrap.com" rel="noreferrer" className="text-primary" target="_blank">jQuery</a></p>
      <p className="text-center">Instale as depenências de <a href="https://bootstrap.com" rel="noreferrer" className="text-primary" target="_blank">Slick-slide</a></p>
    </div>
    <div className="sourcess bg-light text-dark" id="viewOnly">
  &lt;section className="corpo"&gt;<br/>
   &lt;h2 className="display-6 py-2"&gt;Adidas&lt;/h2&gt;<br/>
    &lt;div className="row slick"&gt;<br/>
      &lt;div className="col-md slide"&gt;<br/>
        &lt;img className="img-fluid" src="../img/adidas/a.jpg" alt=""&gt;<br/>
        &lt;h3 className="display-6"&gt;Tenis MDM-R1 PrimeBlue&lt;/h3&gt;<br/>
        &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 47.520 KZS&lt;/small&gt; AOA 33.4392,12 kzs &lt;br&gt;<br/>
        &lt;span className="text-success"&gt;31% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
          &lt;!-- Button trigger modal --&gt;<br/>
          &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal1"&gt;<br/>
             Mais sobre este artigo<br/>
          &lt;/button&gt;<br/>
      &lt;/div&gt;<br/>
      &lt;div className="col-md slide"&gt;<br/>
        &lt;img className="img-fluid" src="../img/adidas/b.jpg" alt=""&gt;<br/>
        &lt;h3 className="display-6"&gt;Tenis Duramo SL2.0&lt;/h3&gt;<br/>
        &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 89.999 KZS&lt;/small&gt; AOA 59.999 KZS&lt;br&gt;Pagavel até 12x 4.160 kzs&lt;br&gt;&lt;span className="text-success"&gt;38% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
         &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal2"&gt;<br/>
             Mais sobre este artigo<br/>
          &lt;/button&gt;
      &lt;/div&gt;<br/>
      &lt;div className="col-md slide"&gt;<br/>
        &lt;img className="img-fluid" src="../img/adidas/c.jpg" alt=""&gt;<br/>
        &lt;h3 className="display-6"&gt;Tenis SuperStar&lt;/h3&gt;<br/>
        &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 50.520 KZS&lt;/small&gt; AOA 30.4392,12 kzs &lt;br&gt;<br/>
          &lt;span className="text-success"&gt;36% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
           &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal3"&gt;<br/>
             Mais sobre este artigo<br/>
          &lt;/button&gt;<br/>
      &lt;/div&gt;<br/>
      &lt;div className="col-md slide"&gt;<br/>
        &lt;img className="img-fluid" src="../img/adidas/d.jpg" alt=""&gt;<br/>
        &lt;h3 className="display-6"&gt;Tenis adi2000&lt;/h3&gt;<br/>
        &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 50.520 KZS&lt;/small&gt; AOA 30.4392,12 kzs &lt;br&gt;<br/>
          &lt;span className="text-success"&gt;36% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
           &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal4"&gt;<br/>
             Mais sobre este artigo<br/>
          &lt;/button&gt;<br/>
      &lt;/div&gt;<br/>
          &lt;span className="text-success"&gt;36% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
           &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal5"&gt;<br/>
             Mais sobre este artigo<br/>
          &lt;/button&gt;<br/>
      &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
      &lt;iframe src="../img/Calçado outdoor em pele e tecido para o inverno L-Spin Deluxe para homem - Men's Outdoor Sneakers - Novidades 2022 _ Lacoste_files/logoholiday.svg" frameborder="0"&gt;&lt;/iframe&gt;<br/>
      &lt;div className="row slick"&gt;<br/>
<br/>
        &lt;div className="col-md slide"&gt;<br/>
          &lt;img className="img-fluid" src="../img/lacoste/a.jpg" alt=""&gt;<br/>
          &lt;h3 className="display-6"&gt;Tenis MDM-R1 PrimeBlue&lt;/h3&gt;<br/>
          &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 47.520 KZS&lt;/small&gt; AOA 33.4392,12 kzs &lt;br&gt;<br/>
          &lt;span className="text-success"&gt;31% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
            &lt;!-- Button trigger modal --&gt;<br/>
            &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal1"&gt;<br/>
               Mais sobre este artigo<br/>
            &lt;/button&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;div className="col-md slide"&gt;<br/>
          &lt;img className="img-fluid" src="../img/lacoste/b.jpg" alt=""&gt;<br/>
          &lt;h3 className="display-6"&gt;Ténis em pele Lacoste L005&lt;/h3&gt;<br/>
          &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 89.999 KZS&lt;/small&gt; AOA 59.999 KZS&lt;br&gt;Pagavel até 12x 4.160 kzs&lt;br&gt;&lt;span className="text-success"&gt;38% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
           &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal2"&gt;<br/>
               Mais sobre este artigo<br/>
            &lt;/button&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;div className="col-md slide"&gt;<br/>
          &lt;img className="img-fluid" src="../img/lacoste/c.jpg" alt=""&gt;<br/>
          &lt;h3 className="display-6"&gt;Ténis em sintético Lacoste&lt;/h3&gt;<br/>
          &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 50.520 KZS&lt;/small&gt; AOA 30.4392,12 kzs &lt;br&gt;<br/>
            &lt;span className="text-success"&gt;36% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
             &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal3"&gt;<br/>
               Mais sobre este artigo<br/>
            &lt;/button&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;div className="col-md slide"&gt;<br/>
          &lt;img className="img-fluid" src="../img/lacoste/d.jpg" alt=""&gt;<br/>
          &lt;h3 className="display-6"&gt; outdoor em pele e tecido &lt;/h3&gt;<br/>
          &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 50.520 KZS&lt;/small&gt; AOA 30.4392,12 kzs &lt;br&gt;<br/>
            &lt;span className="text-success"&gt;36% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
             &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal4"&gt;<br/>
               Mais sobre este artigo<br/>
            &lt;/button&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;div className="col-md slide"&gt;<br/>
          &lt;img src="../img/lacoste/e.jpg" className="img-fluid"&gt;<br/>
          &lt;h3 className="display-6"&gt;Tenis Solaglipe 5&lt;/h3&gt;<br/>
          &lt;p className="display-6 p"&gt;&lt;small className="text-muted sale"&gt;AOA 50.520 KZS&lt;/small&gt; AOA 30.4392,12 kzs &lt;br&gt;<br/>
            &lt;span className="text-success"&gt;36% de desconto&lt;/span&gt;&lt;/p&gt;<br/>
             &lt;button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal5"&gt;<br/>
               Mais sobre este artigo<br/>
            &lt;/button&gt;<br/>
        &lt;/div&gt;<br/>
      &lt;/div&gt;<br/>
  &lt;/section&gt;<br/>
  </div>
  <div  className="btn btn-primary mt-2 mb-1" id="back-btn"><Link relative="path" to='../..' className="text-light">Voltar</Link> </div>
    <div className="text-center">&copy;Todos direitos reservados à Sites Softs</div>
  </div>
)
}
export function FonesSources(){
  useEffect(()=>{
    document.title='Codigo-Fonte do template'
  })
return(
  <div>
  <BaseSource/>
  
  </div>
)
}
export function CompSources(){
  useEffect(()=>{
    document.title='Codigo-Fonte do template'
  })
return(<>
  <BaseSource/>
  <div id="viewOnly" className="sourcess bg-light text-dark">
  &lt;div&gt;<br/>
 &lt;nav id="bord" className="col-md-11 br-1 m-auto navbar navbar-expand-md navbar-dark bg-primary"&gt;<br/>
  &lt;div className="container"&gt;<br/>
    &lt;a href="#" className="navbar-brand"&gt;Computers sale&lt;/a&gt;<br/>
    &lt;button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed"&gt;<br/>
      &lt;span className="navbar-toggler-icon"&gt;&lt;/span&gt;<br/>
    &lt;/button&gt;<br/>
    &lt;div className="navbar-collapse collapse" id="responsive-navbar-nav"&gt;<br/>
      &lt;div className="me-auto navbar-nav"&gt;<br/>
        &lt;a href="#" role="button" data-rr-ui-event-key="#" className="nav-link" tabindex="0"&gt;Home&lt;/a&gt;<br/>
        &lt;a href="#" role="button" data-rr-ui-event-key="#" className="nav-link" tabindex="0"&gt;Sobre&lt;/a&gt;<br/>
      &lt;/div&gt;<br/>
      &lt;div className="navbar-nav"&gt;<br/>
        &lt;form className="d-flex"&gt;<br/>
          &lt;input placeholder="Pesquisar" aria-label="Search" type="search" className="me-2 form-control"&gt;<br/>
          &lt;button type="button" className="btn btn-outline-light"&gt;Pesquisar&lt;/button&gt;<br/>
        &lt;/form&gt;<br/>
      &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
  &lt;/div&gt;<br/>
&lt;/nav&gt;<br/>
&lt;div className="carousel slide"&gt;<br/>
  &lt;div className="carousel-indicators"&gt;<br/>
    &lt;button type="button" data-bs-target="" aria-label="Slide 1" className="active" aria-current="true"&gt;&lt;/button&gt;<br/>
    &lt;button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"&gt;&lt;/button&gt;<br/>
    &lt;button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"&gt;&lt;/button&gt;<br/>
  &lt;/div&gt;<br/>
  &lt;div className="carousel-inner"&gt;<br/>
    &lt;div className="active carousel-item"&gt;<br/>
      &lt;img className="d-block w-100" src="/static/media/wallpaperflare.fdc95be7556cc9bdd958.jpg" alt="First slide"&gt;<br/>
      &lt;div className="text-start carousel-caption"&gt;<br/>
        &lt;h4 className="display-6 fs-2 fw-normal fst-italic"&gt;Designs perfeitos&lt;/h4&gt;<br/>
        &lt;p className="display-6 fs-4 col-7 fw-lighter"&gt;Perfeitos e equilibrados paara quem tem bom gosto&lt;/p&gt;<br/>
      &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
    &lt;div className="carousel-item"&gt;<br/>
      &lt;img className="d-block w-100" src="/static/media/wallpaperflares.5403e42912a102eb4c7f.jpg" alt="Second slide"&gt;<br/>
      &lt;div className="text-center carousel-caption"&gt;<br/>
        &lt;h4 className="display-6 fs-2 fw-normal fst-italic"&gt;Computadores putentes e recentes&lt;/h4&gt;<br/>
        &lt;p className="display-6 fs-4 fw-lighter"&gt;Use em qualquer projecto ou trbalho sem se preocupa com lentidão&lt;/p&gt;<br/>
      &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
    &lt;div className="carousel-item"&gt;<br/>
      &lt;img className="d-block w-100" src="/static/media/wallpaperflare.com_wallpaper.33182a8545248809afd1.jpg" alt="Third slide"&gt;<br/>
      &lt;div className="text-start carousel-caption"&gt;<br/>
        &lt;h4 className="display-6 fs-2 fw-normal fst-italic"&gt;&lt;/h4&gt;<br/>
        &lt;p className="display-6 col-8 fs-4 fw-lighter"&gt;&lt;/p&gt;<br/>
      &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
  &lt;/div&gt;<br/>
  &lt;a className="carousel-control-prev" role="button" tabindex="0" href="#"&gt;&lt;span aria-hidden="true" className="carousel-control-prev-icon"&gt;&lt;/span&gt;<br/>
    &lt;span className="visually-hidden"&gt;Previous&lt;/span&gt;<br/>
  &lt;/a&gt;<br/>
  &lt;a className="carousel-control-next" role="button" tabindex="0" href="#"&gt;&lt;span aria-hidden="true" className="carousel-control-next-icon"&gt;&lt;/span&gt;&lt;span className="visually-hidden"&gt;Next&lt;/span&gt;&lt;/a&gt;<br/>
&lt;/div&gt;<br/>
&lt;div className="mt-3 mb-2 p-2 m-auto row"&gt;<br/>
  &lt;div className="card col-md-4 bg-transparent py-2"&gt;<br/>
    &lt;img src="/static/media/ft1.49c7df68a1bfa921a42f.jpg" className="card-img-top" alt="..."&gt;<br/>
    &lt;div className="card-body"&gt;<br/>
      &lt;h5 className="card-title"&gt;Computador&lt;/h5&gt;<br/>
      &lt;h6 className="card-subtitle mb-2 text-muted "&gt;Nome do artigo&lt;/h6&gt;<br/>
      &lt;p className="card-text"&gt;Breves informações.&lt;/p&gt;<br/>
    &lt;/div&gt;<br/>
  &lt;/div&gt;<br/>
  &lt;div className="card col-md-4 bg-transparent py-2"&gt;
    &lt;img src="/static/media/ft2.bd35f870da9b650d4903.jpg" className="card-img-top" alt=".."&gt;<br/>
    &lt;div className="card-body"&gt;<br/>
      &lt;h5 className="card-title"&gt;Computador&lt;/h5&gt;<br/>
      &lt;h6 className="card-subtitle mb-2 text-muted "&gt;Nome do artigo&lt;/h6&gt;<br/>
      &lt;p className="card-text"&gt;Breves informações.&lt;/p&gt;<br/>
    &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
      &lt;div className="card col-md-4 bg-transparent py-2"&gt;<br/>
        &lt;img src="/static/media/ft3.ddcb2440043c0603f7dc.jpg" className="card-img-top" alt="..."&gt;<br/>
        &lt;div className="card-body"&gt;<br/>
          &lt;h5 className="card-title"&gt;Computador&lt;/h5&gt;<br/>
          &lt;h6 className="card-subtitle mb-2 text-muted "&gt;Nome do artigo&lt;/h6&gt;<br/>
          &lt;p className="card-text"&gt;Breves informações.&lt;/p&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;hr className="featurette-divider"&gt;<br/>
        &lt;div className="row"&gt;<br/>
          &lt;div className="col"&gt;<br/>
            &lt;div className="bg-transparent card"&gt;<br/>
              &lt;div className="card-body"&gt;<br/>
                &lt;div className="row"&gt;<br/>
                  &lt;div className="col"&gt;<br/>
                    &lt;img className="img-fluid" src="/static/media/ft4.9696c84f71cf549ac87e.jpg" alt="Computador-Hp"&gt;<br/>
                  &lt;/div&gt;<br/>
                  &lt;div className="col-md-6"&gt;<br/>
                    &lt;h4 className="fw-light"&gt;Nome do produto&lt;/h4&gt;<br/>
                    &lt;p&gt;Insformações sobre o produto.&lt;/p&gt;Preço
                  &lt;/div&gt;<br/>
                &lt;/div&gt;<br/>
              &lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
          &lt;div className="card col-md-4 bg-transparent py-2"&gt;<br/>
            &lt;img src="/static/media/ft2.bd35f870da9b650d4903.jpg" className="card-img-top" alt="..."&gt;<br/>
            &lt;div className="card-body"&gt;<br/>
              &lt;h5 className="card-title"&gt;Computador&lt;/h5&gt;<br/>
              &lt;h6 className="card-subtitle mb-2 text-muted "&gt;Nome do artigo&lt;/h6&gt;<br/>
              &lt;p className="card-text"&gt;Breves informações.&lt;/p&gt;<br/>
            &lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
            &lt;hr className="featurette-divider"&gt;&lt;div className="row"&gt;&lt;div className="card col-md-4 bg-transparent py-2"&gt;<br/>
              &lt;img src="https://via.placeholder.com/150/000000/FFFFFF/?text=Imagem" className="card-img-top" alt="..."&gt;<br/>
              &lt;div className="card-body"&gt;<br/>
                &lt;h5 className="card-title"&gt;Computador&lt;/h5&gt;<br/>
                &lt;h6 className="card-subtitle mb-2 text-muted "&gt;Nome do artigo&lt;/h6&gt;<br/>
                &lt;p className="card-text"&gt;Breves informações.&lt;/p&gt;<br/>
              &lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
              &lt;div className="bg-transparent card bg-dark border-dark"&gt;<br/>
                &lt;div className="card-body"&gt;<br/>
                &lt;div className="row"&gt;<br/>
                &lt;div className="col"&gt;<br/>
                &lt;h4 className="fw-light"&gt;Nome do produto&lt;/h4&gt;<br/>
                &lt;p&gt;Insformações sobre o produto.&lt;/p&gt;Preço&lt;/div&gt;<br/>
              &lt;div className="col-md-7"&gt;<br/>
                &lt;img className="img-fluid" src="/static/media/fotocop-hp-mfp-mono-a3-m438n-22ppm.a008738844e36d9d1aca.jpg" alt="Impressora-Hp"&gt;<br/>
              &lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
  </div>
  <div  className="btn btn-primary mt-2 mb-1" id="back-btn"><Link relative="path" to='../..' className="text-light">Voltar</Link> </div>
    <div className="text-center">&copy;Todos direitos reservados à Sites Softs</div>
  </>
)
}
function BaseSource(){
  return(
    <div id="source">
      <h3 className="text-center fw-lighter fs-3">Sites Softs</h3>
      <p className="text-center">Copie e cole no seu codigo (faça as alterações que quiser para tornar este template unico)</p>
      <p className="text-center">Instale as depenências de <a href="https://bootstrap.com" rel="noreferrer" className="text-primary" target="_blank">Bootstrap</a> para obter o aspecto</p>
      <div className="text-center">CSS :&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"  crossorigin="anonymous"&gt;</div>
      <p className="text-center"> JavaScript :&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"&gt;&lt;/script&gt;</p>
    </div>
  )
}