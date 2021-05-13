/*I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

n is the number of square meters I can paint.
w and h are the widths and heights of a single wall in meters.*/


function howManyWalls(n, w, h) {
	 var a= w*h;
	 var b=n/a
	 return Math.floor(b)
}