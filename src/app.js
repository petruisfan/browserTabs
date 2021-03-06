(function(){
    "use strict";

    var app = angular.module("app", ["ui.router"]);

    var appConfig = function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider.state("home", {url: "/", templateUrl: "src/home/homepage.html"})
            .state("association", {url: "/association", templateUrl: "src/association/associationTab.html", controller: "AssociationCtrl as association"})
            .state("association.item", {url: "/:item", templateUrl: "src/association/associationItem.html", controller: "AssociationItemCtrl"});
    };
    appConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    app.config(appConfig);
}());