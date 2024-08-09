import { useAppSelector } from "@redux/hooks";

interface Props {
  pos: any,
  shapes: any[];
  snapRadius: number;
}

const getSnappedPosition = ({pos, shapes, snapRadius}: Props) => {
  for (let shape of shapes) {
    const points = shape.points;
    for (let i = 0; i < points.length; i += 2) {
      const x = points[i];
      const y = points[i + 1];
      const dist = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
      if (dist < snapRadius) {
        return { x, y };
      }
    }
  }
  return pos;
};

export default getSnappedPosition;