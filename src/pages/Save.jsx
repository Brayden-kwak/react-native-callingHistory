import React, { useState, useEffect } from "react";
import "../css/save.css";
import { IoIosMore } from "react-icons/io";
import listData from "../data.json";
import {
  RiUserShared2Line,
  RiDeleteBinLine,
  RiDownloadLine,
} from "react-icons/ri";

const Save = () => {
  const [list, setList] = useState(listData.data);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setList(list);
  }, [list]);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const onRemove = (id) => {
    setList(list.filter((user) => user.id !== id));
    console.log("delete");
  };

  return (
    <div className="contact-container">
      <div className="save-container">
        <p className="save-title">Saved Contact Numbers</p>
      </div>
      {list && list.length > 0
        ? list.map((data, index) => (
            <div className="sub-container">
              <RiDownloadLine color={"gray"} size={22} />
              <div className="list-two">
                <p className="p-1">{data.number}</p>
                <p className="p-2">{data.message}</p>
              </div>
              <p className="list-three">{data.date}</p>

              <div
                className="collapse1"
                onClick={() => toggle(index)}
                key={index}
              >
                {clicked === index ? (
                  <IoIosMore color={"white"} size={22} className="btn" />
                ) : (
                  <IoIosMore color={"white"} size={22} className="btn" />
                )}
              </div>
              {clicked === index ? (
                <div className="dropDown">
                  <div className="drop1">
                    <span>{data.time}</span>
                    <p>Call time</p>
                  </div>

                  <div className="drop3">
                    <span>
                      <RiUserShared2Line size={23} />
                    </span>
                    <p>Share</p>
                  </div>
                  <div className="drop4" onClick={() => onRemove(data.id)}>
                    <span>
                      <RiDeleteBinLine size={23} />
                    </span>
                    <p>Delete</p>
                  </div>
                </div>
              ) : null}
            </div>
          ))
        : ""}
    </div>
  );
};

export default Save;
