'use strict';

angular.module('sgb-screen-group-list', ['megazord'])
  .controller('sgb-screen-group-list-controller', ['$stateParams', '_screenParams', '_screen', '$scope', function($stateParams, _screenParams, _screen, $scope){

    _screen.initialize($scope, _screenParams);

    $scope.sections = $stateParams.data;

    $scope.itemSearchHandler = function(){};
    $scope.itemSearchCancelHandler = function(){};
    $scope.itemClickHandler = function(){};

  }]);