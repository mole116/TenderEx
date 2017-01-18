'use strict';
app.controller('homeController', ['$scope', 'invoiceService', '$location', function ($scope, invoiceService, $location) {
    $scope.idsList = [];
    $scope.idsList = invoiceService.invoiceIDs;

    $scope.search = function () { $location.path('/search'); }
}]);