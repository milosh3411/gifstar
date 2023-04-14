let sec;
let tiles = [];
let bc;
let tw, th;
let s;
function setup() {
  //bc = color(238, 238, 238);
  //bc = color(255, 255, 255);
  //gold
  bc = color(255, 215, 0);
  //bc = color(255, 255, 204);
  const w = 540; // gif width
  const h = 860; // gif height
  const m = 0.0; // margin in % of gif width
  const nc = 3; // number of columns
  const nr = 3; // number of rows
  let ew = w - 2 * w * m; // effective gif width (w/o margins)
  let eh = h - 2 * w * m; // effective gif height
  let tc = nc * nr; // total number of tiles
  tw = ew / nc; // tile width
  th = eh / nr; // tile height
  let x0 = w * m; // position of tile 0
  let y0 = w * m;
  for (let c = 0; c < nc; c++) {
    for (let r = 0; r < nr; r++) {
      let x = x0 + c * tw; // position of a tile
      let y = y0 + r * th;
      //create a graphics object for each tile
      let g = createGraphics(tw, th);
      // create a js object with position and graphics object
      let tile = {
        x: x,
        y: y,
        g: g,
      };
      tiles.push(tile);
    }
  }
  createCanvas(w, h);
  sec = 30;
  FPS = 25;
  s = FPS*sec;
  frameRate(FPS);
  //createLoop({ duration: 3, gif: true });
}

//tile drawing functions
function paralel_lines(counter) {
  let n = 5;
  let d = tw / n;
  strokeWeight(30.2);
  //indigo dark
  stroke(0, 0, 85,160);
  //stroke(0, 0, 80,160);
  //strokeCap(SQUARE)
  for (let i = 0; i < n; i++) {
    line(i * d - tw / 2, -th / 2 + counter, i * d - tw / 2, th / 2 - counter);
  }
}

function draw() {
  smooth();

  let angle = map(frameCount % s, 0, s, 0, PI/6);
  console.log("angle: "+angle)
  console.log("frameCount: "+frameCount % 250)

  background(bc);
  for (const t in tiles) {
    //alternate 1 and -1 for the counter
    let directon = 1;
    if (t % 2 == 0) {
      direction = 1;
    } else {
      direction = -1;
    }

    // get x and y coordinates of the tile
    let x = tiles[t].x;
    let y = tiles[t].y;
    push();
    translate(x + tw / 2, y + th / 2);
    rotate(direction * angle);
    paralel_lines(-450);
    pop();
  }
  // create a gif
  //if (frameCount < 10) {
  //  saveFrames("out", "png", 1, 1);
  //} else {
  //  noLoop();
  //}
}
