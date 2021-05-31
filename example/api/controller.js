'use strict'

const properties = require('../package.json');
const sum = require('../service/sum');

const controllers = {
    about: function (req , res) {
        const aboutInfo = {
            name : properties.name,
            version: properties.version,
        } 

        res.json(aboutInfo);
    },
    getSum: function(req ,res) {
        sum.countSum(req , res  , function(err  , num3){
            if(err)
                res.send(err);
            res.json(num3);
        });
    },
};

module.exports = controllers