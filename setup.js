class Piece{
  constructor(isoponent){
    this.highlighted = false;
    this.isOponent = isoponent;
    this.picked = false;
  }
  setPos(npos){
    this.pos = npos;
  }
  activate(){
    board[this.pos.y][this.pos.x] = this;
  }
  clear(){
    board[this.pos.y][this.pos.x] = 0;
  }
  highlight(){
    this.highlighted = true;
  }
  pick(){
    this.picked = true;
    console.log('captured at :');
    console.log(this.pos.x,this.pos.y)
  }

}
