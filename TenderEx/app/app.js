'use strict';
var app = angular.module('TenderInvoiceEx', ['angular-loading-bar', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when('/home', {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when('/search', {
        controller: "searchInvoiceController",
        templateUrl: "/app/views/searchInvoice.html"
    });

    $routeProvider.when('/newInvoice', {
        controller: "newInvoiceController",
        templateUrl: "/app/views/newInvoice.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});