angular.module('stateModule', []).controller('stateController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    //variable ------------
    var u_state;

    /*------------------------------------------------------------
    ------> function to Refresh the Distict Data
    */
    $scope.refresh_State_Data = function () {
        $scope.date_time = new Date();
        $http.get('https://api.covid19india.org/state_district_wise.json').then(function (res) {
            console.warn(res.data);
            $scope.state_data = res.data;
            $localStorage.state_data_storage = res.data;
        });
    };

    /*------------------------------------------------------------
    ------> function to get Distict from the Enter State
    */
    $scope.get_state_data = function () {
        if ($scope.User_state == null | $scope.User_state == "") {
            alert('Please Enter State');
        } else if ($localStorage.state_data_storage) {
            u_state = $scope.User_state;
            var state_data = $localStorage.state_data_storage;
            $scope.distict = state_data[$scope.User_state].districtData;
        }
    };

    /*------------------------------------------------------------
    ------> function to get Caseses Data from selected District
    */
    $scope.get_distict_data = function (key) {
        $scope.district = key;
        if ($localStorage.state_data_storage) {
            $scope.data = $localStorage.state_data_storage[u_state].districtData[key];
        }
    };
}]);