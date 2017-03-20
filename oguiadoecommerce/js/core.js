// public/core.js
var templateApp = angular.module('angularApp', []);

function contactsController($scope, $http){
    $scope.formData = {};

    $scope.sendContact = function(){
        $http.post('/contact', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.data = data.text;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }
}