import HomeCarousel from "../../../layouts/carousel"
import { CardTextRight,CardTextleft } from "../../../layouts/Cards"
import {NavBarTemp,NavBarBlue} from "../Support/NavBars"
import Footer from "../../../layouts/Footer"
export  function TemplateTres(){
    document.title="Templates - Venda de Computadores"
    return(
        <div>
            <NavBarTemp
                fone='View'
                comp='#'
                links='https://codesandbox.io/s/computer-sale-template-xde103'/>
            <p id='espaço'/>
        <NavBarBlue title='Computers sale'/>
        <HomeCarousel
           src1={require('../../../../img/wallpaperflare.jpg')}
           src2={require('../../../../img/wallpaperflares.jpg')}
           src3={require('../../../../img/wallpaperflare.com_wallpaper.jpg')}
           titles='Designs perfeitos'
           titles2='Computadores putentes e recentes'
           p='Perfeitos e equilibrados paara quem tem bom gosto'
           p2='Use em qualquer projecto ou trbalho sem se preocupa com lentidão'
        />
        <div className="mt-3 mb-2 p-2 m-auto row">
            <Cards srcs={require('../../../../img/pc/ft1.jpg')}/>
            <Cards srcs={require('../../../../img/pc/ft2.jpg')}/>
            <Cards srcs={require('../../../../img/pc/ft3.jpg')}/>
        </div>
      <hr className="featurette-divider"/>
        <div className="row">
            <CardTextRight 
            src={require('../../../../img/pc/ft4.jpg')}
            title='Nome do produto' 
            text='Insformações sobre o produto'
            opcional='Preço'
            alt='Computador-Hp'
            />
            <Cards srcs={require('../../../../img/pc/ft2.jpg')}/>
        </div>
        
      <hr className="featurette-divider"/>
      <div className="row">
        <Cards srcs="https://via.placeholder.com/150/000000/FFFFFF/?text=Imagem"/>
        <CardTextleft
        src={require('../../../../img/pc/fotocop-hp-mfp-mono-a3-m438n-22ppm.jpg')}
        title='Nome do produto' 
        text='Insformações sobre o produto'
        opcional='Preço'
        alt='Impressora-Hp'/>
        </div>
        <Footer/>
        </div>
    )
}

export function Cards({srcs}){
    return(
        <div className="card col-md-4 bg-transparent py-2">
      <img src={srcs} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Computador</h5>
        <h6 className="card-subtitle mb-2 text-muted ">Nome do artigo</h6>
        <p className="card-text">Breves informações.</p>
      </div>
    </div>
    )}
