import React from "react";
import Item from "./Item";
import useFormBuilderStore from "../store/useFormBuilderStore";
import { DragOverlay } from "@dnd-kit/core";

const Toolbox = () => {
  const { toolboxItems } = useFormBuilderStore();
  return (
    <div>
      {toolboxItems.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
};

export default Toolbox;
