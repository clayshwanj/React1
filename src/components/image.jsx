import React from "react";

const Image = (props) => (
  <img src={props.image} alt={props.name} style={{ maxWidth: "150px" }} />
);

export default Image;
