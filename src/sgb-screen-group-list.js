'use strict';

angular.module('sgb-screen-group-list', ['megazord'])
  .controller('sgb-screen-group-list-controller', ['$stateParams', '$scope', function($stateParams, $scope){
    $scope.items = $stateParams.data;

    $scope.itemSearchHandler = function(){};

    $scope.itemSearchCancelHandler = function(){};

    $scope.itemClickHandler = function(){};

  }]);