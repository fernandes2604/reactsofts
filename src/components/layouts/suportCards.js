import { Col } from "react-bootstrap"
export function imgs({src, alt}) {
    return(
        <>
      <Col>
        <img className="img-fluid" src={src} alt={alt} />
      </Col>
      </>
    )
  }
   export function texts({titles, textss,opcionals}){
    return(
      <Col md={6}>
        <h4 className="fw-light">{titles}</h4>
        <p>{textss}.</p>
        {opcionals}                                 
      </Col>
    )
  }