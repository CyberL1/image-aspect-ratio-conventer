import useAppStore from "@/stores/AppStore";
import { ChangeEvent, useRef } from "react";
import Tool from "@/components/Tool";
import { ToolType } from "..";

function Component() {
  const app = useAppStore();
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    app.setFile(file);
  }

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        onChange={handleFileSelection}
        hidden
      />
      <Tool tool={tool} onClick={() => inputRef.current?.click()} />
    </>
  );
}

const tool: ToolType = {
  id: "choose-image",
  name: "Choose image",
  icon: "mdiImage",
  enabledWhenNoImage: true,
  Component,
};

export default tool;
