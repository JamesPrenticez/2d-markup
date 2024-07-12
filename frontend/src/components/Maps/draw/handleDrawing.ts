import Draw from "ol/interaction/Draw";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { DrawingToolType } from "@models";

interface IStartDrawing {
  type: DrawingToolType;
  map: Map;
  source: VectorSource;
  setDraw: (draw: Draw | null) => void;
}

export const startDrawing = ({type, map, source, setDraw}: IStartDrawing) => {
  if (!map) return;
  const drawInteraction = new Draw({
    source,
    type
  });
  map.addInteraction(drawInteraction);
  setDraw(drawInteraction);
};

interface IFinishDrawing {
  map: Map;
  draw: Draw;
  setDraw: (draw: Draw | null) => void;
}

export const finishDrawing = ({map, draw, setDraw}: IFinishDrawing) => {
  if (draw) {
    draw.finishDrawing();
    map.removeInteraction(draw);
    setDraw(null);
  }
};

