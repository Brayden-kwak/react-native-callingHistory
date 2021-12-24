import React, { useState, useEffect } from "react";
import "../css/save.css";
import { IoIosMore } from "react-icons/io";
import Moment from "moment";
import axios from "axios";
import {
  RiDeleteBinLine,
  RiDownloadLine,
} from "react-icons/ri";
import { useLocation } from "react-router-dom";

const Save = () => {
  const [list, setList] = useState([]);
  const [clicked, setClicked] = useState(false);

  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");

  useEffect(() => {
    const fetch = async() => {
        try{
            const getId = axios.get(`https://aircall-job.herokuapp.com/activities/${id}`);
            const response = await axios.all([getId]);
            setList(response[0].data);
        } catch(err) {
            console.log(err);
        }
    };
    fetch();
  },[]);

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
                <p className="p-1">{data.from}</p>
                <p className="p-2">{data.to}</p>
              </div>
              <p className="list-three">
                {Moment(data.created_at).format("YYYY.MM.DD")}
              </p>

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
                    <span>{data.duration}</span>
                    <p>Call time</p>
                  </div>

                  <div className="drop3">
                    <span>
                        <span>{data.via}</span>
                        <p>Via</p>
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
