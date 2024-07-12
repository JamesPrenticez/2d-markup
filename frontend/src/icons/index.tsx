import { SVGProps } from "react";
import { PolygonIcon } from "./DrawingIcons";
import { DrawingToolType } from "@models";

export enum DrawingIcons {
  POLYGON = "Polygon"
}

// TODO fix typescript shenanigans
// this isnt typesafe in the way we want
interface IDrawingIcons {
  [key: string]: React.FC<SVGProps<SVGSVGElement>> ; 
}

const drawingIcons: IDrawingIcons = {
  [DrawingToolType.POLYGON]: PolygonIcon,
}

const icons = {
  ...drawingIcons
};

// Nor is this...
interface IconProps {
  [key: string]: any;
  type: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  const IconComponent = icons[type];
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;