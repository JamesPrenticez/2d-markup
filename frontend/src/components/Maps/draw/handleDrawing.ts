import Draw from "ol/interaction/Draw";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { DrawingToolType, IDim, IDimGroup } from "@models";
import GeoJSON from 'ol/format/GeoJSON';
import { generateUuid } from "@utils";

interface IHandleDrawing {
  type: DrawingToolType;
  map: Map;
  source: VectorSource;
  setDraw: (draw: Draw | null) => void;
  addDimToDimGroup: any; // TODO
}

export const handleDrawing = ({type, map, source, setDraw, addDimToDimGroup }: IHandleDrawing) => {
  if (!map) return;
  const draw = new Draw({
    source,
    type
  });

  map.addInteraction(draw);
  setDraw(draw);

  // Handle draw end
  draw.on('drawend', (e) => {
    finishDrawing({
      draw,
      map,
      setDraw,
      addDimToDimGroup
    })
  });
};

interface IFinishDrawing {
  map: Map;
  draw: Draw;
  setDraw: (draw: Draw | null) => void;
  addDimToDimGroup: any; // TODO ((dimGroups: IDimGroup) => void)
}

// Used to force draw end e.g. onkeydown "ESC | Enter"
export const finishDrawing = ({map, draw, setDraw, addDimToDimGroup}: IFinishDrawing) => {
  if (draw) {

    draw.finishDrawing();
    map.removeInteraction(draw);

    // Add to dim group
    const newDim: IDim = {
      uuid: `temp-${generateUuid()}`,
      name: "test",
      quantity: 30,
      unit: "m"
    }

    addDimToDimGroup(newDim)

    // End
    setDraw(null);
  }
};



