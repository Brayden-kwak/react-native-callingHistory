import React from "react";
import "../css/toggle.css";
import { Link } from "react-router-dom";

const HeaderToggle = ({ toggled, onClick }) => {
  return (
    <div onClick={onClick} className={`toggle ${toggled ? "calls" : "inbox"}`}>
      <div className="allCalls" />
      <div className="callBox">
        <Link to="/allCalls">
          <p className="calls">All calls</p>
        </Link>
        <Link to="/inbox">
          <p className="inbox">inbox</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderToggle;
