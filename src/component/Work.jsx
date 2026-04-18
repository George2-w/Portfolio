import React, { Component } from 'react';
import { memo } from 'react';
import brand from '../../public/images/brandweb.png';
import wine from '../../public/images/wine.png';
import gArrow from '../../public/images/g-Arrow.png';
import cArrow from '../../public/images/c-Arrow.png';
import wArrow from '../../public/images/w-Arrow.png';
import bArrow from '../../public/images/b-Arrow.png';


const Work = () => {
  return (
    <div>
      <div className='flex flex-col  md:flex-col gap-30 displaysect'>
      <section className="work-section-left section work-section- flex flex-col" >
        {/* Your work left section content */}
        <div className='wrapper flex flex-row gap-20'>
        <div className='img box a  visual workrightimg mt-15 card'>
          <div className='example-3 inner'>
              <img className='imgs' src={brand} alt="Brand" />
          </div>
      

       </div>
       <div className='content'>
          <div className=' Left-content-sect meta mt-110 gap-20'>
             <h3 className='title'>Build a Brand That Converts. Digitally Perfected</h3>
            <p>build responsive, high-conversion brands using the latest React framework to ensure your first impression is a lasting one. Let’s turn your vision into a high-quality digital experience. Click below to learn more. <a href=""><img src={cArrow} alt="" /></a></p>

       </div>
       <a href="">
        <svg>

        </svg>
       </a>
       </div>
        </div>
       
      </section>

      <section className="work-section-right section work-section flex flex-col">
        {/* Your work right section content */} 
        <div  className='wrapper flex flex-row gap-20'>
            <div  className='img box a  visual workleftimg  mt-15 card' > 
              <div className='example-3 inner'>
                 <img className='imgs' src={wine} alt="Wine" />
              </div>
             
            </div>
        <div className='content'>
             <div className=' Right-content-sect meta mt-110 gap-20'>
            <h3> Your Private wine Cellar, Digitally Perfected</h3>
            <p className='desc'>The ultimate digital liquor cabinet. We’ve stripped away the noise to provide a clean, Tailwind-styled interface that focuses on what matters: premium quality and effortless ordering. Your favorite labels are just a tap away.  Click below to learn more. <a href=""><img src={cArrow} alt="" /></a></p>
       </div>
       <a href="">
        <svg>

        </svg>
       </a>
        </div>
        </div>
      
      
      </section>
      </div>

  
    </div>
  );
};

export default memo(Work);

