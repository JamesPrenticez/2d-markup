// import { useAppDispatch, useAppSelector } from "@redux/hooks";
// import getSnappedPosition from "./getSnappedPosition";
// import { 
//   setCurrentShape,
//   setShapes
// } from "@redux/slices";

// interface Props {
//   e: any
//   tool: string;
// }

// const handleMouseDown = ({e, tool}: Props) => {
//   const settings = useAppSelector((state) => state.draw.data);
//   const dispatch = useAppDispatch();


//   if(!e) return;
//   const pos = e.target.getStage().getPointerPosition();

    
//     const snappedPos = getSnappedPosition({
//       pos: pos,
//       shapes: settings.shapes,
//       snapRadius: settings.snapRadius
//     });

//     if (!settings.isDrawing) {
//       // Start drawing a line
//       settings.isDrawing = true;
//       settings.startPoint = snappedPos;
//       dispatch(setCurrentShape({ tool, points: [snappedPos.x, snappedPos.y, snappedPos.x, snappedPos.y] }));
//     } else {
//       // Finish drawing the line
//       settings.isDrawing = false;
//       dispatch(setShapes([...settings.shapes ?? [], { ...settings.currentShape, points: [settings.startPoint.x, settings.startPoint.y, snappedPos.x, snappedPos.y] }]));
//       setCurrentShape(null);
//     }
// };

// export default handleMouseDown;