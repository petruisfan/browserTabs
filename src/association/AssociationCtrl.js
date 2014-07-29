(function(app){
    "use strict";

    var AssociationCtrl = function($scope, AssociationService) {
        $scope.associations = AssociationService.query();

        $scope.tabs = [];
        $scope.activeTab = 0;

        var insertNewTab = function() {
            var newTab = {
                title: "New Association",
                href: "#/association"
            };
            return $scope.tabs.push(newTab);
        };

        insertNewTab();

        $scope.addNewTab = function() {
            var index = insertNewTab();
            $scope.activeTab = index - 1;
        };

        $scope.activateTab = function(index) {
            $scope.activeTab = index;
        };

        $scope.closeTab = function(index) {
            if ( $scope.tabs.length > 1 ) {
                $scope.tabs.splice(index,1);
            }
        };
    };
    AssociationCtrl.$inject = ["$scope", "AssociationService"];

    app.controller("AssociationCtrl", AssociationCtrl);
}(angular.module("app")))