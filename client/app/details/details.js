'use strict';

angular.module('peticionesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('details', {
        url: '/details',
        templateUrl: 'app/details/details.html',
        controller: 'DetailsCtrl'
      });
  });