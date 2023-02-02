import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import produce from "immer";
const randomAnimalName = require("random-animal-name");

const setObjectCard = (text) => {
  return {
    text,
    id: uuidv4(),
    date: new Date(),
  };
};

const setObjectKanban = (title) => {
  return {
    title: title ? title : randomAnimalName(),
    id: uuidv4(),
    date: new Date(),
    cards: [],
  };
};

const useKanbanStore = create((set, get) => ({
  kanban: [],

  addKanban: (title) => {
    const newState = produce(get().kanban, (draftState) => {
      draftState.push(setObjectKanban(title));
    });

    set(() => ({ kanban: newState }));
  },

  addCard: (text, kanbanId) => {
    const newState = produce(get().kanban, (draftState) => {
      const index = draftState.findIndex((kanban) => kanban.id === kanbanId);
      if (index !== -1) draftState[index].cards.unshift(setObjectCard(text));
    });

    set(() => ({ kanban: newState }));
  },

  moveCard: (cardObject, boardTarget) => {
    console.log("cardObject", cardObject);
    const newState = produce(get().kanban, (draftState) => {
      console.log("draftState", draftState);
      for (const kanbanIndex of draftState) {
        const index = get().kanban;
        console.log("cards", kanbanIndex);
        // const index = draftState[kanbanIndex].cards.findIndex((card) => {
        //   console.log("card", card);
        //   return card.id === cardObject.id;
        // });
        // console.log("index", kanbanIndex);
        // if (index !== -1) {
        //   draftState[kanbanIndex].cards.splice(index, 1);
        //   break;
        // }
      }

      // set(() => ({ kanban: newState }));
    });
  },
}));

export default useKanbanStore;
