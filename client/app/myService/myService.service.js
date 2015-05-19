'use strict';

angular.module('peticionesApp')
  .service('myService', function () {

    var id = "";

    var addId = function(data) {
      id = data;
    }

    var getId = function(){
      return id;
    }

    return {
      addId: addId,
      getId: getId
    };
  });
