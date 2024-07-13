import Draw from "ol/interaction/Draw";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { DrawingToolType, IDimGroup } from "@models";

interface IHandleDrawing {
  type: DrawingToolType;
  map: Map;
  source: VectorSource;
  setDraw: (draw: Draw | null) => void;
  setDimGroups: ((dimGroups: any) => void)
}

export const handleDrawing = ({type, map, source, setDraw, setDimGroups }: IHandleDrawing) => {
  if (!map) return;
  const draw = new Draw({
    source,
    type
  });

  map.addInteraction(draw);
  setDraw(draw);

  // Handle draw end
  draw.on('drawend', () => {
    finishDrawing({
      draw,
      map,
      setDraw,
      setDimGroups
    })
  });
};

interface IFinishDrawing {
  map: Map;
  draw: Draw;
  setDraw: (draw: Draw | null) => void;
  setDimGroups: any; // TODO ((dimGroups: IDimGroup) => void)
}

// Used to force draw end e.g. onkeydown "ESC | Enter"
export const finishDrawing = ({map, draw, setDraw, setDimGroups}: IFinishDrawing) => {
  if (draw) {

    draw.finishDrawing();
    map.removeInteraction(draw);

    // Add to dim group
    const newDimGroup: IDimGroup = {
      uuid: "",
      name: "test",
    }

    setDimGroups((prev: IDimGroup[]) => [...prev, newDimGroup])

    // End
    setDraw(null);
  }
};

