'use strict';

angular.module('sgb-screen-group-list', ['megazord'])
    .controller('sgb-screen-group-list-controller', ['_router', '_screenParams', '_screen','$stateParams', '$scope', 'lodash',
                 function(_router, _screenParams, _screen, $stateParams, $scope, _){

        _screen.initialize($scope, _screenParams);

        $scope.sections = $stateParams.data;
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

