import type { FC, ReactNode, SVGProps } from "react";
import { drawingTools } from "@components/Maps/draw/drawingTools";

//'Point' | 'LineString' | 'LinearRing' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | 'Circle'
export enum DrawingToolType {
  POLYGON = "Polygon",
  CIRCLE = "Circle"
}

export interface IDrawingTools {
  name: DrawingToolType;
  icon: any;
}

export type ToolName = typeof drawingTools[number]['name'];

//export type IDrawingToolIcon = Record<DrawingToolType, FC<SVGProps<SVGSVGElement>>>;
// export type IDrawingToolIcon = {
//   [key in DrawingToolType]?: FC<SVGProps<SVGSVGElement>>;
// };

