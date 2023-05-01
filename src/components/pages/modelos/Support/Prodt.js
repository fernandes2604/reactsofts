import { Button, Image,Col } from "react-bootstrap"

export default function Produt({src,nome,preco,alt}){
    return(
        <>
        <Col md>
          <Image src={src} alt={alt} fluid/>
          <h2 className="fw-light fs-5">{nome}</h2>
          <p className="fw-light text-success">{preco}</p>
          <Button as="input" variant="outline-dark" type="button" value='Ver'/>
        </Col>
         </>
    )
}