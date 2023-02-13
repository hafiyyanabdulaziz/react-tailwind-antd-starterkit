import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
    backgroundColor: isOver ? "red" : "",
  };

  return (
    <div
      className='border border-black h-40 p-5'
      ref={setNodeRef}
      style={style}>
      {props.children}
    </div>
  );
}
export default Droppable;
