app.controller('CourseDetailsCtrl', function($scope, $routeParams, cachedCourses) {
    //$scope.course = CourseResource.get({id: $routeParams.id});
    $scope.course = cachedCourses.query().$promise.then(function(collection) {
        collection.forEach(function(course) {
            if (course._id === $routeParams.id) {
                $scope.course = course;
            }
        })
    })
});