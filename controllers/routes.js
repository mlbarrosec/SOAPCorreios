

module.exports = function (app) {

    //Rota para renderizar a página home, utilizando EJS
    app.get('/', (req,res) => {
        res.render('pages/home');
    });

    //Rota para renderizar a página calcula prazo, utilizando EJS
    app.get('/calcula-prazo', (req,res) => {
        res.render('pages/calcula-prazo');
    });

    //Rota para renderizar a página de calculo do prazo e preco, utilizando EJS
    app.get('/calcula-prazo-preco', (req,res) => {
        res.render('pages/calcula-prazo-preco');
    });

    //Rota para renderizar a página de resultados do calculo do prazo, utilizando EJS
    app.get('/resultado-prazo',(req,res) => {
        res.render('pages/resultado-prazo');
    })

    

    app.post('/calcula-prazo',function(req,res){
        //Atribui aos dados da entrega o corpo da requisição
        var dadosDaEntrega = req.body;
        //Cria uma nova classe CorreiosSOAPClient e atribui a variavel
        var correiosSOAPClient = new app.services.CorreiosSOAPClient();
        
        //Chama a função calculaPrazo da classe CorreiosSOAPClient
        //Passa como parametro os dadosDa Entrega (POST) e uma função anonima
        correiosSOAPClient.calculaPrazo(dadosDaEntrega, function(erro, resultado){
            //Se ocorrer erros retorna para o usuário o status 500
            if(erro){
                res.status(500).send(erro);
                return;
            }           
            //Coloca no array resultadoFinal os valores retornados da aplicação dos correios
            let resultadoFinal = 
                {
                    'codigo': resultado.CalcPrazoResult.Servicos.cServico[0].Codigo,
                    'prazoEntrega': resultado.CalcPrazoResult.Servicos.cServico[0].PrazoEntrega,
                    'entregaDomiciliar': resultado.CalcPrazoResult.Servicos.cServico[0].EntregaDomiciliar,
                    'entregaSabado': resultado.CalcPrazoResult.Servicos.cServico[0].EntregaSabado,
                    'dataMaxEntrega': resultado.CalcPrazoResult.Servicos.cServico[0].DataMaxEntrega
                };
            
            //manda renderizar a página EJS, e passa o array resultadoFinal como segundo parametro.
            res.render('pages/resultado-prazo',{ prazo: resultadoFinal });
        });
        
    })

    app.post('/calcula-prazo-preco', (req,res) => {

        let dados = req.body;
        let correiosSOAPClient = new app.services.CorreiosSOAPClient();

    });


}