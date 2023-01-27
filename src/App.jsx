import { Button, Divider } from "antd";

import SimpleTable from "./components/SimpleTable";
import DragTable from "./components/DragTable";
import DragDropExample from "./components/DragDropExample";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className='container mx-auto mt-5'>
      <h1>JUDUL</h1>
      <Button type='primary'>Button</Button>
      <SimpleTable />
      <Divider />
      <DragTable />
      <DndProvider backend={HTML5Backend}>
        <DragDropExample />
      </DndProvider>
    </div>
  );
}

export default App;
