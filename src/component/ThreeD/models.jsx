// import {React, useMemo, useEffect, useState , useRef, Suspense } from 'react';
// import {Canvas, createRoot, events,extend, useLoader,useFrame, useThree} from '@react-three/fiber'
// import { useTexture, OrbitControls } from '@react-three/drei';
// import { XR, createXRStore, } from '@react-three/xr'
// extend({OrbitControls, useTexture})
// import {useErrorBoundary} from 'react-use-error-boundary'


// export default function Model (){
//    const { ErrorBoundary, didCatch, error } = useErrorBoundary()



//   return didCatch ? (
//     <div>{error.message}</div>
//   ) :(
//     <div>
//        <button onClick={() => store.enterAR()}></button>
//       <Canvas>
//       <XR store={store}>
//        <Suspense fallback={null}>
//         <Modelapp/>
//        </Suspense>
//       </XR>
    
//     </Canvas>
//     </div>
    
    
//   )
// }
// const store = createXRStore()
    
//     function Modelapp(){ // the main function to export the 3d model
//     const myRef = useRef(null);// reference to the 3d model
//      useFrame((state)=>{//animation loop
//       const {gl , setDpr, performance, setSize, setFrameloop,xr, camera, scene} = state;//destructuring the state object

//         // setFrameloop('always')
//         // setSize.width = window.innerWidth;
//         // setSize.height = window.innerHeight;
//         // xr.connect = true;
//         // camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000 )
//         // camera.layers.enable(1)
//         // scene = new THREE.Scene


//       if (performance.current < 1) {//adjust the dpr based on performance
//         setDpr(1)
//       } else {
//         setDpr(window.devicePixelRatio)
//       }
//      })
//      if (!myRef.current) {
//       return null;
      
//      }//return null if the reference is not set yet
//      myRef.current.rotation.y +=0.03;//rotate the model
//      myRef.current.rotation.x +=0.01;//rotate the model
//      myRef.current.xr.connect = true;//enable xr on the model
//      const Texture = Addtexture('public/texture/sun_temple_stripe_stereo.jpg', 12)//add texture to the model

     
//     return (
//         <mesh ref={myRef}>
//           <boxGeometry args={[100,100,100]} scale={[1,1,-1]} />
//           <meshStandardMaterial color={'green'} map={Texture}/>
          
//         </mesh>
      
//     );
//      }



//   function Addtexture(imagetexture, imagesplit) {
//       const texture = useTexture(imagetexture)
//       //configure the offset and repeate property of the texture
//       //cloning the texture property

//       const clonedTexture = texture.clone()
   
//       const texturesplits = imagesplit;
//       const Xaxis = 12;
//       const yaxis = 1;
//       const materialtexture = useMemo(()=>{
//         const canvas = document.getElementById('myCanvas') || document.createElement('canvas');
//         const context = canvas.getContext('2d')

//         canvas.width = clonedTexture.width
//         canvas.height = clonedTexture.height

//         context.drawImage(clonedTexture,0,0)
//         const newtexture = new THREE.CanvasTexture(canvas);

//         {Array.from({length : texturesplits}).map((i)=>{

//         //set the repeate and offset property
//         newtexture[i].offset.setX(1/texturesplits)
//         newtexture[i].offset.setY(1)
//         newtexture[i].repeat.setX(1/texturesplits);
//         newtexture[i].clonedTexture.repeat.setY(1)
        

//         return (
//         <mesh>
//           <boxGeometry args={[100,100,100]} scale={[1,1,-1]} />
//           <meshStandardMaterial color={'green'} map={texture}/>
//         </mesh>
//         )
//       })}})}
  