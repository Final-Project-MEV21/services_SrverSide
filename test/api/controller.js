'use strict'

const { json } = require('express');

const sum = require('../service/sum');

const controllers = {
   
    
    getSum: function(req ,res) {
        sum.countSum(req , res  , function(err  , num3){
            if(err)
                res.send(err);
            res.json(num3);
        });
    },
};

module.exports = controllers;