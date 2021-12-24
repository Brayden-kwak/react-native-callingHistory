import React from "react";
import { AiOutlineHistory, AiFillAppstore } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { MdSaveAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/save">
        <MdSaveAlt className="item1" color={"gray"} size={28} />
      </Link>
      <Link to="/inbox">
        <AiOutlineHistory className="item2" color={"gray"} size={28} />
      </Link>
      <AiFillAppstore className="item3" color={"gray"} size={28} />
      <BsPeopleFill className="item4" color={"gray"} size={27} />
    </footer>
  );
};

export default Footer;
