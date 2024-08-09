import { useAppDispatch, useAppSelector } from "@redux/hooks";
import getSnappedPosition from "./getSnappedPosition";
import { setCurrentShape } from "@redux/slices";

interface Props {
  e: any;
}

const handleMouseMove = ({e}: Props) => {
  const settings = useAppSelector((state) => state.draw.data);
  const dispatch = useAppDispatch();

  if (!settings.isDrawing || !settings.currentShape) return;

  const stage = e.target.getStage();
  const point = stage.getPointerPosition();
  const snappedPos = getSnappedPosition(point);

  // Update the current shape with the latest point
  dispatch(setCurrentShape({ ...settings.currentShape, points: [settings.startPoint.x, settings.startPoint.y, snappedPos.x, snappedPos.y] }));
};

export default handleMouseMove;