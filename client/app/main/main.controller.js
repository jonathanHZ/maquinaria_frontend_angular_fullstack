'use strict';

angular.module('peticionesApp')
  .controller('MainCtrl', function ($scope, $http, myService) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('http://localhost:8080/maquinaria/maquinas/listAPI').success(function(data) {
      $scope.listAPI = data;
    });

    $scope.sendId = function(id){
      myService.addId(id);
    }

  });
