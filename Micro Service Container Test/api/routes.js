'use strict';


const controllers = require('./controller');

module.exports = function(app)  {
    //routes
    app.route('/name/:name1/:name2').get(controllers.getName);
    app.route('/login/:userName').get(controllers.singIn);
}