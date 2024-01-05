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
      context.drawImage(img, 0, 0);
    };
    img.src = url;
  }, [file]);

  return (
    <canvas ref={ref} width={width} height={height} color="white">
    </canvas>
  );
}
