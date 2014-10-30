(function () {
	'use strict';
    var app = angular.module('app',[]);

    angular.module('app').directive('myDirective', function () {
        return {
            restrict: 'E',
            replace: true,
            link: function (scope) {
                scope.title = "I'm the first directive";
                scope.values = scope.values || [];
                scope.values.push("I'm the first directive");
            }
        }
    });

    angular.module('app').directive('myDirective', function(){
        return {
            restrict: 'E',
            replace: true,
            link: function(scope){
                scope.title = "I'm the second directive";
                scope.values = scope.values || [];
                scope.values.push("I'm the second directive");
            }
        }
    });

    angular.module('app').controller('controller1', function($scope){
        $scope.val = "directives!";
    });
})();