var math = require('../math');

exports.index = function(req, res) {


    console.log('req: ', req.body.maxNumber);
    if (req.body.maxNumber) {
        res.render('/views/fibocalculator.ejs', {
            title: "Calculate Fibonacci sequence",
            sequence: math.fibonacci(req.body.maxNumber),
            show: true
        });
    } else {
        res.render('fibocalculator', {
            title: "Calculate Fibonacci sequence",
            sequence: undefined,
            show: false

        });
    }
};

