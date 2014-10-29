/**
 * Created by Administrator on 10/25/2014.
 */
(function(){
    'use strict';

    angular.module('app',[]);

    angular.module('app').controller('testCtrl', function($scope){
       $scope.test = 'working!';
    });
}).();