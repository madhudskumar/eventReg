eventsApp.controller('LocaleCtrl',
    function LocaleCtrl ($scope, $locale) {
        $scope.myDate = Date.now();
        //$scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
        $scope.myFormat = $locale.DATETIME_FORMATS.shortDate;

        throw {message : "error! error! error!"}
    }
);