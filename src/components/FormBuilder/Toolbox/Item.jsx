import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const Item = ({ item }) => {
  const { transform, setNodeRef, listeners, attributes } = useDraggable({
    id: item.id,
    data: {
      item,
    },
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  return (
    <>
      <div
        className='border border-black my-2 w-60 p-2'
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}>
        <p>{item.title}</p>
      </div>
    </>
  );
};

export default Item;
