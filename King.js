class King extends Piece{
  constructor(x,y,isoponent){
    super();
    this.isOponent = isoponent;
    this.color = color(0,255,2555);
    this.pos = createVector(x,y);
    this.activate();
    this.img = isoponent?iking1:iking;
  }
  possibleMoves(desiredPosition){
    let i = desiredPosition.x;
    let j = desiredPosition.y;
    let di = this.pos.x;
    let dj = this.pos.y;
    if(!board[j][i] || board[j][i].isOponent != board[dj][di].isOponent){
      //up
      if(i == di && (dj + 1 == j || dj -1 == j)){
        if(board[j][i]){
          board[j][i].pick();
        }
        board[j][i] = this;
        this.clear();
        this.setPos(createVector(i,j));
        return true;
      }else if(j == dj && (di + 1 == i|| di - 1 == i)){
        if(board[j][i]){
          board[j][i].pick();
        }
        board[j][i] = this;
        this.clear();
        this.setPos(createVector(i,j));
        return true;
      }else if(dj + 1 == j && (di + 1 == i|| di -1 == i)){
        if(board[j][i]){
          board[j][i].pick();
        }
        board[j][i] = this;
        this.clear();
        this.setPos(createVector(i,j));
        return true;
      }else if(dj - 1 == j && (di + 1 == i|| di -1 == i)){
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
