'use strict';

angular.module('sgb-screen-group-list', ['megazord'])
  .controller('sgb-screen-group-list-controller', ['$stateParams', '_screenParams', '_screen', '$scope', function($stateParams, _screenParams, _screen, $scope){

        _screen.init($scope, _screenParams);
      $scope.title = _screenParams.title || 'group_list_title';
      $scope.stylesheet = _screenParams.stylesheet
      $scope.sections = $stateParams.data;

      $scope.itemSearchHandler = function(){};

      $scope.itemSearchCancelHandler = function(){};

      $scope.itemClickHandler = function(){};

  }]);