import "./App.css";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import useToolsStore from "./stores/ToolsStore";

export default function App() {
  const tools = useToolsStore();

  tools.registerAll();

  return (
    <>
      <Toolbar />
      <Canvas height="1200" width="1200" />
    </>
  );
}
