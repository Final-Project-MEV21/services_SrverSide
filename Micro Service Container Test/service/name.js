const err = "no names was passed"

const name = {
    countName: function(req , res ){
        if(req.params.name1 === null && req.params.name2 === null)
            resizeBy.send(err);
        else
        {
            fullName = "Hello " + req.params.name1 +" "+ req.params.name2;
            res.send(fullName);
        }
    },
};

module.exports = name;