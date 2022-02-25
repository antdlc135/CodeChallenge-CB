import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NamePage from "./pages/PageName";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Canvas } from "@react-three/fiber";
import SkyBox from "./components/sanFrancisco";
import Camera from "./components/camera";

ReactDOM.render(
  <Canvas style={{ background: "#171717", height: "100vh" }}>
    <Camera />
    <ambientLight intensity={1} />
    <directionalLight color="red" position={[0, 0, 5]} />
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/*provisional redirect for opening*/}
            <Route path="/homepage" element={<NamePage />} />
            <Route path="/play" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    <SkyBox />
  </Canvas>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
