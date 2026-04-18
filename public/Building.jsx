
// import React from 'react'
// import { useGLTF } from '@react-three/drei'
// import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';

// export default function Building(props) {
//   const { nodes, materials } = useGLTF('/building.gltf')
//   const modelref = useRef(null);
//   useFrame((state)=>{//animation loop
//     if(modelref.current){
//       modelref.current.rotation.y +=0.01;//rotate the model
      
//     }
//   })
//   return (
//     <group {...props} dispose={null}>
//       <group position={[16.966, 45.354, -11.764]} scale={[7.511, 2.114, 4.407]} ref={modelref}  Scale = {window.innerWidth < 600 ? 0.005 : 0.01}>
//         <mesh geometry={nodes.Object_4.geometry} material={materials.material} />
//         <mesh geometry={nodes.Object_5.geometry} material={materials.metal} />
//         <mesh geometry={nodes.Object_6.geometry} material={materials.base_color} />
//         <mesh geometry={nodes.Object_7.geometry} material={materials.LOW_light} />
//         <mesh geometry={nodes.Object_8.geometry} material={materials.tiled} />
//         <mesh geometry={nodes.Object_9.geometry} material={materials.pave2} />
//         <mesh geometry={nodes.Object_10.geometry} material={materials.inner_walls} />
//         <mesh geometry={nodes.Object_11.geometry} material={materials.lights} />
//         <mesh geometry={nodes.Object_12.geometry} material={materials.floor} />
//         <mesh geometry={nodes.Object_13.geometry} material={materials.concreate} />
//         <mesh geometry={nodes.Object_14.geometry} material={materials.METAL_GREEN} />
//         <mesh geometry={nodes.Object_15.geometry} material={materials.pave} />
//         <mesh geometry={nodes.Object_16.geometry} material={materials.cyclinder} />
//         <mesh geometry={nodes.Object_17.geometry} material={materials.cyclinder} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/building.gltf')
