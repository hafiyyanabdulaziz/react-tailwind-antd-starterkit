import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Draggable(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    active,
    node,
    isDragging,
    over,
    activeNodeRect,
    activatorEvent,
    setActivatorNodeRef,
  } = useDraggable({
    id: props.id,
    data: {
      nama: "Hafiyyan",
    },
    disabled: false,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  console.log("listeners", "attributes", setActivatorNodeRef);

  return (
    <button
      className='border border-black p-1'
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}>
      {props.children}
    </button>
  );
}
export default Draggable;
