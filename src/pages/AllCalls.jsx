import React, { useState, useEffect } from "react";
import "../css/contact.css";
import { IoIosMore } from "react-icons/io";
import Moment from "moment";

import { RiDeleteBinLine, RiPhoneLine } from "react-icons/ri";
import { BiPhoneIncoming } from "react-icons/bi";
import { GoPlus } from "react-icons/go";

const Inbox = () => {
  const [list, setList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [save, setSaved] = useState([]);

  useEffect(() => {
    fetch(`https://aircall-job.herokuapp.com/activities`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

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

  const onSave = (id) => {
    setList(list.filter((user) => user.id !== id));

    const lists = { list, save };
    fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(lists),
    }).then(() => {
      setSaved(id);
      console.log("new lists added!");
    });
  };

  return (
    <div className="contact-container">
      <div className="call-container">
        <p className="call-title">Inbox</p>
      </div>

      {list && list.length > 0
        ? list.map((data, index) => (
            <div className="sub-container">
              {data.call_type === "missed" ? (
                <BiPhoneIncoming color={"gray"} size={22} />
              ) : (
                <RiPhoneLine color={"gray"} size={22} />
              )}
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
                    <span>{data.via}</span>
                    <p>Via</p>
                  </div>

                  <div
                    className="drop2"
                    data={data}
                    id={data.id}
                    onClick={() => onSave(data.id)}
                  >
                    <span>
                      <GoPlus size={23} />
                    </span>
                    <p>Save</p>
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

export default Inbox;
