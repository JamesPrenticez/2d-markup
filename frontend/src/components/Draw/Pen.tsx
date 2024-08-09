  // const [tool, setTool] = useState('line');
  // const [shapes, setShapes] = useState([]);
  // const [currentShape, setCurrentShape] = useState(null);
  // const isDrawing = useRef(false);

  // const handleMouseDown = (e) => {
  //   isDrawing.current = true;
  //   const pos = e.target.getStage().getPointerPosition();
  //   setShapes([...shapes, { tool, points: [pos.x, pos.y] }]);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDrawing.current) return;

  //   const stage = e.target.getStage();
  //   const point = stage.getPointerPosition();

 
  //     let lastShape = shapes[shapes.length - 1];
  //     lastShape.points = lastShape.points.concat([point.x, point.y]);
  //     shapes.splice(shapes.length - 1, 1, lastShape);
  //     setShapes([...shapes]);
    
  // };

  // const handleMouseUp = () => {

  //   isDrawing.current = false;
  // };