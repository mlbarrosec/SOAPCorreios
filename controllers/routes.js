module.exports = function (app) {

    app.get('/', (req,res) => {
        res.render('pages/home');
    });

    app.get('/calcula-frete', (req,res) => {
        res.render('pages/calcula-frete');
    });


}