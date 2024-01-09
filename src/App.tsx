import "./App.css";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import useAppStore from "./stores/AppStore";
import useToolsStore from "./stores/ToolsStore";
import { observer } from "mobx-react-lite";

function App() {
  const app = useAppStore();
  const tools = useToolsStore();

  tools.registerAll();

  return (
    <>
      <Toolbar />
      <Canvas height="1200" width="1200" file={app.file} />
    </>
  );
}

export default observer(App);
