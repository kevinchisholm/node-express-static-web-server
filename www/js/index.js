(function(_win, $){

    'use strict';

    /*global window: false */

    var appName = 'myApp',
        app = {};

    //initializes the applcation
    app.init = function () {
        //expose the global
        _win[appName] = app;

        app.start();
    };

    //starts the application
    app.start = function () {
        console.warn('application started');
    };

    //initialize the applcation
    app.init();
})(window, window.jQuery);