var math = require('../math');

exports.index = function(req, res) {


    if (req.body.maxNumber) {
        res.render('fibocalculator.ejs', {
            title: "Calculate Fibonacci sequence",
            sequence: math.fibonacci(req.body.maxNumber),
            show: true
        });
    } else {
        res.render('fibocalculator.ejs', {
            title: "Calculate Fibonacci sequence",
            sequence: undefined,
            show: false

        });
    }
};

