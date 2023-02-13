import React from "react";
import useFormBuilderStore from "../store/useFormBuilderStore";
import RenderEngine from "./RenderEngine";
import { useDroppable } from "@dnd-kit/core";

const Canvas = () => {
  const { canvasData } = useFormBuilderStore();
  const { isOver, setNodeRef } = useDroppable({
    id: "CANVAS",
  });
  const style = {
    backgroundColor: isOver ? "red" : "",
  };

  return (
    <div ref={setNodeRef} style={style} className='min-h-[200px]'>
      {canvasData.map((item, index) => {
        return <RenderEngine key={index} item={item} />;
      })}
    </div>
  );
};

export default Canvas;
