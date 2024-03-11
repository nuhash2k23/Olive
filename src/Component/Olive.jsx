
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export function Model(props) {
  const { nodes, materials } = useGLTF("/Final.glb");
  const group = useRef();
  // const light = useRef();
  const tl = useRef();
  const camera = useRef();
  const scroll = useScroll();
  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration())

  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 120, ease: 'power3.inOut' } });

    tl.current
      // Rotate the group
      // .to(camera.current.position, { x: -0.048, y: 9.28, z: 1.017 }, ">")
      // .to(camera.current.rotation, { x: -1.446, y: -0.024, z: -0.012 }, ">")
    
      // // Second camera position and rotation
      // .to(camera.current.position, { x: -6.582, y: 3.495, z: 11.129 }, ">")
      // .to(camera.current.rotation, { x: -0.111, y: -0.393, z: -0.052 }, ">")
    
      // // Third camera position and rotation
     
      .to(group.current.rotation, { x: -Math.PI/2, y: 0, z: -Math.PI/8,ease: "back.out", delay: 0.5}, ">")
      .to(group.current.position, { x: 1.37, y: 2.7, z: 1.47 }, ">")
      .to(group.current.position, { x: 1.37, y: 0.7, z: 1.47, ease: "back.out", delay: 0.5 }, ">")
      .to(group.current.position, { x: -2.17, y: 1.1, z: 1, ease: "back.inOut", delay: 0.5 }, ">")
      .to(group.current.scale, { x: 0.53, y: 0.53, z: 0.53, ease: "back.out(1, 0.3)", delay: 0.5 }, ">")
      .to(group.current.rotation, {
        x: -Math.PI/1.6,
        y: 1.505,
        z: 0.75,
        duration: 120, // Increase the duration to slow down the animation (e.g., 2 seconds)
        ease: "power2.inOut", // Keep the easing function as power2.inOut or change it to another easing function for different effects
        delay: 0.5 // Delay before this animation starts
      })
      .to(group.current.scale, { x: 0.42, y: 0.42, z: 0.42, ease: "sine.out", delay: 0.5 }, ">")
      // .to(camera.current.position, { x: 3.005, y: 2.534, z: -0.399 }, ">")
      // .to(camera.current.rotation, { x: 0, y: 0, z: 0.2}, ">");



      // fov={15.895}
      // position={[-0.37, 5.046, 0.673]}
      // rotation={[-Math.PI / 2, 0, 0]}
      // Scale down the group
      // .to(camera.current.current.position,{z:-0.048,y:9.28,x:1.017},6)
      // .to(camera.current.current.rotation,{z:-1.446,y:-0.024,x:-0.012},6)
      // .to(camera.current.current.position,{z:-6.582,y:3.495,x:11.129},12)
      // .to(camera.current.rotation,{z:-0.111,y:-0.393,x:-0.052},12)
      // .to(camera.current.position,{z:-0.005,y:4.534,x:4.399},18)
      // .to(camera.current.rotation,{z:-0.465,y:-0.0261,x:-0.018},18)

      // .to(group.current.scale, { x: .81, y: .81, x: .81 }, 6) // "<" means relative to the previous animation
      // .to(group.current.rotation, { x:0.096 , y: -0.723, x: 0 }, 6) // "<" means relative to the previous animation
  // 
      // Change position
      // .to(group.current.position, { x: 0, y: 0, x: 0.51 }, "<") // "<" means relative to the previous animation
      // .to(light.current.position, { x: -1.957, y: -2, z: 4 }, "<") // "<" means relative to the previous animation
  
    // Reverse the timeline to play animations from end to start

    // .to(group.current.scale, { z: 3.5, y: 3.5, z: 3.5 }) 
    // .to(group.current.position, { x: -1.3, y: -1.86, z: 0 })
    // .to(group.current.rotation, { x: 0, y: Math.PI * 2 , z: -0.23 })
    // tl.current
   
  }, []);
  
  
  return (
    <group {...props} dispose={null}>
    <spotLight
      intensity={20}
      angle={0.618}
      penumbra={0.15}
      decay={2}
      position={[0.788, 6.299, -0.93]}
      rotation={[-1.899, 0.01, 0.002]}
      scale={[0.67, 0.4, 0.61]}
    />
    <PerspectiveCamera
      makeDefault={true}
      far={100}
      near={0.1}
      fov={22.895}
      ref={camera}
      position={[-0.048, 9.28, 1.017]}
      rotation={[-1.446, -0.024, -0.012]}
    />
    <spotLight
      intensity={20}
      angle={0.618}
      penumbra={0.15}
      decay={2}
      position={[-0.577, 7.825, 2.365]}
      rotation={[-1.282, -0.208, 0.024]}
      scale={[0.67, 0.4, 0.61]}
    />
    <group ref={group}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.bottle_glass003_0.geometry}
      material={materials["glass.003"]}
      rotation={[0.096, 0.04, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder001_Material006_0.geometry}
      material={materials["Material.006"]}
      rotation={[0.096, -0.723, 0]}
      scale={1.012}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.uo_plastic002_0.geometry}
      material={materials["plastic.002"]}
      rotation={[0.096, -0.723, 0]}
    />
  </group>
  </group>
  );
}

useGLTF.preload("/untitled.glb");


