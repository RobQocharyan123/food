import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducer";
import "./Header.css";
import { initialState } from './../../reducer';
import { actions } from './../../actions';
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const Header = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openBurger = ()=>{
    dispatch({type:actions.OPEN_BURGER,payload:true})
  }

  const closeBurger = ()=>{
    dispatch({type:actions.CLOSE_BURGER,payload:false})
  }


  useEffect(() => {
    const handleWindowResize = () => {
      dispatch({type:actions.WINDOW_SIZE,payload:window.innerWidth})
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  

  const scrollToOrder =()=>{
    window.scrollTo(0, 250)
  }

  if(state.windowSize>=684){
    state.burger = true
  }
  return (
    <div className="header">
      <div className="header-one">
        <img src={require("../../assets/header/logo.png")} alt="Logo" />
      </div>
      <div className="header-two">
        <div className="button-order">
          <Link to={'/breakfast'} className="order" onClick={scrollToOrder}>ORDER</Link>
        </div>
        <div className="header-nav">
          <div className="img-burger" onClick={openBurger}>
            <img src={require("../../assets/header/burger.png")} alt="burger" />
          </div>
          {state.burger && 
          <nav>
            <IoMdClose  onClick ={closeBurger}/>

          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li className="phone-number">
              <div className="phone">
                <div className="heraxos">
                  <div className="phone-btn">
                    <img
                      src={require("../../assets/header/phone.png")}
                      alt=""
                    />
                  </div>
                  <span>+374 (77) 77-77-77</span>
                </div>

                <a href="tel:PHONE">Call me</a>
              </div>
            </li>
          </ul>
        </nav>
          }
          
        </div>
      </div>
    </div>
  );
};
