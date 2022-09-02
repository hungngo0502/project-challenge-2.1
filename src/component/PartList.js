import React from "react";

const PartList = ({ path, total, setSelection, top = "50%" }) => {
  let parts = [];
  for (let index = 1; index < total; index++) {
    parts.push(
      <div
        key={path + index}
        className="square"
        onClick={() => setSelection(index)}
      >
        <img
          height={60}
          style={{ top }}
          alt=""
          src={`character/${path}/${index}.png`}
          className="img-center"
        />
      </div>
    );
  }

  return <div className="list">{parts}</div>;
};

export default PartList;
