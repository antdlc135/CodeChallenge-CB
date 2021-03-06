import React, { Suspense, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Page.css";
import PageName from "./PageName";
import { Html } from "@react-three/drei";
import { enterName } from "../app/appSlice";
import { useAppDispatch } from "../app/hooks";

export const NamePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [customName, setCustomName] = useState("Enter name here!");
  const nameValue = customName;
  const styleOnName = nameValue
    ? { backgroundColor: "black" }
    : { backgroundColor: "transparent" };

  const navigateToPlay = useNavigate();
  const navigateTo = () => {
    navigateToPlay("/play");
  };
  return (
    <Suspense fallback={() => <PageName />}>
      <Html
        style={{
          width: 500,
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p>
          <span className="value name" style={styleOnName}>
            {nameValue}
          </span>
        </p>
        <div className="textarea">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              onChange={(e) => {
                setCustomName(e.target.value);
              }}
            />
            <button
              className="btn "
              style={{ backgroundColor: "black", color: "white" }}
              type="button"
              id="button-addon1"
              onClick={() => {
                dispatch(enterName(nameValue));
                navigateTo();
              }}
            >
              Assign name!
            </button>
          </div>
        </div>
        <Outlet />
      </Html>
    </Suspense>
  );
};

export default NamePage;
