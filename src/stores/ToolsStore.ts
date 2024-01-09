import tools, { ToolType } from "@/tools";
import { makeAutoObservable } from "mobx";

class ToolsStore {
  tools: ToolType[] = [];
  currentTool? = {} as ToolType;

  constructor() {
    makeAutoObservable(this);
  }

  registerAll() {
    tools.map((tool) => {
      if (this.getTool(tool.id)) return false;

      this.tools.push(tool);
      return true;
    });
  }

  getTool(id: string) {
    return this.tools.find((tool) => tool.id === id);
  }

  setTool(id: string) {
    this.currentTool = this.getTool(id);
  }
}

const toolsStore = new ToolsStore();

export default function useToolsStore() {
  return toolsStore;
}
