import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
];

function DragDropExample() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    // <div className='w-full h-screen bg-yellow-100 flex'>
    //   <div className='bg-slate-500  min-h-[500px] w-96' ref={drop}>
    //     {board.map((picture) => {
    //       return <Picture url={picture.url} id={picture.id} />;
    //     })}
    //   </div>
    //   <div className=''>
    //     {PictureList.map((picture) => {
    //       return <Picture url={picture.url} id={picture.id} />;
    //     })}
    //   </div>
    // </div>
    <div className='flex min-h-screen'>
      <div className='w-1/3 bg-slate-100 border border-black' ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className='w-2/3'>
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </div>
  );
}

export default DragDropExample;
