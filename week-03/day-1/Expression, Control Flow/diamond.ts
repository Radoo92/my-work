'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

function drawDiamond(size: number): void {
  const star = "*";
  const space = " ";
  const height = Math.round(size / 2);

  for (let i = 0; i < height; i++) {
    const line = space.repeat(height - i - 1) + star.repeat(i + i + 1)
    console.log(line)
  }
  for (let i = height - 2; i != -1; i--) {
    const line = space.repeat(height - i - 1) + star.repeat(i + i + 1)
    console.log(line)
  }
}

drawDiamond(7);