import React, { useState } from "react";
import Board from "./Board";
import Card from "./Card";
import update from "immutability-helper";

const Sort = () => {
  const initData = [
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
    },
  ];

  const [cardData, setCardData] = useState(initData);

  const moveCard = (dragIndex, hoverIndex) => {
    console.log("dragIndex", "hoverInde", dragIndex, hoverIndex);
    setCardData((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    );
  };

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  };

  return (
    <Board>
      {cardData.map((card, index) => {
        return renderCard(card, index);
      })}
    </Board>
  );
};

export default Sort;
