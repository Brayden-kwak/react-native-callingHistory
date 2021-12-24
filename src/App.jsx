import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header.jsx";
import Inbox from "./pages/Inbox.jsx";
import Save from "./pages/Save.jsx";
import AllCalls from "./pages/AllCalls.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/save" element={<Save />} />
        <Route path="/allCalls" element={<AllCalls />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route exact path="/" element={<Inbox />} />
      </Routes>
    </div>
  );
};

export default App;
