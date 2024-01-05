import styles from "./styles.module.css";
import { useEffect, useRef } from "react";

interface Props {
  width: string;
  height: string;
  file: File | undefined;
}

export default function Canvas({ width, height, file }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref?.current) return;

    const context = ref.current.getContext("2d");

    if (!context) return;

    context.fillStyle = "white";

    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    if (!file) return;
    const url = URL.createObjectURL(file);

    const img = new Image();

    img.onload = () => {
      context.canvas.width = img.width;
      context.canvas.height = img.height;

      context.drawImage(img, 0, 0);
    };
    img.src = url;
  }, [file]);

  return (
    <div className={styles.div}>
      <canvas ref={ref} width={width} height={height}>
      </canvas>
    </div>
  );
}
