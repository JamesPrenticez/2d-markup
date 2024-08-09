import { useAppDispatch, useAppSelector } from "@redux/hooks";
import getSnappedPosition from "./getSnappedPosition";
import { setCurrentShape, setIsDrawing, setShapes } from "@redux/slices";
import { useCallback } from "react";

interface UseDrawingProps {
  tool: string;
}

const useDrawing = ({ tool }: UseDrawingProps) => {
  const settings = useAppSelector((state) => state.draw.data);
  const dispatch = useAppDispatch();

  const handleMouseDown = (e: any) => {
    if (!e) return;
    const pos = e.target.getStage().getPointerPosition();
    const snappedPos = getSnappedPosition({
      pos: pos,
      shapes: settings.shapes ?? [],
      snapRadius: settings.snapRadius
    });
    // dispatch(setIsDrawing(true))

    // return console.log(settings.isDrawing)
  }
  // const handleMouseDown = useCallback(
  //   (e: any) => {
  //     if (!e) return;
  //     const pos = e.target.getStage().getPointerPosition();
  //     const snappedPos = getSnappedPosition(pos);
      
  //     if (!settings.isDrawing) {
  //       // Start drawing a line
  //       dispatch(setCurrentShape({ tool, points: [snappedPos.x, snappedPos.y, snappedPos.x, snappedPos.y] }));
  //       settings.isDrawing = true;
  //       settings.startPoint = snappedPos;
  //     } else {
  //       // Finish drawing the line
  //       dispatch(setShapes([
  //         ...settings.shapes,
  //         { ...settings.currentShape, points: [settings.startPoint.x, settings.startPoint.y, snappedPos.x, snappedPos.y] }
  //       ]));
  //       dispatch(setCurrentShape(null));
  //       settings.isDrawing = false;
  //     }
  //   },
  //   [dispatch, settings, tool]
  // );

  return {
    handleMouseDown
  };
};

export default useDrawing;