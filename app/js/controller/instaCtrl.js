socialApp.controller('instaCtrl', function($scope, $http, $log, $window, $rootScope, $auth, instaService) {

    var localUser = $window.localStorage.currentUser;

    if (localUser) {
        localUser = JSON.parse($window.localStorage.currentUser);
        $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }

    $scope.isAuthenticated = function() {
        //$log.info($auth.isAuthenticated());
        return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
        $auth.link('instagram')
            .then(function(response) {
                $window.localStorage.currentUser = JSON.stringify(response.data.user);
                $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            });
    };

    $scope.logout = function() {
        localStorage.removeItem('currentUser');
        location.reload();
    };


    /*if ($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
        instaService.getFeed().success(function(data) {
            $scope.photos = data;
        });
    }*/

    //linkInstagram();

});
