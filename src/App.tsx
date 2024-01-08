import "./App.css";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import useAppStore from "./stores/AppStore";
import useToolsStore from "./stores/ToolsStore";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useRef } from "react";

function App() {
  const app = useAppStore();
  const tools = useToolsStore();

  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    app.setFile(file);
  }

  useEffect(() => {
    tools.registerTool({
      id: "choose-image",
      name: "Wybierz obraz",
      icon: "mdiImage",
      action: () => inputRef.current?.click(),
      enabledWhenNoImage: true,
    });
  }, [tools]);

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        onChange={handleFileSelection}
        hidden
      />
      <Toolbar />
      <Canvas height="1200" width="1200" file={app.file} />
    </>
  );
}

export default observer(App);
