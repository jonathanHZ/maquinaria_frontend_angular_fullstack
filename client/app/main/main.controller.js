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


angular.module('peticionesApp').controller('ModalDemoCtrl', function ($scope, $modal, $log, $http, myService) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.listAPIData = '';

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.listAPIData;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.getMaquinasData = function (data) {
    $http.get('http://localhost:8080/maquinaria/maquinas/listAPIData?data='+data).success(function(data) {
      $scope.listAPIData = data;
      $scope.open('lg');
    });
  }

  $scope.sendId2 = function(id){
    console(id);
    myService.addId(id);
  }

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('peticionesApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
