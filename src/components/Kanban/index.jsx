import React from "react";

import Board from "./Board";
import useKanbanStore from "../../store/kanbanStore";

const Kanban = () => {
  const { kanban, addKanban } = useKanbanStore();
  console.log(kanban);

  const handleOnClick = () => {
    addKanban();
  };
  return (
    <div className='flex gap-x-5'>
      {kanban.map((item) => {
        return <Board title={item.title} id={item.id} cards={item.cards} />;
      })}
      <div
        onClick={handleOnClick}
        className='border border-black w-96 h-10 flex justify-center items-center'>
        +
      </div>
    </div>
  );
};

export default Kanban;
