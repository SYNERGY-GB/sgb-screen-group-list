'use strict';

angular.module('sgb-screen-group-list', ['megazord'])
  .controller('sgb-screen-group-list-controller', ['$stateParams', '_screenParams','$scope', function($stateParams, _screenParams, $scope){
      $scope.title = _screenParams.title || 'group_list_title';
      $scope.sections = $stateParams.data;

      $scope.itemSearchHandler = function(){};

      $scope.itemSearchCancelHandler = function(){};

      $scope.itemClickHandler = function(){};

  }]);