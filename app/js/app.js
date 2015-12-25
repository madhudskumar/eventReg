'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource'])
    .factory('cacheService', function ($cacheFactory) {
        return $cacheFactory('cacheService',{capacity:3});
    });