import React from "react";

const Card = (props) => {
  return (
    <div className="py-7 bg-light-200 dark:bg-dark-200 rounded-xl">
      {props.children}
    </div>
  );
};

export default Card;
