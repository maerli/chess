class Love{
  set(){
    console.log(4);
  }
}
class Maerli extends Love{
  constructor(){
    super();
    this.a = 1;
  }
}

Maerli.prototype = {
  'verde':2
}
