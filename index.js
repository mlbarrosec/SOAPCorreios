var app = require ('./config/custon-express')();

app.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});