import React from "react";
import Type from "../../../Icons/Type.png";
import "./buttonFilter.scss";

const ButtonFilter = ({ onClick }) => (
  <button className="button-filter" onClick={onClick}>
    <img className="button-filter-image" src={Type} alt="type" />
  </button>
);

export default ButtonFilter;
