var soap = require ('soap');

//Classe para utilização do SOAP, na aplicação dos correios
class CorreiosSOAPClient {

    constructor () {
        //No construtor é passada a url para o SOAP dos correios
        this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
    }

    //Função para calcular o prrazo de entrega
    calculaPrazo (args, callback) {
        //Cria o cliente SOAP
        soap.createClient(this._url, function (error,cliente){
            //Caso encontre algum erro sai da função
            if(error) {
                console.log(error);
                return;
            }
            //Chama a função CalcPrazo do serviço dos correios
            //recebe como parametro os argumentos (vindo do post)
            //e uma função de callback
            cliente.CalcPrazo(args,callback);
        });
    }

}

//Exporta as funçoes para serem utilizadas em outras classes
module.exports = function () {
    return CorreiosSOAPClient;
};

