import produce from "immer";
import { create } from "zustand";

const useFormBuilderStore = create((set, get) => ({
  toolboxItems: [
    {
      id: 1,
      title: "Image",
      type: "IMAGE",
    },
    {
      id: 2,
      title: "Text Input",
      type: "TEXT_INPUT",
    },
  ],
  canvasData: [],
  activeId: null,
  handleDragStart: (event) => {
    // console.log("handleDragStart", event);
  },
  handleDragEnd: (event) => {
    // console.log("handleDragEnd", event);
    if (event.over?.id) {
      const nextState = produce(get().canvasData, (draftState) => {
        draftState.push(event.active.data.current.item);
      });
      set({ canvasData: nextState });
    }
  },
}));

export default useFormBuilderStore;
