
const err = "no numbers was passed"

const sum = {
    countSum: function(req , res ){
        if(req.params.num1 === null && req.params.num2 === null)
            resizeBy.send(err);
        else
        {
            num3 = req.params.num1 + req.params.num2;
            res.send(num3);
        }
    },
};

module.exports = sum;