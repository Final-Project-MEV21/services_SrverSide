'use strict'

const { json } = require('express');

const sum = require('../service/sum');
const name = require('../service/name');

const controllers = {
    
    
    getSum: function(req ,res) {
        sum.countSum(req , res  , function(err  , num3){
            if(err)
                res.send(err);
            res.json(num3);
        });
    },

    getName: function(req, res){
        name.countName(req,res, function(err, fullName){
            if(err)
                res.send(err);
            res.json(fullName);

        });
    },

    
};

module.exports = controllers;