import React from 'react';
import './Footer.css';
import { FaTelegram } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa6';
import { FaCcMastercard } from 'react-icons/fa6';
import { GiDramaMasks } from 'react-icons/gi';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="ready">
          <div className="ready-first">
            <div className="offer">
              <ul>
                <li>Ready meals with delivery</li>
                <li>Offer contract</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="from">
              <ul>
                <li>+ 374 (77) 77-77-77</li>
                <li>from 9:00 to 21:00</li>
                <li>test@test.com</li>
              </ul>
            </div>
          </div>
          <div className="ready-second">
            <a href="https://web.telegram.org/k/">
              <FaTelegram />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagramSquare />
            </a>
            <a href="https://www.tiktok.com/foryou">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="visa">
          <div className="logo">
            <img src={require('../../assets/header/logo.png')} alt="" />
          </div>
          <div className="cards">
            <a href="https://cis.visa.com/pay-with-visa/find-a-card/debit-cards.html">
              <FaCcVisa />
            </a>
            <a href="https://www.mastercard.ru/ru-ru.html">
              <FaCcMastercard />
            </a>
            <a href="https://www.idram.am/">
              <GiDramaMasks />
            </a>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <span>“Test" LLC</span>
        <span>097-77-77-77 </span>
        <span>0001, Yerevan, street adress 1/1</span>
      </div>
    </>
  );
};
