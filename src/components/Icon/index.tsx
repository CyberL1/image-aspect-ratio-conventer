import * as Icons from "@mdi/js";
import { Icon as MdiIcon } from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";

export type IconType = keyof typeof Icons;

interface Props extends Omit<IconProps, "path"> {
  icon: IconType;
}

export default function Icon({ icon, ...props }: Props) {
  const path = Icons[icon];
  if (!path) throw Error(`Invalid icon name ${icon}`);

  return <MdiIcon {...props} path={path} />;
}
