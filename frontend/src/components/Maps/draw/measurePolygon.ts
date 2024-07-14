import { Polygon } from 'ol/geom';
import { getArea, getLength } from 'ol/sphere';

export const measurePolygon = (polygon: any) => {
  const area = getArea(polygon);
  const coordinates = polygon.getCoordinates()[0];
  let length = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    const segment = new Polygon([coordinates.slice(i, i + 2)]);
    length += getLength(segment);
  }
  return { area, length };
};


// const calculatePerimeterOrLength = (geom) => {
//   let lengthText = '';

//   if (geom instanceof LineString) {
//     const length = geom.getLength();
//     lengthText = `Length: ${length.toFixed(2)} meters`;
//   } else if (geom instanceof Polygon) {
//     const perimeter = geom.getPerimeter(); // Calculate perimeter of the polygon
//     lengthText = `Perimeter: ${perimeter.toFixed(2)} meters`;
//   }

//   return lengthText;
// };