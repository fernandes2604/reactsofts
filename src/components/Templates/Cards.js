import { Carousel,Row } from "react-bootstrap"
export default function Cards({src,title1,href,href2}){
        return(
          <Carousel.Item className="active">
            <img
              className="d-block w-100"
              src={src}
              alt="TemplateImage"
            />
            <Carousel.Caption id="imgHover">
              <h2 className='display-6 fs-5'>{title1}</h2>
            <Row>
              <div className="col-sm-6 ">
                {href}
                </div>
              <div className="col-sm-6 ">
                {href2}
                </div>
              </Row>
            </Carousel.Caption>
            </Carousel.Item>
      
        )
      }