// @ts-nocheck

import React, { useRef, useState } from 'react';
import { useAppSelector } from '@redux/hooks';
import { Stage, Layer, Line, Rect, Circle, Text } from 'react-konva';
import {
  useDrawing,
  handleMouseMove,
  handleMouseUp,
} from "./utils"

const CanvasComponent = () => {
  const {isDrawing, tool, shapes, currentShape, snapRadius} = useAppSelector((state) => state.draw.data);
  const { handleMouseDown } = useDrawing({ tool: 'line' });

  return (
    <div>
      <button onClick={handleMouseDown}>asdf</button>
    <select
      className="text-black bg-yellow-300"
      value={tool}
      onChange={(e) => {
        setTool(e.target.value);
      }}
    >
      <option value="pen">Pen</option>
      <option value="eraser">Eraser</option>
      <option value="line">Line</option>
    </select>

    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
    >
 <Layer>
          {shapes &&
          
          shapes.map((shape, i) => (
            <React.Fragment key={i}>
              <Line
                points={shape.points}
                stroke="#df4b26"
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  shape.tool === 'eraser' ? 'destination-out' : 'source-over'
                }
                closed={shape.tool === 'polygon'}
              />
              {shape.points.map((point, index) => (
                index % 2 === 0 && (
                  <Circle
                    key={`${i}-${index}`}
                    x={shape.points[index]}
                    y={shape.points[index + 1]}
                    radius={5}
                    fill="green"
                  />
                )
              ))}
            </React.Fragment>
          ))}
          {currentShape && (
            <Line
              points={currentShape.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                currentShape.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
              closed={currentShape.tool === 'polygon'}
            />
          )}
          {currentShape && currentShape.points.map((point, index) => (
            index % 2 === 0 && (
              <Circle
                key={`current-${index}`}
                x={currentShape.points[index]}
                y={currentShape.points[index + 1]}
                radius={5}
                fill="green"
              />
            )
          ))}
        </Layer>
    </Stage>
  </div>
  );
};

export default CanvasComponent;
