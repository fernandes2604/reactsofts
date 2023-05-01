import React from "react";
import Slider from "react-slick";
export default function Caro() {
    
    const settings = {  
        fade : true , 
        speed : 500 , // ms 
        autoplay : false , 
        initialSlide : 2 , 
        lazyLoad : true , 
        autoplaySpeed : 3000 , }  

  return (
    <div className='content'>
    <Slider {...settings}>
      {hotelCards.map((card, index) => (
        <div key={index}>
          <h2>{card.title}</h2>
          <img alt={card.title} src={card.imageSrc} width="10" height="10" />
          <p>{card.description}</p>
          <ul>
            {card.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className='btn '>Buy Now</button>
        </div>
      ))}
    </Slider>
  </div>
  )
}