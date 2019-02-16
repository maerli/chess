
	class Bishop extends Piece{
		constructor(x,y,isoponent){
			super();
			this.isOponent = isoponent;
			this.color = color(0,255,0);
			this.pos = createVector(x,y);
		  this.activate();
			this.img = isoponent?ibishop1:ibishop;
		}
		possibleMoves(desiredPosition){
			let i = desiredPosition.x;
			let j = desiredPosition.y;
			let di = this.pos.x;
			let dj = this.pos.y;
			if(!board[j][i] || board[j][i].isOponent != board[dj][di].isOponent){
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
