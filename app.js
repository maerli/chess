
var express = require('express');
var fs = require('fs');
var ip = require('./ip');

//variaveis de configuração

let port = 3000;



//getIP é uma função para mostrar o endereço de IP
//do computador
console.log(`
	abra seu navegador e digite:
	${ip.getIP()}:${port}
		ou
	${ip.getIP()}:${port}/show
	`);

var app = express();


app.use(express.static(__dirname));

var server = app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
