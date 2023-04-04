let tiles = [];
let bc;
let tw, th;

function setup() {
  bc = color(238, 238, 238);
  const w = 1080; // gif width
  const h = 1920; // gif height
  const m = 0.1; // margin in % of gif width
  const nc = 5; // number of columns
  const nr = 9; // number of rows
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
      tiles.push([x, y]);
    }
  }
  createCanvas(w, h);
}

function draw() {
  background(bc);
  for (const t in tiles) {
    
    // get x and y coordinates of the tile
    let x = tiles[t][0];
    let y = tiles[t][1];
    push()
    translate(x, y)
    circle(0,0,20)
    // draw a square with the same size as the tile
    rect(0, 0, tw, th);  


    pop()
  }
}
