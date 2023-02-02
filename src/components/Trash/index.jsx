import React from "react";
import { useDrop } from "react-dnd";

const Trash = () => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "CARD",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      data: monitor,
    }),
  }));

  const onDrop = (item) => {
    console.log(item, collectedProps);
  };

  return <div ref={drop} className='border border-black w-80 h-80'></div>;
};

export default Trash;
