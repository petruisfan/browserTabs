(function(app){
    "use strict";

    var AssociationItemCtrl = function($scope, $stateParams, AssociationService) {
        $scope.id = +$stateParams.item;

        $scope.association = AssociationService.get($scope.id);

        var setTab = function(association) {
            $scope.tabs[$scope.activeTab].title = association.name;
            $scope.tabs[$scope.activeTab].href = "#/association/" + association.id;
        };

        setTab($scope.association);
    };

    AssociationItemCtrl.$inject = ["$scope", "$stateParams", "AssociationService"];

    app.controller("AssociationItemCtrl", AssociationItemCtrl);
}(angular.module("app")));