import { Tool } from "@/objects/Tool";
import { makeAutoObservable } from "mobx";

class ToolsStore {
  tools: Tool[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  registerTool(tool: Tool) {
    if (this.getTool(tool.id)) return false;

    this.tools.push(tool);
    return true;
  }

  getTool(id: string) {
    return this.tools.find((tool) => tool.id === id);
  }
}

const toolsStore = new ToolsStore();

export default function useToolsStore() {
  return toolsStore;
}
