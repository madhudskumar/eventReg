'use strict';

eventsApp.filter('durations' , function(){
 return function (duration) {
     switch (duration){
         case 1 : return '1:00:00 hrs';

         case 2 : return '2:00:00 hrs';

         case 3 : return '3:00:00 hrs';
     }
 }
});