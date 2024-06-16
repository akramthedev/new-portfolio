import React, { useState, useEffect } from 'react';
import './index.css';
import {FaAngleDoubleRight} from "react-icons/fa";
import A from './a.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const DivOne = () => {

  const [copied, setCopied] = useState(false);
  const currentURL = window.location.href;
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 10000); 
  };

  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible44, setIsVisible44] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isp1, setisp1] = useState(false);
  const [isp2, setisp2] = useState(false);
  const [isp3, setisp3] = useState(false);
  const [isp4, setisp4] = useState(false);
  const [isp5, setisp5] = useState(false);
  const [isp6, setisp6] = useState(false);
  const [isuqduf, setisuqduf] = useState(false);
  const [isV1, setisV1] = useState(false);
  const [isV2, setisV2] = useState(false);
  const [isV3, setisV3] = useState(false);
  const [isV4, setisV4] = useState(false);
  const [isV5, setisV5] = useState(false);
  const [isV6, setisV6] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const element1 = document.getElementById('target-div1');
      const element2 = document.getElementById('target-div2');
      const element3 = document.getElementById('target-div3');
      const element4 = document.getElementById('target-div4');
      const element44 = document.getElementById('target-div44');
      const el1 = document.getElementById('id1');
      const el2 = document.getElementById('id2');
      const el3 = document.getElementById('id3');
      const el4 = document.getElementById('id4');
      const el5 = document.getElementById('id5');
      const el6 = document.getElementById('id6');
      const el7 = document.getElementById('id7');



      if (el7) {
        const bounding = el7.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setisuqduf(true);
        }
      }


      if (el1) {
        const bounding = el1.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setTimeout(()=>{
            setisV1(true);
            window.removeEventListener('scroll', handleScroll); 
          }, 250);
        }
      }
    
      if (el2 && !isV2) {
        const bounding = el2.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setTimeout(()=>{
            setisV2(true);
          window.removeEventListener('scroll', handleScroll); 

          }, 250);
          
        }
         
      }

      if (el3) {
        const bounding = el3.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setTimeout(()=>{
            setisV3(true);
          window.removeEventListener('scroll', handleScroll); 

          }, 250);
          
        }
         
      }


      if (el4) {
        const bounding = el4.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setTimeout(()=>{
            setisV4(true);
          window.removeEventListener('scroll', handleScroll); 

          }, 250);
          
        }
      }

      if (el5) {
        const bounding = el5.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setTimeout(()=>{
            setisV5(true);
          window.removeEventListener('scroll', handleScroll); 

          }, 250);
          
        }
      }

      if (el6) {
        const bounding = el6.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setTimeout(()=>{
            setisV6(true);
          window.removeEventListener('scroll', handleScroll); 

          }, 250);
          
        }
      }



      if (element1 && !isVisible1) {
        const bounding = element1.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setIsVisible1(true);
          window.removeEventListener('scroll', handleScroll); 
        }
      }

      if (element2 && !isVisible2) {
        const bounding = element2.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setIsVisible2(true);
          window.removeEventListener('scroll', handleScroll); 
        }
      }

      if (element3 && !isVisible3) {
        const bounding = element3.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setIsVisible3(true);
          window.removeEventListener('scroll', handleScroll); 
        }
      }

      if (element4 && !isVisible4) {
        const bounding = element4.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setIsVisible4(true);
          window.removeEventListener('scroll', handleScroll); 
        }
      }

      if (element44 && !isVisible44) {
        const bounding = element44.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setIsVisible44(true);
          window.removeEventListener('scroll', handleScroll); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible1, isVisible2, isVisible3, isVisible4,isVisible44,setisuqduf, isV1, isV2,isuqduf, isV3, isV4, isV5, isV6, isVisible]);



  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'Here is something interesting:',
          url: window.location.href,
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.log('Web Share API not supported in your browser.');
    }
  };




  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animated-content');
      const element2 = document.getElementById('p1');
      const element3 = document.getElementById('p2');
      const element4 = document.getElementById('p3');
      const element5 = document.getElementById('p4');
      const element6 = document.getElementById('p5');
      const element7 = document.getElementById('p6');

      if (element) {
        const bounding = element.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }

      if (element2) {
        const bounding = element2.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setisp1(true);
        }
      }

      if (element3) {
        const bounding = element3.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setisp2(true);
        }
      }

      if (element4) {
        const bounding = element4.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setisp3(true);
        }
      }

      if (element5) {
        const bounding = element5.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setisp4(true);
        }
      }

      
      if (element6) {
        const bounding = element6.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setisp5(true);
        }
      }

      if (element7) {
        const bounding = element7.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setisp6(true);
        }
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isp1, isp2, isp3, isp4, isp5, isp6]);





  return (
    <div className='container1'>
      <div  className="container2">
        <p id='target-div1' className={isVisible1 ? "para showPara" : "para"}>
          Greetings!
        </p>
        <p id='target-div2' className={isVisible2 ? "para showPara" : "para"} >
          Hi, I'm Akram El Basri. My passion lies in designing sophisticated applications and delivering engaging user experiences.
        </p>
        <p id='target-div3' className={isVisible3 ? "para showPara" : "para"} >
          Explore my portfolio to discover seamless digital solutions that blend artistry with technical precision.
        </p>
        <span id='expertises' >&nbsp;</span>
      </div>
      
      <br />
      <div  className="Expertise"  >
        <h1 id='target-div4' className={isVisible4 ? "H1 showH1" : "H1" } >
          E X P E R T I S E S 
        </h1>
        <div className="zusfud">
          <div id="id1" className="expItems">
            <span className={isV1 ? "showArrow arrow" : "arrow"} >
              <i className='fa-solid fa-arrow-right'></i>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={isV1 ? "showKK KK" : "KK"} >UI / UX design</span>
          </div>
          <div id="id2" className="expItems">
            <span className={isV2 ? "showArrow arrow" : "arrow"} >
            <i className='fa-solid fa-arrow-right'></i>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={isV2 ? "showKK KK " : "KK"} >Complex MERN Apps</span>
          </div>
          <div id="id3" className="expItems">
            <span className={isV3 ? "showArrow arrow" : "arrow"} >
            <i className='fa-solid fa-arrow-right'></i>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={isV3 ? "showKK KK" : "KK"} >Web & Mobile Apps</span>
          </div>
          <div id="id4" className="expItems">
            <span className={isV4 ? "showArrow arrow" : "arrow"} >
            <i className='fa-solid fa-arrow-right'></i>            
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={isV4 ? "showKK KK" : "KK"} >SEO Tools</span>
          </div>
          <div id="id5" className="expItems">
            <span className={isV5 ? "showArrow arrow" : "arrow"} >
            <i className='fa-solid fa-arrow-right'></i>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={isV5 ? "showKK KK" : "KK"}>Version Controll</span>

            
          </div>
          <div id="id6" className="expItems">
            <span className={isV6 ? "showArrow arrow" : "arrow"} >
            <i className='fa-solid fa-arrow-right'></i>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={isV6 ? "showKK KK" : "KK"} >Responsive Design</span>
          </div>
        </div>
      </div>

      <div className="container" id='projects' >
        <h1 id='target-div44 '  className="H1H1 showH1H1"  >
          P R O J E C T S 
        </h1>
        <br /><br /><br /><br />
        
        
        <div className={`content ${isVisible ? 'visible' : ''}`}>
          <h1 className="title">
            Xplorium
            <span id="animated-content" className='idf' ></span>
          </h1>
          <div className="tags">
            <span className="tag tag1">MERN</span>
            <span className="tag2 tag">Stripe</span>
            <span className="tag3 tag">Eden AI</span>
          </div>
          <div className="image">
            <img src="https://res.cloudinary.com/dqprleeyt/image/upload/v1718504687/Xplorium_t4akuw.png" alt="Example" />
          </div>
          <p className="description">
            A social media plateform with a complex ads system based on interactions with the site content, and other advanced systems.
          </p>
          
          <button 
            className='learnMore'
          >
            Level: Master
          </button>
        </div>


        <div className={`content ${isp1 ? 'visible' : ''}`}>
          <h1 className="title">
            Maven
            <span id="p1" className='idf' ></span>
          </h1>
          <div className="tags">
            <span className="tag tag1">MERN</span>
            <span className="tag2 tag">Stripe</span>
            <span className="tag2 tag">UI/UX</span>
          </div>
          <div className="image">
            <img src="https://res.cloudinary.com/dqprleeyt/image/upload/v1699822430/Screenshot_2023-11-12_21.53.39_vg1tba.png" alt="Example" />
          </div>
          <p className="description">
            A blog platform, you'll not only have a platform to showcase your writing skills but also an opportunity to earn income doing what you love.
          </p>
          
          <button 
            className='learnMore'
          >
            Level: Expert
          </button>
        </div>




        <div className={`content ${isp5 ? 'visible' : ''}`}>
          <h1 className="title">
            CryptoTrack
            <span id="p5" className='idf' ></span>
          </h1>
          <div className="tags">
          <span className="tag tag1">MERN</span>
          <span className="tag tag1">Crypto API</span>
          <span className="tag2 tag">UI/UX</span>
          </div>
          <div className="image">
            <img src="https://res.cloudinary.com/dqprleeyt/image/upload/v1692651636/kaka_v3jjo0.png" alt="Example" />
          </div>
          <p className="description">
            A dynamic crypto-tracking site for real-time updates on prices, trends, and news. 
          </p>
          <button 
            className='learnMore'
          >
            Level: Intermediate
          </button>
        </div>




        <div className={`content ${isp2 ? 'visible' : ''}`}>
          <h1 className="title">
            Chatify
            <span id="p2" className='idf' ></span>
          </h1>
          <div className="tags">
            <span className="tag tag1">MERN</span>
            <span className="tag2 tag">Stripe</span>
            <span className="tag2 tag">UI/UX</span>
          </div>
          <div className="image isqfd">
            <img src="https://res.cloudinary.com/dqprleeyt/image/upload/v1709818847/chat1_sdugsq.png" alt="Example" />
          </div>
          <p className="description">
          An interactive platform with a complex chat system for seamless communication.
          </p>
          
          <button 
            className='learnMore'
          >
            Level: Expert
          </button>
        </div>




        <div className={`content ${isp3 ? 'visible' : ''}`}>
          <h1 className="title">
            Gigster
            <span id="p3" className='idf' ></span>
          </h1>
          <div className="tags">
            <span className="tag tag1">MERN</span>
            <span className="tag2 tag">UI/UX</span>
          </div>
          <div className="image">
            <img src={A} alt="Example" />
          </div>
          <p className="description">
            A project based on Fiverr, this marketplace platform enables users to create or buy gigs.
          </p>
          <button 
            className='learnMore'
          >
            Level: Intermediate
          </button>
        </div>



        <div className={`content contentWMB contentcontent ${isp4 ? 'visible' : ''}`}>
          <h1 className="title">
            WebCraft
            <span id="p4" className='idf' ></span>
          </h1>
          <div className="tags">
            <span className="tag tag1">MERN</span>
            <span className="tag2 tag">UI/UX</span>
          </div>
          <div className="image">
            <img src="https://res.cloudinary.com/dqprleeyt/image/upload/v1692468260/chrome-capture-2023-7-19_4_vjy77b.png" alt="Example" />
          </div>
          <p className="description">
            An agency specialized in web developement projects.
          </p>
          <button 
            className='learnMore'
          >
            Level: Intermediate
          </button>
        </div>

      </div>


      <div id="contact" className="container3">
        <h1>
          As well as numerous other applications.
        </h1>
        <br /><br />
        <h2>
          Did it catch your eye?
        </h2>
        <br />
        <br />

        <CopyToClipboard text={currentURL} onCopy={handleCopy}>
          <button
            
            onClick={handleShare}
            className='shareIt'
          >
            Share it with someone&nbsp;&nbsp;&nbsp;<i className='fa-solid fa-share'></i>
          </button>      
        </CopyToClipboard>


        <br /><br /><br /><br /><br />
      </div>

      <div className="container4">
        <a href="https://www.linkedin.com/in/akram-elbasri" target='_blank' >Linkedin</a>
        <span>seasonedwebdev@gmail.com</span>
      </div>
      <div className="container5">
        ©{getCurrentYear()} – All Rights Reserved
      </div>
      


    </div>
  );
};

export default DivOne;
