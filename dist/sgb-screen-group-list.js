(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
