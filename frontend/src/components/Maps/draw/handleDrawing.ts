import Draw from "ol/interaction/Draw";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { DrawingToolType, IDim, IDimGroup } from "@models";
import GeoJSON from 'ol/format/GeoJSON';
import { generateUuid } from "@utils";
import { measurePolygon } from "./measurePolygon";

interface IHandleDrawing {
  type: DrawingToolType;
  map: Map;
  source: VectorSource;
  setDraw: (draw: Draw | null) => void;
  dimGroupUuid: IDimGroup["uuid"];
  addDimToDimGroup: any; // TODO
}

export const handleDrawing = ({type, map, source, setDraw, dimGroupUuid, addDimToDimGroup }: IHandleDrawing) => {
  if (!map) return;
  const draw = new Draw({
    source,
    type
  });

  map.addInteraction(draw);
  setDraw(draw);

  // Handle draw end
  draw.on('drawend', (event) => {
    finishDrawing({
      draw,
      map,
      setDraw,
      event,
      type,
      dimGroupUuid,
      addDimToDimGroup
    })
  });
};

interface IFinishDrawing {
  map: Map;
  draw: Draw;
  setDraw: (draw: Draw | null) => void;
  event: any;
  type: DrawingToolType;
  dimGroupUuid: IDimGroup["uuid"];
  addDimToDimGroup: any; // TODO ((dimGroups: IDimGroup) => void)
}

// Used to force draw end e.g. onkeydown "ESC | Enter"
export const finishDrawing = ({map, draw, setDraw, event, type, dimGroupUuid, addDimToDimGroup}: IFinishDrawing) => {
  if (draw) {

    draw.finishDrawing();
    map.removeInteraction(draw);

    // Create newDim
    const feature = event.feature;

    // Get geo data
    const geojson = new GeoJSON();
    const geojsonStr = geojson.writeFeature(feature, {
      featureProjection: 'EPSG:3857' // Ensure the feature is written with the correct projection
    });

    // Calculate dimensions
    const { area, length } = measurePolygon(feature.getGeometry());

    // Add to dim group
    const newDim: IDim = {
      uuid: `temp-${generateUuid()}`,
      dimGroupUuid: dimGroupUuid,
      name: type,
      length: length,
      area: area,
      unit: "m2",
      geoData: geojsonStr
    }

    addDimToDimGroup(dimGroupUuid, newDim)

    // End
    setDraw(null);
  }
};


