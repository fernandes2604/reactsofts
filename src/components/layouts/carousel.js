import Carousel from 'react-bootstrap/Carousel';
function HomeCarousel({src1,src2,src3,titles,titles2,titles3,p,p2,p3,btn1,btn2}) {
  return (
    <Carousel className='text-center'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src1}
          alt="First slide"
        />
        <Carousel.Caption className='car'>
          <h4 className='display-6 fs-3'>{titles}</h4>
          {p}
          {btn1}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src2}
          alt="Second slide"
        />
        <Carousel.Caption className='car'>
        <h4 className='display-6 fs-3'>{titles2}</h4>
          {p2}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
           src={src3}          
           alt="Third slide"
           />
        <Carousel.Caption className='car'>
          <h4 className='display-6 fs-3'>{titles3}</h4>
         {p3}
           {btn2}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;