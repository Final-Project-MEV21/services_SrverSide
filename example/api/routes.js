'use strict';

const controller = require('./controller');

module.exports = function(app)  {
    //first route
    app.route('/login/:userName').get(controller.login);

    //second route
    app.route('/sum/:num1/:num2').get(controller.getSum);
}