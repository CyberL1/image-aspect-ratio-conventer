import { IconType } from "@/components/Icon";

export interface Tool {
  id: string;
  name: string;
  icon: IconType;
  action: () => void;
  enabledWhenNoImage?: boolean;
}
