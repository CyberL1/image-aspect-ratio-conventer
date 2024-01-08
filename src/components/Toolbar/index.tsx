import styles from "./styles.module.css";
import Icon from "../Icon";
import useAppStore from "@/stores/AppStore";
import useToolsStore from "@/stores/ToolsStore";

export default function Toolbar() {
  const app = useAppStore();
  const tools = useToolsStore();

  return (
    <div className={styles.toolbar}>
      {tools.tools.map((tool) => (
        <div
          key={tool.id}
          className={`${styles.item} ${
            (!app.file && !tool.enabledWhenNoImage) ? styles.disabled : ""
          }`}
          onClick={(!app.file && tool.enabledWhenNoImage) || app.file
            ? tool.action
            : undefined}
        >
          <Icon icon={tool.icon} />
          {tool.name}
        </div>
      ))}
    </div>
  );
}
