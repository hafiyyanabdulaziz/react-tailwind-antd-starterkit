import React from "react";
import Canvas from "./Canvas";
import Toolbox from "./Toolbox";
import { DndContext } from "@dnd-kit/core";
import useFormBuilderStore from "./store/useFormBuilderStore";

const FormBuilder = () => {
  const { handleDragStart, handleDragEnd } = useFormBuilderStore();

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className='flex'>
        <div className='w-1/3'>
          <Toolbox />
        </div>
        <div className='w-2/3 border border-black'>
          <Canvas />
        </div>
      </div>
    </DndContext>
  );

  // function handleDragStart(event) {
  // setActiveId(event.active.id);
  // }

  // function handleDragEnd({ over }) {
  // setParent(over ? over.id : null);
  // }
};

export default FormBuilder;
