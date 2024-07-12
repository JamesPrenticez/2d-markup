import React, { useState } from 'react'
import { capitalizeFirstLetter } from '@utils';
import Icon from '@icons';
import { useMap } from '@components/Maps/MapProvider';

import { useDrawingTools } from '@components/Maps/DrawingToolsProvider';
import { startDrawing } from '@components/Maps/draw';
import { DrawingToolType, ToolName } from '@models';
import { drawingTools } from '@components/Maps/draw/drawingTools';

const LeftBar = () => {
  const { map } = useMap();
  const { source, draw, setDraw } = useDrawingTools();

  const [activeTool, setActiveTool] = useState<ToolName | null>(null);

  const handleClick = (toolName: ToolName) => {
    setActiveTool(toolName)

    startDrawing({type: DrawingToolType.POLYGON, map, source, setDraw})
  }

  console.log(activeTool)

  return (
    <div className="bg-yellow-900 p-4 text-gray-200">
      <h1 className="text-lg font-semibold mb-4">Drawing Tools</h1>

      {drawingTools.map((item, index) => (
        <div 
          key={`${item.name}-${index}`}
          className="flex space-x-2 border px-1 py-2 border-gray-200 bg-yellow-800 hover:bg-yellow-700 hover:border-yellow-500 hover:ring-2 hover:ring-yellow-500 cursor-pointer hover:text-white rounded"
          onClick={() => handleClick(item.name)}
        >
          <Icon 
            className="text-white"
            type={item.icon} 
            width={24}
          />
          <h2 className="">
            {capitalizeFirstLetter(item.name)}
          </h2>


        </div>
      ))}
    </div>
  )
}

export default LeftBar;