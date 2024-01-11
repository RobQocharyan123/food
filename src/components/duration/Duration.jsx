import React from 'react';
import "./Duration.css"
import { useReducer } from 'react';
import { initialState, reducer } from '../../reducer';
import { useEffect } from 'react';
import { actions } from '../../actions';
import { useState } from 'react';

export const Duration = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [pair,setPair] = useState("")
    const pairMoneyClick = ()=>{
        alert(`Youre tellephone Number ${pair} You should pair 12989 AMD`)
    }

    useEffect(() => {
        const handleWindowResize = () => {
          dispatch({type:actions.WINDOW_SIZE,payload:window.innerWidth})
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, [state.windowSize]);
  return (
    <div className='duration'>
        <h1>Duration</h1>
        <div className='buttons'>
            <button>test order</button><button>2 weeks</button>
            <div className="percents">
            <button>month</button>
             <div className='percent1'>-26%</div>
             <div className='percent2'>-43%</div>
            </div>

            {state.windowSize<569 && 
            <>
            <div className='freez'>
                <p>You can
freeze
subscription
without losing money</p>
            </div>

          

            <img src={require('../../assets/duration/duration-freeze.png')} alt=""  className='imgFreeze'/>

            </>
            }
        </div>
        <div className="recept">
            <div className='sale'>
                <ul>
                    <li>36 meals, 12 days</li>
                    <li>Sale <img src={require('../../assets/duration/duration.png')} alt="" /></li>
                    <li>Delivery<img src={require('../../assets/duration/duration.png')} alt="" /></li>
                </ul>
            </div>
            <div className='amd'>
            <ul>
                    <li>660 AMD for day</li>
                    <li>-2 040 AMD</li>
                    <li>0 AMD</li>
                </ul>
            </div>
        </div>

        <div className="phoneNumber">
            <h3>Your telephone number:</h3>
            <input type="tel" placeholder='+374' onChange={(e)=>setPair(e.target.value)} />
            <p>to clarify details of the order</p>
        </div>

        <button className='orderr' onClick={pairMoneyClick}><span>ORDER</span> <span>12 989 AMD</span></button>
    </div>
  )
}
