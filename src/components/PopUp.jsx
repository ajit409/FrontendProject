import React, { useEffect } from "react";
import "./PopUp.css";

const PopUp = ({ cardSpecificModalData, closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h4 className="close" onClick={closeModal}>
          ❌
        </h4>
        <img
          className="cardImg"
          src={cardSpecificModalData?.thumbnail?.large}
          alt="cardImg"
        />
        <div className="card-details">
          <h1 className="card-title">{cardSpecificModalData.title}</h1>
          <p className="card-content">{cardSpecificModalData.content}</p>
          <div className="smallContainer">
            <img
              src={cardSpecificModalData?.author?.avatar}
              alt="avatar"
              className="avatar"
            />
            <p className="authorName">{`${cardSpecificModalData?.author.name} - ${cardSpecificModalData.author.role}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
