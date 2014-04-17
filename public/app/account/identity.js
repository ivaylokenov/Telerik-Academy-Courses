app.factory('identity', function($window) {
    return {
        currentUser: $window.bootstrappedUserObject,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
});