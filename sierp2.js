var cells;
var length;
var generation;
var test;
var history;

function setup() {
	createCanvas(400, 400);
	background(255);
	res = 2;
	length = width/res;
	cells = [];
	generation = 0;
	history=make2darray();
	seed();
}

function draw() {
	nextcells = [];
	for (let i = 0;i<length;i++){
		nextcells[i]=0;
	}
	//initial
	for (let i = 0;i<length;i++){
		x=i*res;
		rect(x,generation*res,res,res);
		if (cells[i]==1) {
			turn_on(i,generation);
		} else {
			fill(255);
		}
	}
	//update
	for (let i = 1;i<length-1;i++){ //ignoring edges
		var left = cells[i-1];
		var self = cells[i];
		var right = cells[i+1];
		nextcells[i]=rules(left,self,right);
	}
	cells = nextcells;
	generation++;
	history[generation]=cells;
	if (generation == width/res) {
		for (let i = 0;i<width;i++){
			history[i]=history[i+1];
		}
	}
}

function seed() {
	for (let i = 0;i<length;i++){
		cells[i]=0;
	}
	cells[length/2]=1;
	history[0]=cells;
}

function make2darray(){
	let arr = [];
	for (i = 0;i<arr.length;i++) {
		arr[i] = [];
	}
	return arr;
}

function turn_on(i,j){
	xcol = map(i,0,length,0,255);
	ycol = map(j,0,length,0,255);
	xycol = map(sqrt(i^2+j^2),0,sqrt(length^2+length^2),0,255);
	currcol = color(xcol*noise(j),ycol*noise(j),xycol);
	fill(currcol);
	return currcol
}

function rules(a,b,c){
	if (a == 1) {
		if (b == 1) {
			return 1;
		} else if (b==0) {
			if (c==1) {
				return 0;
			} else {
				return 1;
			}
		}
	} else {
		if (b==1) {
			if (c==0) {
				return 0;
			}
		} else {
			if (c==1) {
				return 1;
			} else {
				return 0;
			}
		}
	}
}
