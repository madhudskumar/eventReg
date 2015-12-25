'use strict';

eventsApp.controller('EditProfileCtrl',
    function EditProfileCtrl($scope, gravatarUrlBuilder){
        $scope.user ={
        };

        $scope.getGravatarUrl = function (email) {
            console.log('email ' + email);
            return gravatarUrlBuilder.build(email);
        };
});
