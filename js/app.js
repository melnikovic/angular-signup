var myApp = angular.module('myApp', ['ngCookies']);

myApp.controller('SignUpCtrl', ['$scope', '$cookies', function ($scope, $cookies){

    $scope.errorMessage = '';

    $scope.submit = function(email, password) {
        $scope.registered = false;
        if(email === 'john@doe.com' && password === 'johndoe') {
            $scope.registered = true;
            $scope.errorMessage = '';
            // keep data in cookies as well for possible refresh issue on $scope
            $cookies.put('registered', true);
        }
        else $scope.errorMessage = 'To register please use username: john@doe.com and password: johndoe';
    };

    $scope.isRegistered = function(){
         return $scope.registered || $cookies.get('registered');
    }

    $scope.logout = function() {
        $scope.registered = false;
        $cookies.remove('registered');
    }

}]);

myApp.directive('equals', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, elem, attrs, ngModel) {
            if(!ngModel) return;

            scope.$watch(attrs.ngModel, function() {
                validate();
            });

            attrs.$observe('equals', function (val) {
                validate();
            });

            var validate = function() {
                var val1 = ngModel.$viewValue;
                var val2 = attrs.equals;

                ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
            };
        }
    }
});
