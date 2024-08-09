import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { IDraw } from '@models';

interface IDraw {
  isDrawing: boolean;
  startPoint: { x: number; y: number};
  tool: string;
  shapes: any[] | null;
  currentShape: {} | null;
  snapRadius: number;
}

interface DrawState {
  data: IDraw;
}

const initialState: DrawState = {
  data: {
    isDrawing: false,
    startPoint: {x: 0, y: 0},
    tool: "line",
    shapes: null,
    currentShape: null,
    snapRadius: 10,
  }
};

export const drawSlice = createSlice({
  name: 'draw',
  initialState: initialState,
  reducers: {
    setIsDrawing: (state, action: PayloadAction<boolean>) => {
      if (state.data) {
        state.data.isDrawing = action.payload;
      }
    },
    setTool: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.tool = action.payload;
      }
    },
    setShapes: (state, action: PayloadAction<any[]>) => {
      if (state.data) {
        state.data.shapes = action.payload;
      }
    },
    setCurrentShape: (state, action: PayloadAction<any | null>) => {
      if (state.data) {
        state.data.currentShape = action.payload;
      }
    },
    setSnapRadius: (state, action: PayloadAction<number>) => {
      if (state.data) {
        state.data.snapRadius = action.payload;
      }
    },
  }
});

export const { 
  setIsDrawing,
  setTool,
  setShapes,
  setCurrentShape,
  setSnapRadius
} = drawSlice.actions;

export default drawSlice;