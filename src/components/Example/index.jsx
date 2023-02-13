import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import Sortable from "../Sortable";

function Example() {
  const [parent, setParent] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const draggable = <Draggable id='A'>Go ahead, drag me.</Draggable>;

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className='border border-black m-5 p-5 flex'>
        <div className='w-1/2'>
          {draggable}
          {!parent ? draggable : null}
          <DragOverlay>{activeId ? draggable : null}</DragOverlay>
        </div>
        <div className='w-1/2'>
          <div className=''>
            <Droppable id='B'>
              {parent === "B" ? draggable : "Drop here"}
            </Droppable>
          </div>
          <div className='border border-black'>
            <Sortable />
          </div>
        </div>
      </div>
    </DndContext>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default Example;
