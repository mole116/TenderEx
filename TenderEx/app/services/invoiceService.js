'use strict';

app.factory('invoiceService', [function ($http, $q, localStorageService) {

    var invoiceIDs = [];
    var invoiceServiceFactory = {};


    var _pushInvoiceId = function (id) {
        invoiceIDs.push(id);
    }

    invoiceServiceFactory.invoiceIDs = invoiceIDs;
    invoiceServiceFactory.pushInvoiceId = _pushInvoiceId;

    return invoiceServiceFactory;

}]);