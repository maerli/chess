function preload(){
	irook = loadImage('/img/rook.png');
	irook1 = loadImage('/img/rook1.png');
	iknight = loadImage('/img/knight.png');
	iknight1 = loadImage('/img/knight1.png');
	ibishop = loadImage('/img/bishop.png');
	ibishop1 = loadImage('/img/bishop1.png');
	iqueen = loadImage('/img/queen.png');
	iqueen1 = loadImage('/img/queen1.png');
	iking = loadImage('/img/king.png');
	iking1 = loadImage('/img/king1.png');
	ipawn = loadImage('/img/pawn.png');
	ipawn1 = loadImage('/img/pawn1.png');
}

var board  = [[0,0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0,0]];

function setup(){
	frameRate(100);
	createCanvas(400,400);
	rook = new Rook(0,0,false);
	knight = new Knight(1,0,false);
	bishop = new Bishop(2,0,false);
	queen = new Queen(3,0,false);
  king = new King(4,0,false);
  bishop1 = new Bishop(5,0,false);
  knight1 = new Knight(6,0,false);
  rook1 = new Rook(7,0,false);
	pawn = new Pawn(0,1,false);
  pawn1 = new Pawn(1,1,false);
  pawn2 = new Pawn(2,1,false);
  pawn3 = new Pawn(3,1,false);
  pawn4 = new Pawn(4,1,false);
  pawn5 = new Pawn(5,1,false);
  pawn6 = new Pawn(6,1,false);
  pawn7 = new Pawn(7,1,false);

  rook2 = new Rook(0,7,true);
	knight2 = new Knight(1,7,true);
	bishop2 = new Bishop(2,7,true);
	queen2 = new Queen(3,7,true);
  king2 = new King(4,7,true);
  bishop3 = new Bishop(5,7,true);
  knight3 = new Knight(6,7,true);
  rook3 = new Rook(7,7,true);
	pawn8 = new Pawn(0,6,true);
  pawn9 = new Pawn(1,6,true);
  pawn10 = new Pawn(2,6,true);
  pawn11 = new Pawn(3,6,true);
  pawn12 = new Pawn(4,6,true);
  pawn13 = new Pawn(5,6,true);
  pawn14 = new Pawn(6,6,true);
  pawn15 = new Pawn(7,6,true);

  me = [rook,knight,bishop,queen,king,bishop1,knight1,rook1,
        pawn,pawn1,pawn2,pawn3,pawn4,pawn5,pawn6,pawn7];
  oponent = [rook2,knight2,bishop2,queen2,king2,bishop3,knight3,rook3,
      pawn8,pawn9,pawn10,pawn11,pawn12,pawn13,pawn14,pawn15];
	a = oponent[int(random(16))].possibleMoves(createVector(int(random(8)),int(random(8))));


}
function draw(){
	background(0);
	stroke(255);
	noFill();
  //global variable us in mousePressed
	w = width/8;
	h = height/8;
	for(let j = 0;j<8;j++){
		for(let i = 0;i<8;i++){

			if((i + j)%2 == 0){
				fill(255);
				rect(i*w,j*h,w,h);
			}else{
				fill(210,105,30);
				rect(i*w,j*h,w,h);
			}

			if(board[j][i]){
        if(board[j][i].highlighted){
					fill(0,0,255,100);
					rect(i*w,j*h,w,h);
        }
				image(board[j][i].img,i*w,j*h,w,h);
			}
		}
	}
	if(!a){
		let x = oponent[int(random(16))];
		if(!x.picked){
			a = x.possibleMoves(createVector(int(random(8)),int(random(8))));
		}

	}else{
		let x = me[int(random(16))];
		if(!x.picked){
			a = !x.possibleMoves(createVector(int(random(8)),int(random(8))));
		}
	}

}

hl = false;
phl = null;
turn = true; //oponent turn

function doit(i,j){
    if(hl){
      if(turn == phl.isOponent){
        if(  phl.possibleMoves(createVector(i,j))){
          turn = !phl.isOponent;
        }
        phl.highlighted = false;
        phl = null;
        hl = false;
      }
    }else{
      if(turn == board[j][i].isOponent){
        board[j][i].highlight();
        phl = board[j][i];
        hl = true;
      }
    }
}


function mousePressed(){
  let i = int(mouseX/w);
  let j = int(mouseY/h);
  doit(i,j);
}
