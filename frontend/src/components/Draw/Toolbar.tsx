// ToolBar.js
import React from 'react';

interface Props {
  addShape: any;
}

const ToolBar = ({ addShape }: Props) => {
  return (
    <div>
      <button onClick={() => addShape('rect')}>Add Rectangle</button>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      {/* Add more buttons for other shapes */}
    </div>
  );
};

export default ToolBar;
