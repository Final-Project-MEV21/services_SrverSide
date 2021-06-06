'use strict';

const controller = require('./controller');

module.exports = function(app)  {
 

    //only route
    app.route('/sum/:num1/:num2').get(controller.getSum);
    app.route('/name/:name1/:name2').get(controller.getName);
}