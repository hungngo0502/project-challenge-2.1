import React from "react";
//zIndex: độ cao, hay lớp thứ bao nhiêu trong avatar
const Part = ({ path, index, zIndex }) => {
  return (
    <img
      alt=""
      src={`character/${path}/${index}.png`}
      style={{ zIndex, position: "absolute", left: 0, top: 0 }}
      width={260}
    />
  );
};

export default Part;
