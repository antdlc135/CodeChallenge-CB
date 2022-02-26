import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Canvas } from "@react-three/fiber";
import Camera from "./components/camera";
import Scene from "./components/Scene";

ReactDOM.render(
  <Canvas style={{ background: "#171717", height: "100vh" }}>
    <Camera />
    <ambientLight intensity={1} />
    <directionalLight color="red" position={[0, 0, 5]} />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <Scene />
  </Canvas>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
