import { Card,Row,Col } from 'react-bootstrap'
export function CardTextRight({src,text,alt,title, opcional}){
  return(
    <div className='col'>
      <Card body className='bg-transparent'>
        <Row>
          <Col>
            <img className="img-fluid" src={src} alt={alt} />
          </Col>
          <Col md={6}>
            <h4 className="fw-light">{title}</h4>
            <p>{text}.</p>
            {opcional}                                 
          </Col>
            </Row>
      </Card>
    </div>
  )
}
export function CardTextleft({src,text,alt,title, opcional}){
  return(
    <Card body bg="dark" border="dark" className='bg-transparent'>
      <Row>
        <Col>
          <h4 className="fw-light">{title}</h4>
          <p>{text}.</p>
          {opcional}                                 
        </Col>
        <Col md={7}>
          <img className="img-fluid" src={src} alt={alt}/>
        </Col>
      </Row>
    </Card>
  )
}