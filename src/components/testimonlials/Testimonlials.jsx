import React from "react";
import "./Testimonlials.css";
import Carousel from 'react-elastic-carousel';

export const Testimonlials = () => {

    const breakPoints = [
        {width:'500',itemsToShow:1},
        {width:'1000',itemsToShow:2},
        {width:'1300',itemsToShow:3}
    ]
    
  return (
    <div className="testimonlials">
      <h1>Testimonlials</h1>
      <div className="divs">
        <Carousel breakPoints={breakPoints}>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5rjB5JT9RC0?si=tznv--ZaBzo3bBHy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
        <img src={require('../../assets/sample/1.png')} alt="" />
          
        </div>
        <div>
        <img src={require('../../assets/sample/2.png')} alt="" />
         
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/53nwh1aHCU8?si=WqOjfZOx0oGSe0mn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        </div>
        <div>
        <img src={require('../../assets/sample/3.png')} alt="" />
         
        </div>
        <div>
        <img src={require('../../assets/sample/1.png')} alt="" />
         
        </div>
        </Carousel> 
      </div>
    </div>
  );
};
