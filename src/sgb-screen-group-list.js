'use strict';

angular.module('sgb-screen-group-list', ['megazord'])
    .controller('sgb-screen-group-list-controller', ['_router', '_screenParams','$stateParams', '$scope', 'lodash', function(_router, _screenParams, $stateParams, $scope, _){
        $scope.title = _screenParams.title || 'group_list_title';
        $scope.sections = $stateParams.data;
        _screen.init($scope, _screenParams);
        $scope.stylesheet = _screenParams.stylesheet

        $scope.items = $scope.sections.items;
        $scope.searchQuery = "";
        $scope.filteredItems = $scope.items;
        $scope.showSearch = typeof(_screenParams.showSearch) === 'undefined'? true : _screenParams.showSearch;

        $scope.itemSearchHandler = function(){};

        $scope.itemSearchCancelHandler = function(){};

        $scope.filterItems = function(searchQuery){
            var search = searchQuery.toLowerCase();
            $scope.filteredItems = _.filter($scope.items, function(item){
                return (item.title && item.title.toLowerCase().indexOf(search) != -1) ||
                    (item.detail1 && item.detail1.toLowerCase().indexOf(search) != -1) ||
                    (item.detail2 && item.detail2.toLowerCase().indexOf(search) != -1) ||
                    (item.url && item.url.toLowerCase().indexOf(search) != -1);
            });
        };

        $scope.cancelSearch = function(){
            $scope.searchQuery = "";
            $scope.filteredItems = $scope.items;
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