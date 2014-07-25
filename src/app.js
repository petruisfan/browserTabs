"use strict";

var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {url: "/", templateUrl: "src/home/homepage.html"})
        .state("association", {url: "/association", templateUrl: "src/association/associationTab.html", controller: "AssociationCtrl"})
        .state("association.item", {url: "/:item", templateUrl: "src/association/associationItem.html", controller: "AssociationItemCtrl"});
})