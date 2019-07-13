const app = require("./src/config/open-express")

app.listen(3000, function(){console.log("rodando na porta 3000");})

/*
const server = http.createServer( function (request, response){
    
    if(request.url == '/'){
        let resp = require('../first-page.html')
        response.end(resp);
    }else{
        response.end(request.url);
    }
});
server.listen(3000);*/