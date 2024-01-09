import styles from "./styles.module.css";
import useToolsStore from "@/stores/ToolsStore";

export default function Toolbar() {
  const tools = useToolsStore();

  return (
    <div className={styles.toolbar}>
      {tools.tools.map((tool) => <tool.Component key={tool.id} />)}
    </div>
  );
}
