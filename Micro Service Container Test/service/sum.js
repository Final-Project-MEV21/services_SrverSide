
const err = "no numbers was passed"

const add = (a,b) =>parseInt(a) + parseInt(b);

const sum = {
    countSum: function(req , res ){
        if(req.params.num1 === null && req.params.num2 === null)
            resizeBy.send(err);
        else
        {
            res.json({"num":add(req.params.num1,req.params.num2)});
        }
    },
};

module.exports = sum;