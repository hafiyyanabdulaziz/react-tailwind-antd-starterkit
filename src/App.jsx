import { HTML5Backend } from "react-dnd-html5-backend";
import Kanban from "./components/Kanban";
import Trash from "./components/Trash";
import { DndProvider } from "react-dnd";
import Card from "./components/Trash/Card";

function App() {
  const items = ["A", "B", "C", "D", "E"];
  return (
    <div className='pt-10 px-10'>
      <DndProvider backend={HTML5Backend}>
        <Kanban />
        <div className='flex justify-between'>
          <Trash />
          <div className=''>
            {items.map((item, index) => {
              return <Card text={item} key={index} />;
            })}
          </div>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
