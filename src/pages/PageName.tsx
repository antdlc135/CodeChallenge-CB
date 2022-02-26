import React, { Suspense, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Page.css";
import { nobleName } from "../app/appSlice";
import PageName from "./PageName";
import { Html } from "@react-three/drei";
import { enterName } from "../app/appSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export const NamePage: React.FC = () => {
  const selectorName = useAppSelector(nobleName);
  const dispatch = useAppDispatch();
  let Noble!: string;
  const [customName, setCustomName] = useState("Scrivi qui il nome!");
  const nameValue = customName;
  const styleOnName = nameValue
    ? { backgroundColor: "#0d6efd" }
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
              className="btn btn-primary"
              type="button"
              id="button-addon1"
              onClick={() => {
                dispatch(enterName(Noble));
                navigateTo();
              }}
            >
              Assegna nome!
            </button>
          </div>
        </div>
        <Outlet />
      </Html>
    </Suspense>
  );
};

export default NamePage;
