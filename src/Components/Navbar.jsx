import React, { useEffect, useState } from 'react';
import './index.css';
import Logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  const [showElipsisPopUp, setshowElipsisPopUp] = useState(false);
  const [ShowBlackBitch,setShowBlackBitch] = useState(false);
  const phrase = "kram"; 

  const fct1 = () => {
    setTimeout(() => {
      setShow(true);
    }, 1830);
  };

  useEffect(() => {
    fct1();
  }, []);

  useEffect(() => {
    if (show) {
      const typingDelayTimer = setTimeout(() => {
        setIsTyping(true);  
      }, 1000);  

      return () => clearTimeout(typingDelayTimer);
    }
  }, [show]);

  useEffect(() => {
    if (isTyping) {
      const handleTyping = () => {
        const currentTextLength = currentText.length;

        if (currentTextLength < phrase.length) {
          setCurrentText(phrase.substring(0, currentTextLength + 1));
        }
      };

      const typingTimer = setTimeout(handleTyping, 80);
      return () => clearTimeout(typingTimer);
    }
  }, [currentText, isTyping]);

  return (
    <>
    <div className={ShowBlackBitch ? "ShowBlackBitch blackBitch"  : "blackBitch"} />

    <div className={showElipsisPopUp ? "ShowBlackBitch blackBitch"  : "blackBitch"}>
      <div className="navbar">
      {
        showElipsisPopUp && 
        <button  
          onClick={()=>{
            setshowElipsisPopUp(false);
          }}
          className="sud showsud">
          <i className="fa-solid fa-xmark"></i>
        </button>
      }
      </div>
      <div className="containerLink">
        <a  onClick={()=>{
          setshowElipsisPopUp(false);
        }} href="#about">
        <h1>
          About Me
        </h1>
        </a>
        <a onClick={()=>{
          setshowElipsisPopUp(false);
        }} href="#expertises">
        <h1>
          Expertises
        </h1>
        </a>
        <a onClick={()=>{
          setshowElipsisPopUp(false);
        }} href="#projects">
        <h1>
          Projects
        </h1>
        </a>
        <a onClick={()=>{
          setshowElipsisPopUp(false);
        }} href="#contact">
        <h1>
          Contact
        </h1>
        </a>
      </div>
    </div>


    <div className='navbar'>
      <img
        onClick={() => {
          setShowBlackBitch(true);
          setTimeout(()=>{
            window.scrollTo({ top: 0 }); 
            window.scrollY = 0;
          }, 350);
          setTimeout(()=>{
            navigate(0);
          }, 500);
        }}
        className={show ? 'showImgLogoNav' : ''}
        src={Logo}
        alt=""
      />
      <div 
      onClick={() => {
        setShowBlackBitch(true);
        setTimeout(()=>{
          window.scrollTo({ top: 0 }); 
          window.scrollY = 0;
        }, 350);
        setTimeout(()=>{
          navigate(0);
        }, 500);
      }}
      
      className="spanName">
        {currentText}
      </div>
      
      
    </div>
    </>
  );
}

export default Navbar;

