import { Input } from "antd";
import React, { useState } from "react";
import Card from "./Card";
import useKanbanStore from "../../store/kanbanStore";
import { useDrop } from "react-dnd";
// import Card from "../Trash/Card";

const Board = ({ id, title, cards }) => {
  const { addCard, moveCard } = useKanbanStore();
  const [text, setText] = useState("");
  const [isEditTitle, setIsEditTitle] = useState(false);

  const handleOnDrop = (item) => {
    console.log("item", item);
    addCard(item.text, id);
    // moveCard(item, 1);
  };

  const [collectedProps, drop] = useDrop(() => ({
    accept: "CARD",
    drop: handleOnDrop,
    collect: (monitor) => ({
      data: monitor,
    }),
  }));

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addCard(text, id);
      setText("");
    }
  };

  const onDoubleClickTitle = (e) => {
    setIsEditTitle(true);
  };

  return (
    <div ref={drop} className='border border-black'>
      <div className='m-2'>
        {isEditTitle ? (
          <Input />
        ) : (
          <h1 onDoubleClick={onDoubleClickTitle}>{title}</h1>
        )}
      </div>

      <div className=' border-t border-black p-5 w-96'>
        <Input
          value={text}
          placeholder='Add Card'
          className='mb-5'
          onKeyDown={handleEnter}
          onChange={handleChange}
        />
        {cards.length !== 0 ? (
          cards.map((card, index) => {
            return <Card text={card.text} key={index} cardObject={card} />;
          })
        ) : (
          <p>Data Belum ada</p>
        )}
      </div>
    </div>
  );
};

export default Board;
