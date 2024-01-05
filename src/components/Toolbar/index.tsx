import styles from "./styles.module.css";
import { ChangeEvent, useRef } from "react";
import Icon, { IconType } from "../Icon";
import useAppStore from "@/stores/AppStore";

interface Item {
  name: string;
  icon: IconType;
  action: () => void;
}

export default function Toolbar() {
  const app = useAppStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = [
    {
      name: "Wybierz zdjęcie",
      icon: "mdiImage",
      action: () => inputRef.current?.click(),
    },
  ];

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
      <div className={styles.toolbar}>
        {items.map((item) => (
          <div key={item.name} className={styles.item} onClick={item.action}>
            <Icon icon={item.icon} />
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
