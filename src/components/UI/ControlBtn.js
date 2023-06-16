import React from "react";

const ControlBtn = (props) => {
  return (
    <button
      className="p-2 rounded-xl font-bold bg-light-200 text-dark-100 dark:bg-dark-200 dark:text-light-100 transition duration-300 hover:bg-dark-200 hover:text-light-100 dark:hover:bg-light-200 dark:hover:text-dark-100"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ControlBtn;
