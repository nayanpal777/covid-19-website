/* ***********************************************************
    Array for chart View
**************************************************************/
var chart_date = [];
var chart_cases = [];
var chart_death = [];
var chart_recoved = [];

/* ***********************************************************
    India Cases Controller
**************************************************************/
angular.module('indiaModule', []).controller('indiaController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    /*------------------------------------------------------------
    ------> function to check data present in localStorage or Not
    */
    $scope.get_india_data = function () {
        if ($localStorage.India_data_storage) {
            $scope.india_data = $localStorage.India_data_storage;
            $scope.in_date = $scope.india_data.statewise['0'].lastupdatedtime;
        } else {
            $http.get('https://api.covid19india.org/data.json').then(function (res) {
                $scope.india_data = res.data;
                $localStorage.India_data_storage = res.data;
                alert('Data Updated');
            });
        }
    };
    /*------------------------------------------------------------
    ------> function to Refresh The Data
    */
    $scope.refresh_India_Data = function () {
        $http.get('https://api.covid19india.org/data.json').then(function (res) {
            console.warn(res.data);
            $scope.india_data = res.data;
            $localStorage.India_data_storage = res.data;
            $scope.get_india_data();
            alert('Data Refresh');
        });
    };
    /*------------------------------------------------------------
        ------> function to Order the Data
        */
    $scope.orderby = function (item) {
        $scope.data_sort = item;
    }
    /*------------------------------------------------------------
    ------> function for chart Data
    */
    $scope.chartfun = function () {
        if ($localStorage.India_data_storage) {
            $scope.chart_data = $localStorage.India_data_storage;
            for (var i = 31, j = 0; i < $scope.chart_data.cases_time_series.length; i += 5, j++) {
                chart_date[j] = $scope.chart_data.cases_time_series[i].date;
                chart_cases[j] = $scope.chart_data.cases_time_series[i].totalconfirmed;
                chart_death[j] = $scope.chart_data.cases_time_series[i].totaldeceased;
                chart_recoved[j] = $scope.chart_data.cases_time_series[i].totalrecovered;
            }
        }
    };
}]);