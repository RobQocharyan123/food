import React from 'react';
import './BreakFast.css';

export const BreakFast = () => {

 

  const scrollToOrder =()=>{
    window.scrollTo(250, 1600)
  }
  return (
    <div className='breakfast'>
      <div className='breakfast-one'>
        <img src={require('../../assets/breakfast/breakfast1.png')} alt="breakfast" className='one'/>
        <img src={require('../../assets/breakfast/breakfast2.png')} alt="breakfast" className='two'/>
        <img src={require('../../assets/breakfast/breakfast3.png')} alt="breakfast" className='three'/>
        <img src={require('../../assets/breakfast/breakfast-Star.png')} alt="breakfast" className='star-one'/>
        <img src={require('../../assets/breakfast/breakfast-Star.png')} alt="breakfast" className='star-two'/>

        <div className='dinner'>
          <h1>Delicious breakfast, lunch and dinner <span>499 AMD</span> <span>660 AMD</span>
  </h1>
    <p> for 3 meals a day</p>
    <button onClick={scrollToOrder}>ORDER NOW</button>
        </div>
      </div>
      <div className='breakfast-two'>
        <div className='large'>
          <img src={require('../../assets/breakfast/1.png')} alt="1" />
          <p>Large hearty portions</p>
        </div>
        <div className='free'>
          <img src={require('../../assets/breakfast/2.png')} alt="1" />
          <p>Free delivery every 2 days</p>
        </div>
        <div className='fresh'>
          <img src={require('../../assets/breakfast/3.png')} alt="1" />
          <p>Fresh products, cooking in Yerevan</p>
        </div>
        <div className='microwave'>
          <img src={require('../../assets/breakfast/4.png')} alt="1" />
          <p>Just need a microwave</p>
        </div>
      </div>
    </div>
  )
}
