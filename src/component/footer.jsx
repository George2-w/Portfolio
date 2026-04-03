import { memo } from 'react';
import Footerimg from '../../public/images/Footer1.jpg'
// import Footer2 from '../../public/images/Footer2.jpg'
// import Footer3 from '../../public/images/Footer3.jpg'
import { useState , useEffect  } from 'react';
import Form from './form';


function Clientlogic(e){
    e.preventDefault();
    const target = document.getElementById('uclient');
    if(target){
        const offset = window.innerHeight * 0.75;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return target;
}
function Servicelogic(e){
    e.preventDefault();
    const target = document.getElementById('uclient');
    if(target){
        const offset = window.innerHeight * 0.001;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return target;
}
function IconLogic(e){
    e.preventDefault();
    const icontag = document.getElementById('uclient');
    if(icontag){
        const offset = window.innerHeight * -1.15;
        const top = icontag.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return icontag;
}

const Footer = () => {
   

  
  return (
    <div className='relative '>
      <div className='footerIMG'>
        <img src={Footerimg} alt="footerImage" />
      </div>
      <div className='footer opacity-3 ' />
      <div className='absolute top-3.5 left-3.5 footer-containers'>
        <h1>Ready to grow your business? We'll be there for you every step of the way. Contact us today and take a bold step.</h1>
        <div>
          <Form/>
        </div>
   
          <div className='absolute top-90 left-40   w-1/4 h-186  z-15  text-5xl font-bold text-black opacity-27  '>
                    <ul className='ulheadersect cursor-pointer' id='ulheadersect'>
                        <li><a onClick={Clientlogic} >ABOUT</a></li>
                        <li><a onClick={Servicelogic}>WORK</a></li>
                        <li><a onClick={IconLogic} >TECHNOLOGIES</a></li>
                        <li><a href="">CONTACT</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">PRIVACY POLICY</a></li>
                    </ul>

                </div>
      </div>
      <div className='absolute top-70 left-20 footer-container '>
        <section className='footer-Left'>
          <div className=''>
          </div>
        </section>
        <section className='footer-Right'>

        </section>
      </div>

    </div>
  );
};

export default memo(Footer);