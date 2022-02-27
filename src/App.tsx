import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import PageName from "./pages/PageName";
import Characters from "./components/Characters";

const App: React.FC = () => {
  let location = useLocation();

  let state = location.state as { backgroundLocation?: Location };
  return (
    <Routes location={state?.backgroundLocation || location}>
      <Route path="/">
        <Route index element={<PageName />} />
        <Route path="/play" element={<Characters />} />
      </Route>
    </Routes>
  );
};

export default App;
