const http =  require("http");

/*function init(){
  function onRequest(request, response){
    response.writeHead(404, {"Content-Type":"text/html"});
    response.write("<h1>Hola Mundo</h1>");
    response.end();
  }

  http.createServer(onRequest).listen(1111);
}*/




/*exports.init = ()=>{
  function onRequest(request, response){
    response.writeHead(404, {"Content-Type":"text/html"});
    response.write("<h1>Hola Mundo</h1>");
    response.end();
  }

  http.createServer(onRequest).listen(1111);
};*/




exports.init = ()=>{
  http.createServer((request, response) =>{
    response.writeHead(404, {"Content-Type":"text/html"});
    response.write("<h1>Hola Mundo</h1>");
    response.end();
  }).listen(1111);
};
