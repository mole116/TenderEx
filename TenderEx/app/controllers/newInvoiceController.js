'use strict';

app.controller('newInvoiceController', ['$scope', '$location', '$http', 'invoiceService', function ($scope, $location, $http, invoiceService) {
    $scope.jobsArr = [];

    $scope.invoice = {
        id: "",
        companyName: "",
        date: "",
        total: 0,
        totalWithVat: 0,
        jobs: []
    };
    $scope.totalSum = function () {
        var sum = 0;
        if ($scope.jobsArr.length == 0)
            return 0;
        for (var i = 0; i < $scope.jobsArr.length; i++) {
            sum += $scope.jobsArr[i].totalPerJob;
        }
        $scope.invoice.total = sum;
        return sum;
    }
    $scope.totalWithVatCalc = function () {
        var withVat = $scope.invoice.total * 1.18;
        $scope.invoice.totalWithVat = withVat;
        return withVat;
    }
    //$scope.newJob = $scope.invoice.jobs.push
    $scope.addJob = function () {
        $scope.jobsArr.push({
            jobName: '',
            hours: 0,
            pricePerHour: 0,
            remark: '',
            totalPerJob: 0
        });
    };



    $scope.calculateJob = function (idx) {
        var result = idx.hours * idx.pricePerHour;
        idx.totalPerJob = result;
        return result;
    }
    $scope.saveInvoice = function () {
        $scope.invoice.jobs = $scope.jobsArr;
        $http.post("/api/Invoice/", $scope.invoice)
        .success(function (data, status, headers, config) {
            invoiceService.pushInvoiceId($scope.invoice.id);
            alert(data);
            $location.path('/home');
        })
        .error(function (data, status, headers, config) {
            if (status == 400)
                alert(data.Message);
            else
                alert(status);
            $location.path('/home');
        });
    }
}]);