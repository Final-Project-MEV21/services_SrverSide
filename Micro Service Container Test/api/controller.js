'use strict'

const { json } = require('express');

const login = require('../service/Login');
const name = require('../service/name');

const controllers = {
    

    getName: function(req, res){
        name.countName(req,res, function(err, fullName){
            if(err)
                res.send(err);
            res.json(fullName);

        });
    },

    singIn: function(req , res){
        login.getUserName(req , res , function(err,authenticated){
            res.json(authenticated);
        });
    },
    
};



module.exports = controllers;