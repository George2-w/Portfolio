import { memo } from 'react';
import { useState, useRef, useEffect } from 'react';
import { icons } from '../../src/assets/data/svgObj.jsx';
import classNames from 'classnames';
import { Servicestools } from '../assets/data/svgObj.js';
import { Programmingtools } from '../assets/data/svgObj.js';
import { devopstools } from '../assets/data/svgObj.js';
import {Server} from '../../public/Server_racking_system.jsx';
import {Infinity} from '../../public/Infinity_loop.jsx';
import {Laptop} from '../../public/Laptop.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Stage,  } from '@react-three/drei';
import { Suspense } from 'react';
import Bot from '../../public/images/RobotB.jpg'

const Iconcard = () => {
  const [rendered, setrendered] = useState(false);
  const inforef = useRef();
  const refObj = useRef([])
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);

  useEffect(() => {
    setrendered(true);
    console.log(`refObj.current = ${refObj.current}`);
    const canvas = inforef.current;
    if (canvas) {
      const mainwidth = canvas.getBoundingClientRect();
      console.log(`width = ${mainwidth.width}px`);
      console.log(`height = ${mainwidth.height}px`);
      setwidth(mainwidth.width);
      setheight(mainwidth.height);
    }


    // const handleMouseMove = inforef.current
    // handleMouseMove.addEventListener('mousemove', Hovernode);
    // return () => {
    //   handleMouseMove.removeEventListener('mousemove', Hovernode);
    // };


  }, []);

  // Hovernode uses the inforef details stored in refObj to set the transform positional thresholds for each icon based on their size attributes.
  // const Hovernode = (hoverX , hoverY)=>{

  //   refObj.forEach((item)=>{
  //     if(item){
  //     const {xpos, ypos} = item?.initialpositions ?? {};
  //     console.log(`xposobj : ${xpos}px , yposobj : ${ypos}px `);
  //     const {Hoverx , Hovery } = setThreshold(hoverX , hoverY);

  //     item.style.transform = `translate(${xpos + Hoverx}px ,${ypos + Hovery}px)`

  //     }else{
  //       console.log('items not found in refobj array storage');
  //       return null ;
  //     }


  //   })

  // }


  // const setThreshold = (hoverX , hoverY, size)=>{
  //   if (size === 'sm') {
  //     hoverX:hoverX + 0.03
  //     hoverY : hoverY + 0.03
  //   };

  //      if (size === 'md') {
  //     hoverX:hoverX + 0.05
  //     hoverY : hoverY + 0.05
  //   };

  //      if (size === 'lg') {
  //     hoverX:hoverX + 0.01
  //     hoverY : hoverY + 0.01
  //   };

  // }



  const iconlength = icons.length // length of the icons array
  const rows = Math.ceil(Math.sqrt(iconlength)); // number of rows based on square root of length
  console.log(`rows : ${rows}`)
  const cols = Math.ceil(iconlength / rows); // number of columns based on rows
  console.log(`cols:${cols}`)
  console.log(`width : ${width}px`)
  console.log(`height : ${height}px`)
  const cellwidth = width / cols;// width of each cell
  console.log(`cellwidth = ${cellwidth}`)
  const cellheight = height / rows;// height of each cell
  console.log(`cellheight = ${cellheight}`)


  return (
    <div className='icon-div'>

      <section className='TextInfosect'>
        <div className='textDiv absolute top-30 left-8 text-4xl mb-50'>
          <p >  Dealing with data and its state is critical to keeping a website's application lifecycle running smoothly and minimizing mistakes that may arise as a result of incorrect data and state management. Here are the tools I use to ensure that your data is handled properly.</p>
        </div>
        <div className='textDiv absolute top-200 left-8 text-4xl'>
          <p>Designing a webpage to match the modern aesthetic view of a new-age website requires a significant amount of effort, tools, and foundation. I've learned how to use frontend design frameworks like React and Tailwind, as well as 3D environment construction tools like Blender and Three. JS, GSAP, and Figma for 2D animation and prototyping, among other things. This enables a wonderful user experience and the incorporation of affordances and signifier elements to enhance branding.</p>
        </div>
        <div className='textDiv absolute top-350 left-8 text-4xl'>
          <p>The foundational programming languages I use to create a completely functional website are HTML, CSS, and JavaScript. HTML is used to construct the website's structural elements, CSS is used to design it, and JavaScript is used to add functionality.</p>
        </div>

      </section>


      <div>
        <img src={Bot} 
          alt='glass'
          className=' w-full h-500 object-cover brightness-50 opacity-9 z-70 mr-180 '
         />
      </div>
      <div className='iconSpans'>
        <div ref={inforef} className="icon-container  ">
          {rendered && icons.map((icon, index) => {
            console.log(`icon id : ${index} `)
            const row = Math.floor(index / cols);
            const column = Math.floor(index % cols);
            const xpos = column * cellwidth;
            const ypos = row * cellheight;
            console.log(`row : ${row} , column : ${column} `)
            console.log(`xpos : ${xpos}px , ypos : ${ypos}px `)

            return (
              <span key={index} className={classNames('iconcard', icon?.size,)} style={{
                width: cellwidth, height: cellheight,
                position: 'absolute', top: xpos, left: ypos,
              }}

                ref={
                  prevref => {
                    refObj.current[index] = {
                      ...prevref,
                      initialpositions: {
                        xpos,
                        ypos
                      },
                      classNames: classNames('iconcard', icon.size),
                      size: icon.size,
                    }

                  }
                }
              >
                {icon?.icon}
              </span>
            )
          })}

        </div>
      </div>

      <div>
        <div className='Iconcontainer'>
          <div className='justify-center items-center  techmodel'>
            <div className='text-red-600 text-3xl z-50 font-bold absolute top-30 left-250'>
              <div className='container'>
                <div className=' responsivetext'>
                  <Canvas camera={{ position: [1, 1, 50], fov: 120 }}>

                    <Suspense>
                      <ambientLight intensity={0.3} />
                      <directionalLight color={'red'} intensity={2} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                      </directionalLight>
                      <Stage environment="city" intensity={0.6} >
                        <Server />
                      </Stage>
                      <OrbitControls />
                      <Preload all />
                    </Suspense>
                  </Canvas>
                </div>
                <h1>Backend tools</h1>
                <div className=' text-4xl font-bold  z-50  m-5 animate  '>
                  <span className='flex-center gap-10 spantext mt-27'>
                    <div >
                      {devopstools.map((Htext) => (
                        <div key={Htext.text}>
                  
                          <span className=' flex flex-col mt-5 mintext text-blue-600'>{Htext.text}</span>
                        </div>
                      ))}
                    </div>
                  </span>
                </div >
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='justify-center items-center techmodel1  '>
            <div className='text-red-600 text-3xl z-50 font-bold absolute top-100 left-250'>
              <div className='container'>
                <div className=' responsivetext'>
                  <Canvas camera={{ position: [1, 5, 50], fov: 50 }}>

                    <Suspense >
                      <ambientLight intensity={0.3} />
                      <directionalLight color={'red'} intensity={2} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                      </directionalLight>
                      <Stage environment="city" intensity={0.6} >
                        <Infinity />
                      </Stage>
                      <OrbitControls />
                      <Preload all />
                    </Suspense>


                  </Canvas>
                </div>
                <h1>Frontend tools</h1>
                <div className=' text-4xl font-bold  z-50  m-5 animate  '>
                  <span className='flex-center gap-10 spantext mt-27'>
                    <div >
                      {Servicestools.map((Htext) => (
                        <div key={Htext.text}>
                          <span className=' flex flex-col mt-5 mintext text-amber-300 '>{Htext.text}</span>
                        </div>
                      ))}
                    </div>
                  </span>
                </div >
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className='justify-center items-center techmodel2  '>
            <div className='text-red-600 text-3xl z-50 font-bold absolute top-180 left-250'>
              <div className='container'>
                <div className=' responsivetext'>
                  <Canvas camera={{ position: [1, 1, 50], fov: 100 }}>

                    <Suspense >
                      <ambientLight intensity={0.3} />
                      <directionalLight color={'red'} intensity={2} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                      </directionalLight>
                      <Stage environment="city" intensity={0.6} >
                        <Laptop/>
                      </Stage>
                      <OrbitControls />
                      <Preload all />
                    </Suspense>


                  </Canvas>
                </div>
                <h1>Languages</h1>
                <div className=' text-4xl font-bold  z-50  m-5 animate  '>
                  <span className='flex-center gap-10 spantext mt-27'>
                    <div >
                      {Programmingtools.map((Htext) => (
                        <div key={Htext.text}>
                          <span className=' flex flex-col mt-5 mintext text-green-600'>{Htext.text}</span>
                        </div>
                      ))}
                    </div>
                  </span>
                </div >
              </div>
            </div>
          </div>
        </div>

      </div>





    </div>

  );
};

export default memo(Iconcard); 