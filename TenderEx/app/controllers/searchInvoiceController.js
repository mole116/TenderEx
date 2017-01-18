'use strict';

app.controller('searchInvoiceController', ['invoiceService', '$http', '$scope', '$location', function (invoiceService, $http, $scope, $location) {
    $scope.invoicesIDs = [];
    $scope.invoicesIDs = invoiceService.invoiceIDs;
    $scope.invoiceWasDownloaded = false;
    $scope.invoice = {};

    $scope.addInvoice = function () {
        $location.path('/newInvoice');
    }

    $scope.getInvoice = function (invoiceID) {
        $http.get("/api/Invoice/"+invoiceID)
        .success(function (data, status, headers, config) {
            $scope.invoice = data;
            $scope.invoiceWasDownloaded = true;
        })
        .error(function (data, status, headers, config) {
            if ((status == 400) || (status == 409))
                alert(data.Message);
            else
                alert(status);
            $scope.invoiceWasDownloaded = false;
        });
    }
}]);