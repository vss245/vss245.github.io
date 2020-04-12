#https://javascript.christmas/2019/22
const rule30 = get_rule(30);
const output110 = rule30(1, 1, 0);
const combine = (b1, b2, b3) => (b1 << 2) + (b2 << 1) + (b3 << 0);
const get_bit = (num, pos) => (num >> pos) & 1;
const get_rule = num => (b1, b2, b3) => get_bit(num, combine(b1, b2, b3));
window.onload = function() {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 800;

  document.body.appendChild(canvas);
};
const context = canvas.getContext('2d');
function draw_rule(ctx, rule, scale, width, height) {
  let row = initial_row(width);
  for (let i = 0; i < height; i++) {
    draw_row(ctx, row, scale);
    row = next_row(row, rule);
  }
}
function initial_row(length) {
  const initial_row = Array(length).fill(0);
  initial_row[Math.floor(length / 2)] = 1;

  return initial_row;
}
const next_row = (row, rule) => row.map((_, i) => rule(row[i - 1], row[i], row[i + 1]));
function draw_row(ctx, row, scale) {
  ctx.save();
  row.forEach(cell => {
    ctx.fillStyle = cell === 1 ? '#000' : '#fff';
    ctx.fillRect(0, 0, scale, scale);
    ctx.translate(scale, 0);
  });
  ctx.restore();
  ctx.translate(0, scale);
}
window.onload = function() {
  const width = 1000; // Width of the canvas
  const height = 500; // Height of the canvas

  const cells_across = 200; // Number of cells horizontally in the grid
  const cell_scale = width / cells_across; // Size of each cell
  const cells_down = height / cell_scale; // Number of cells vertically in the grid

  const rule = get_rule(30); // The rule to display

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  document.body.appendChild(canvas);

  const context = canvas.getContext('2d');
  draw_rule(context, rule, cell_scale, cells_across, cells_down);
};
