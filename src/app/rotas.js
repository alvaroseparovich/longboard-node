module.exports = (app) =>{

app.get('/', function(request,response){
    response.send("MALAKOYYYY");
    response.end();
})
app.get('/h', function(request,response){
    response.send("MALAKOYYYY - DO EBRAICOOOOOOO!");
    response.end();
})

}