"use client";

import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import * as THREE from "three";

export default function ModelViewer() {
  const containerRef = useRef(null);
  const modelRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene & Camera Setup
    const scene = new THREE.Scene();
    const aspectRatio = containerRef.current.clientWidth / containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000);

    // Adjust camera zoom for different screen sizes
    const setCameraPosition = () => {
      if (window.innerWidth < 768) {
        camera.position.set(0, 1, 14); // Zoomed out for mobile
      } else {
        camera.position.set(0, 1, 10); // Default for larger screens
      }
    };

    setCameraPosition();
    
    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // **Use PMREMGenerator for Efficient HDRI Mapping**
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Load Environment Map (HDRI)
    new RGBELoader().load("/textures/world.hdr", (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;
      scene.background = null; // Keep background transparent
      texture.dispose();
      pmremGenerator.dispose();
    });

    // Load GLB Model
    const loader = new GLTFLoader();
    loader.load("/models/alchemy_text.glb", (gltf) => {
      modelRef.current = gltf.scene;
      modelRef.current.scale.set(2, 2, 2); // Make text larger
      scene.add(modelRef.current);
    });

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 2, 5);
    scene.add(directionalLight);

    // Mouse Move Rotation Logic (Subtle Tilt)
    const handleMouseMove = (event) => {
      if (!modelRef.current) return;
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const rotationX = ((clientY / innerHeight) - 0.5) * Math.PI * 0.03; // Less tilt
      const rotationY = ((clientX / innerWidth) - 0.5) * Math.PI * 0.07; // Subtle movement

      modelRef.current.rotation.x = rotationX;
      modelRef.current.rotation.y = rotationY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCameraPosition);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCameraPosition);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[50vh] cursor-move" />;
}
