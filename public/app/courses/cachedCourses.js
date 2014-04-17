app.factory('cachedCourses', function(CourseResource) {
    var cachedCourses;

    return {
        query: function() {
            if (!cachedCourses) {
                cachedCourses = CourseResource.query();
            }

            return cachedCourses;
        }
    }
});