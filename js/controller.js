'use strict';

function storeController($scope, $scopeParams, DataService) {
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}