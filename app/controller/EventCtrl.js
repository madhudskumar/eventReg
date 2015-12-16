'use strict';

eventsApp.controller('EventCtrl', function ($scope) {
    $scope.snippet = '<span class="container" style="color: darkslateblue;">tabs</span>';

    $scope.boolVal = true;

    $scope.sortOrder = "name";

    $scope.event = {
        name: 'My little angular app',
        version: '0.0.01',
        author: 'Madhu Kumar D S',
        email: 'madhudskumar@live.in',
        location:{
            address:"#4139 behind anjeneya temple road",
            city:"Davangere",
            state:"karnataka"
        },
        img: 'img/img.png',

        sessions:[
            {
                name:'my rampage',
                creator:'williams',
                duration:1,
                level:12,
                difficulty:"intro",
                upVote:0
            },
            {
                name:'pesistance of life',
                creator:'williams',
                duration:'2',
                level:21,
                difficulty:"advanced",
                upVote:0
            },
            {
                name:'live in the dom',
                creator:'williams',
                duration:3,
                level:4,
                difficulty:"expr",
                upVote:0
            }
        ]
    };

    $scope.voteAdd = function(sessions){
        sessions.upVote++;
    };

    $scope.voteSub = function (sessions) {
        if(sessions.upVote == 0) sessions.upVote = 0;
        else sessions.upVote--;
    };

    $scope.invert = function(){
        this.boolVal = !this.boolVal;
    }

    $scope.myStyle = {color:'blue'};
    $scope.myClass = 'blue';
    $scope.btnDisabled = true;
});
