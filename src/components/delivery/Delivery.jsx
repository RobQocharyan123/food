import React, { useEffect, useReducer } from "react";
import { actions } from "../../actions";
import { initialState, reducer } from "../../reducer";
import "./Delivery.css";

export const Delivery = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    
    useEffect(() => {
        const handleWindowResize = () => {
          dispatch({type:actions.WINDOW_SIZE,payload:window.innerWidth})
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
  return (
    <div className="delivery">
      <h1>Delivery Map</h1>
      <div className="mainDelivery">
        <div className="delivery-text">
          <h3>{state.windowSize>656?'Check the delivery price':'Find out the cost of shipping'}</h3>
          <div className="input">
            <p>Enter adress</p>
            <input type="text" placeholder="street,apt" />
          </div>

          <div className="yellow">
            <span></span>{" "}
            <p>
              Free delivery in Yerevan within the concrete ring. We deliver on
              Mondays, Wednesdays and Fridays in any two-hour interval from 6 to
              12.
            </p>
          </div>
          <div className="blue">
            <span></span>{" "}
            <p>In the blue zone, the surcharge is 250 AMD per delivery.</p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195167.66663225048!2d44.32375398661243!3d40.15353600668367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1704917817480!5m2!1sru!2sam"
            width="600"
            height="450"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
