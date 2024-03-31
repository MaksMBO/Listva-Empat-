import React from "react";

import "components/Landing/ResponseItem/responseItem.scss";

export default function ResponseItem({ img, text, username }) {
  const textWithLineBreaks = text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="response-item">
      <p className="response-item__text">{textWithLineBreaks}</p>
      <div className="response-item__img">
        <img
          className="response-item__avatar"
          src={img}
          draggable="false"
          alt="User avatar"
        />
      </div>
      <p className="response-item__username">{username}</p>
    </div>
  );
}
