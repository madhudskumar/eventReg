eventsApp.controller('TimeoutCtrl',
    function TimeoutCtrl ($scope, $timeout) {

        var promise = $timeout(function () {
            $scope.name = "MKDS";
        }, 3000);
        
        $scope.cancel = function () {
            $timeout.cancel(promise);
            console.log(" cancled")
        }


    }
);