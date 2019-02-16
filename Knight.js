class Knight extends Piece{
  constructor(x,y,isoponent){
    super();
    this.isOponent = isoponent;
    this.color = color(255,0,0);
    this.pos = createVector(x,y);
    this.activate();
    this.img = isoponent?iknight1:iknight;
  }
  possibleMoves(desiredPosition){
    let i = desiredPosition.x;
    let j = desiredPosition.y;
    let di = this.pos.x;
    let dj = this.pos.y;
    if(!board[j][i] || board[j][i].isOponent != board[dj][di].isOponent){
      //right
      if((di + 2) == i && (j == (dj + 1) || j == (dj - 1))){
          if(board[j][i]){
            board[j][i].pick();
          }
          board[j][i] = this;
          this.clear();
          this.setPos(createVector(i,j));
          return true;
      }
      //left
      if((di - 2) == i && (j == (dj + 1) || j == (dj - 1))){
        if(board[j][i]){
          board[j][i].pick();
        }
        board[j][i] = this;
        this.clear();
        this.setPos(createVector(i,j));
        return true;
      }
      //up
      if((dj + 2) == j && (i == (di + 1) || i == (di - 1))){
          if(board[j][i]){
            board[j][i].pick();
          }
          board[j][i] = this;
          this.clear();
          this.setPos(createVector(i,j));
          return true;
      }
      if((dj - 2) == j && (i == (di + 1) || i == (di - 1))){
          if(board[j][i]){
            board[j][i].pick();
          }
          board[j][i] = this;
          this.clear();
          this.setPos(createVector(i,j));
          return true;
      }
    }
    return false;
  }
}
