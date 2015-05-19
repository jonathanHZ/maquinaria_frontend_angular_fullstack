'use strict';

angular.module('peticionesApp')
  .controller('DetailsCtrl', function ($scope, $http, myService) {
    $scope.id = myService.getId();
    $scope.ahorro = 0;

    $http.get('http://localhost:8080/maquinaria/maquinas/listAPIid?id='+$scope.id).success(function(data) {
      $scope.listAPIid = data;
      $scope.ahorro = data.precio - data.precioDescuento;
    });

    $scope.delete = function(){
      $http.delete('http://localhost:8080/maquinaria/maquinas/deleteId?id='+$scope.id).success(function(data) {
        if(data.status == 'success'){
          $scope.success = true;
        }else{
          $scope.delete = 'error';
        }
      }).error(function(){
        $scope.error = true;
      });
    }
  });
