import "./App.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, ScrollControls, Scroll } from "@react-three/drei";
import "simple-reveal/index.css";

import Three from "./components/Three";
import ThreeImg from "./components/ThreeImg";
export default function App() {
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      basename={process.env.PUBLIC_URL}
    >
      <Suspense fallback={null}>
        <ScrollControls damping={3} pages={4}>
          <Scroll>
            <ThreeImg />
          </Scroll>
          <Scroll html>
            <h1
              style={{
                position: "absolute",
                top: "80vh",
                left: "0.6em",
                fontSize: "150px",
              }}
            >
              MANNERS
            </h1>
            <h1
              style={{
                position: "absolute",
                top: "185vh",
                left: "60vw",
                fontSize: "150px",
              }}
            >
              MAKETH
            </h1>
            <p
              style={{
                position: "absolute",
                top: "344.5vh",
                left: "4.7vw",
                fontSize: "4vw",
                fontWeight: "500",
                fontStyle: "oblique",
                color: "#515151",
                letterSpacing: "-7px",
              }}
            >
              Manners
            </p>
            <p
              style={{
                letterSpacing: "-4px",

                position: "absolute",
                top: "352vh",
                left: "7vw",
                fontSize: "3.7vw",
                fontWeight: "500",
                color: "#515151",
                fontStyle: "oblique",
              }}
            >
              Maketh
            </p>

            <h1
              style={{
                position: "absolute",
                top: "368vh",
                left: "5.4vw",
                fontSize: "6vw",
                fontWeight: "400",
                fontStyle: "oblique",
                color: "#515151",
                letterSpacing: "-9px",
              }}
            >
              SIMMONS
            </h1>
            <Three />
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
}
