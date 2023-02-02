import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ cardObject }) => {
  console.log(cardObject, "cardObject");
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "CARD",
    item: { text: cardObject.text },
  }));

  console.log(collected);

  return (
    <div ref={drag} className='border border-black p-3 m-1'>
      <p>{cardObject.text}</p>
    </div>
  );
};

export default Card;
