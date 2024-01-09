import { IconType } from "@/components/Icon";
import ChooseImage from "./ChooseImage";

export interface ToolType {
  id: string;
  name: string;
  icon: IconType;
  enabledWhenNoImage?: boolean;
  Component: () => JSX.Element;
}

export default [ChooseImage] as ToolType[];
