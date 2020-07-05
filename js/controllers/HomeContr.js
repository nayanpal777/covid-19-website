angular.module('HomeContr', []).controller('HomeController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    /*------------------------------------------------------------
    ------> function to check data present in localStorage or Not
    */
    $scope.getdatainfo = function () {
        if ($localStorage.datastorage) {
            $scope.data = $localStorage.datastorage;
            var date = $scope.data.Date;
            date = new Date(date);
            $scope.date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            $scope.time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        } else {
            $http.get('https://api.covid19api.com/summary').then(function (res) {
                $scope.data = res.data;
                $localStorage.datastorage = res.data;
                alert('Data Updated');
            });
        }
    };
    /*----------------------------------------------------------
    ------> function to refresh Data
    */
    $scope.refreshData = function () {
        $http.get('https://api.covid19api.com/summary').then(function (res) {
            $scope.data = res.data;
            $localStorage.datastorage = res.data;
            $scope.getdatainfo();
            alert('Data Refresh');
        });
    };
    /*----------------------------------------------------------
    ------> function to Order the Data
    */
    $scope.orderbyme = function (item) {
        $scope.item = item;
    }
}]);