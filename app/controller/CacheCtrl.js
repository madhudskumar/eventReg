'use strict';

eventsApp.controller('CacheCtrl',
    function CacheCtrl ($scope, cacheService) {
        $scope.add = function (key, val) {
            cacheService.put(key, val)
        };

        $scope.getKey = function (key) {
            return cacheService.get(key);
        };

        $scope.stat = function(){
            return cacheService.info();
        }
    }
);
