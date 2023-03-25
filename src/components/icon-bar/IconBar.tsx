import React from "react";
import "../../Zero.css";
import "../../Shared.css";
import "./IconBar.css";
import { FaCut } from "react-icons/fa";

interface Props {
  componentTitle?: String;
}
const IconBar = ({ componentTitle = "Icon Bar" }: Props) => {
  return (
    <div>
      <h1 className="component-title">{componentTitle}</h1>
      <div className="icon-bar">
        <span>
          <FaCut className="cut" />
        </span>
        <span>
          <FaCut className="cut" />
        </span>
        <span>
          <FaCut className="cut" />
        </span>
      </div>
    </div>
  );
};

export default IconBar;
