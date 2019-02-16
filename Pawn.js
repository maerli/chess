class Pawn extends Piece{
  constructor(x,y,isoponent){
    super();
    this.isOponent = isoponent;
    this.color = color(0,5,255);
    this.pos = createVector(x,y);
    this.activate();
    this.img = isoponent?ipawn1:ipawn;
  }
  possibleMoves(desiredPosition){
    let i = desiredPosition.x;
    let j = desiredPosition.y;
    let di = this.pos.x;
    let dj = this.pos.y;
    //up
    if(!board[j][i]){
      if(i == di && (dj == 1 || dj == 6) && (dj + (dj == 1?2:-2)) == j){
        board[j][i] = this;
        this.clear();
        this.setPos(createVector(i,j));
        return true;
      }else if(i == di && (!this.isOponent?(dj + 1):(dj - 1))== j){
        board[j][i] = this;
        this.clear();
        this.setPos(createVector(i,j));
        return true;
      }
    }else if(board[j][i].isOponent != board[dj][di].isOponent){
      if(board[j][i].isOponent){//captura opnents pawn
        if(dj + 1 == j && (di + 1 == i || di - 1 == i)){
          board[j][i].pick();
          board[j][i] = this;
          this.clear();
          this.setPos(createVector(i,j));
          return true;
        }
      }else{
        if(dj - 1 == j && (di + 1 == i || di - 1 == i)){
          board[j][i].pick();
          board[j][i] = this;
          this.clear();
          this.setPos(createVector(i,j));
          return true;
        }
      }
    }
    return false;
  }
}
