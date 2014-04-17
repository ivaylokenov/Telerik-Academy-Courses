app.controller('SignUpCtrl', function($scope, $location, auth, notifier) {
    $scope.signup = function(user) {
        auth.signup(user).then(function() {
            notifier.success('Registration successful!');
            $location.path('/');
        })
    }
});