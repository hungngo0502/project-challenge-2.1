import React from "react";
import Part from "./Part";

const Avatar = (
  {
    body,
    eyes,
    hair,
    mouth,
    eyebrows,
    glasses,
    hat,
    clothing1,
    clothing2,
    clothing3,
  },
  ref
) => {
  return (
    <div className="avatar">
      <Part path="body" zIndex={0} index={body} />
      <Part path="eyes" zIndex={0} index={eyes} />
      <Part path="hair" zIndex={0} index={hair} />
      <Part path="mouths" zIndex={0} index={mouth} />
      <Part path="eyebrows" zIndex={0} index={eyebrows} />
      <Part path="accessories/glasses" zIndex={0} index={glasses} />
      <Part path="accessories/hats" zIndex={0} index={hat} />
      <Part path="clothes/layer_1" zIndex={0} index={clothing1} />
      <Part path="clothes/layer_2" zIndex={0} index={clothing2} />
      <Part path="clothes/layer_3" zIndex={0} index={clothing3} />
    </div>
  );
};

export default Avatar;
