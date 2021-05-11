
/*Write a function that accepts base (decimal), height (decimal) and
 shape ("triangle", "parallelogram") as input and calculates the area of that shape.*/



function areaShape(base, height, shape) {
	 if (shape ==="parallelogram") {
    return base*height;
  } else if (shape === "triangle") {
    return (base*height)*0.5;
  } else {
    return "This isn't a shape";
  }

}