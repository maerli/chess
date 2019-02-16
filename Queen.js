class Queen extends Piece{
  constructor(x,y,isoponent){
    super();
    this.isOponent = isoponent;
    this.color = color(255,0,255);
    this.pos = createVector(x,y);
    this.activate();
    this.img = isoponent?iqueen1:iqueen;
  }
  possibleMoves(desiredPosition){
    let i = desiredPosition.x;
    let j = desiredPosition.y;
    let di = this.pos.x;
    let dj = this.pos.y;
    if(!board[j][i] || board[j][i].isOponent != board[dj][di].isOponent){
      //rook moves
      //right and lft
      if(dj == j){
        let dt = di < i?1:-1;
        let k = di + dt;
        let sk = true;
        while(k != i){
          if(board[j][k]){
            sk = false;
            break;
          }
          k += dt;
        }
        if(sk){
          if(board[j][i]){
            board[j][i].pick();
          }
          board[j][i] = this;
          this.clear();
          this.setPos(createVector(i,j));
          return true;
        }
      }
      //up and down
      if(di == i){
        let dt = dj < j?1:-1;
        let k = dj + dt;
        let sk = true;
        while(k != j){
          if(board[k][i]){
            sk = false;
            break;
          }
          k += dt;
        }
        if(sk){
          if(board[j][i]){
            board[j][i].pick();
          }
          board[j][i] = this;
          this.clear();
          this.setPos(createVector(i,j));
          return true;
        }

      }
      //bishop moves
      //diagonal
      if(Math.abs(i - di)== Math.abs(j- dj)){
        let dt = di < i?1:-1;
        let dt1 = dj < j?1:-1;
        let k = di + dt;
        let k1 = dj + dt1;
        let sk = true;
        while(k != i){
          if(board[k1][k]){
              sk = false;
              break;
          }
          k += dt;
          k1 += dt1;
        }
        if(sk){
          if(board[j][i]){
            board[j][i].pick();
          }
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
