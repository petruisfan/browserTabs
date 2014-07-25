"use strict";

app.controller("AssociationCtrl", function($scope, AssociationService) {
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
    }

});