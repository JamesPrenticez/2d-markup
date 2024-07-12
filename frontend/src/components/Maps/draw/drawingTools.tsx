import { DrawingToolType, IDrawingTools } from "@models";

import { PolygonIcon } from "@icons/DrawingIcons";
import { DrawingIcons } from "@icons";

export const drawingTools: IDrawingTools[] = [
  {
    name: DrawingToolType.POLYGON,
    icon: DrawingIcons.POLYGON
  }
]
