import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ text }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "CARD",
    item: { text },
  }));
  return (
    <div ref={drag} className='border border-black w-10 h-10 p-10'>
      {text}
    </div>
  );
};

export default Card;
