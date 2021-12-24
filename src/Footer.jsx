import React from "react";
import {
  AiOutlineFileSearch,
  AiOutlineHistory,
  AiFillAppstore,
  AiOutlineContacts,
} from "react-icons/ai";
import { Link, Routes, Route } from "react-router-dom";
import Save from "./pages/Save.jsx";
import Inbox from "./pages/Inbox.jsx";
import AllCalls from "./pages/AllCalls.jsx";

const Footer = () => {
  return (
    <footer>
      <Routes>
        <Route path="/save" component={Save} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/allCalls" component={AllCalls} />
        <Route path="/" exact component={Inbox} />
      </Routes>
      <Link to="/save">
        <AiOutlineFileSearch className="item1" color={"gray"} size={28} />
      </Link>
      <Link to="/inbox">
        <AiOutlineHistory className="item2" color={"gray"} size={28} />
      </Link>
      <AiFillAppstore className="item3" color={"gray"} size={28} />
      <AiOutlineContacts className="item4" color={"gray"} size={28} />
    </footer>
  );
};

export default Footer;
