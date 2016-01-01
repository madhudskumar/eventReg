'use strict';

eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log(exception.message + "\n\nEXCEPTION OCCURED\n\n");
    }
});