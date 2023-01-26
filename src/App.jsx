import { Button } from "antd";
import axios from "./util/axios";
import "./@fakeBackend";

function App() {
  const onClick = async () => {
    const response = await axios.get("/posts");
    console.log(response);
  };
  return (
    <div>
      <h1>JUDUL</h1>
      <Button type='primary' onClick={onClick}>
        Button
      </Button>
    </div>
  );
}

export default App;
