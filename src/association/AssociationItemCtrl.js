(function(app){
    "use strict";

    app.controller("AssociationItemCtrl", function($scope, $stateParams, AssociationService) {
        $scope.id = +$stateParams.item;

        $scope.association = AssociationService.get($scope.id);

        var setTab = function(association) {
            $scope.tabs[$scope.activeTab].title = association.name;
            $scope.tabs[$scope.activeTab].href = "#/association/" + association.id;
        };

        setTab($scope.association);
    });
}(angular.module("app")));