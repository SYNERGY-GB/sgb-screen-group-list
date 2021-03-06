(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-group-list', ['megazord'])
    .controller('sgb-screen-group-list-controller', ['_router', '_screenParams', '_screen','_data', '$scope', 'lodash',
                 function(_router, _screenParams, _screen, _data, $scope, _){

        _screen.initialize($scope, _screenParams);

        $scope.sections = _data;
        $scope.totalFilteredSections = $scope.sections.length; 
        $scope.showSearch = typeof(_screenParams.showSearch) === 'undefined'? true : _screenParams.showSearch;

        $scope.searchQuery = {
            value: ''
        };

        $scope.load = function () { 
            angular.forEach($scope.sections, function (section) {
                section.filteredItems = section.items;
            });
        };

        $scope.load();

        $scope.filterItems = function(searchQuery){
            $scope.totalFilteredSections = $scope.sections.length; 
            angular.forEach($scope.sections, function (section) {
                var search = searchQuery.toLowerCase();
                section.filteredItems = _.filter(section.items, function(item){
                    return (item.title && item.title.toLowerCase().indexOf(search) != -1) ||
                        (item.detail_1 && item.detail_1.toLowerCase().indexOf(search) != -1) ||
                        (item.detail_2 && item.detail_2.toLowerCase().indexOf(search) != -1) ||
                        (item.url && item.url.toLowerCase().indexOf(search) != -1) ||
                        (item.desc && item.desc.toLowerCase().indexOf(search) != -1);
                });
                if (!section.filteredItems.length) $scope.totalFilteredSections --; 
            });
        };

        $scope.cancelSearch = function(){
            $scope.searchQuery.value = ''; 
            $scope.load(); 
        };

        $scope.itemClickHandler = function(item){
            //Nothing to do but fire the event
            _router.fireEvent({
                name: 'itemClick',
                params: {
                    item: item
                }
            })
        };

    }]);

},{}]},{},[1]);
