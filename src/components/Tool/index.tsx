import styles from "./styles.module.css";
import Icon from "../Icon";
import useAppStore from "@/stores/AppStore";
import { ToolType } from "@/tools";
import { observer } from "mobx-react-lite";

interface Props {
  tool: ToolType;
  onClick: () => void;
}

function Tool({ tool, onClick }: Props) {
  const app = useAppStore();

  return (
    <div
      key={tool.id}
      className={`${styles.tool} ${
        (!app.file && !tool.enabledWhenNoImage) ? styles.disabled : ""
      }`}
      onClick={(!app.file && tool.enabledWhenNoImage) || app.file
        ? onClick
        : undefined}
    >
      <Icon icon={tool.icon} />
      {tool.name}
    </div>
  );
}

export default observer(Tool);
