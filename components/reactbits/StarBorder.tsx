import React from "react";
import "./StarBorder.css";

interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  color?: string;
  speed?: string;
  thickness?: number;
}

const StarBorder = ({
  as: _as = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps) => {
  return (
    <button className={`star-border-container ${className}`} {...rest}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          borderBottom: `${thickness}px solid ${color}`,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          borderTop: `${thickness}px solid ${color}`,
        }}
      />
      <div className="inner-content">{children}</div>
    </button>
  );
};

export default StarBorder;
