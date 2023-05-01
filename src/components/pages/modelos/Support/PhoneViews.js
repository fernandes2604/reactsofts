import styles from './FoneView.module.css'
import {NavBarTemp} from "./NavBars";
  export function View1(){
    document.title="Templates - Venda de Tenís"
    return(
      <div>
        <NavBarTemp
          fone='#'
          comp='..'
          links='https://codesandbox.io/s/shoos-sale-template-qzc61h'
        />
        <Frames href='/#/Templates/template-de-tenis'/>
      </div>
        )}

  export function View2(){
    document.title="Templates - Venda de Bolsas femininas"
    return(
      <div>
        <NavBarTemp
          fone='#'
          comp='..'
          links='https://codesandbox.io/s/modelos-de-venda-de-bolsas-3d6nv2'
        />
        <Frames href='/#/Templates/template-de-venda-de-bolsas'/>
      </div>
    )}

    export function View3(){
      document.title="Templates - Venda de Computadores"
      return(
        <>
          <NavBarTemp
            fone='#'
            comp='..'
            links='https://codesandbox.io/s/computer-sale-template-xde103'
          />
          <Frames href='/#/Templates/template-de-venda-de-computadores'/>
        </>
        )}

        export function View4(){
          document.title="Templates - Venda de Smartphones"
          return(
            <>
              <NavBarTemp
                fone='./'
                comp='..'
                links='https://codesandbox.io/s/inspiring-rumple-nrcbxv?file=/index.html'
              />
              <Frames href='/#/Templates/template-de-venda-de-Smartphones'/>
            </>
            )}
 export function View5(){
  document.title="Templates - Portiflio"
  return(
    <>
      <NavBarTemp
        fone='./'
        comp='..'
        links='https://codesandbox.io/s/template-9qv3ng'
      />
      <Frames href='/#/Templates/template-de-portifolio'/>
    </>
    )}
    

        export function Frames({href}){
            return(
                <div className={styles.body}>
                 <iframe className={styles.frame} src={href} title='Foneview'/>
                </div>
            )
        }