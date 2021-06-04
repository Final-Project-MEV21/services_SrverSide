'use strict'

const { json } = require('express');
const login = require('../service/login');
const sum = require('../service/sum');

const controllers = {
    login: function (req , res) {
        login.checkUserName(req , res , function(err , result){
            if(err)
                res.send(err);
            res.json(result);
        });
    },
    getSum: function(req ,res) {
        sum.countSum(req , res  , function(err  , num3){
            if(err)
                res.send(err);
            res.json(num3);
        });
    },
};

module.exports = controllers;