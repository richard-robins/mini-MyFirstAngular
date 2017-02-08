angular.module('friendsList')
  .controller('mainCtrl', function($scope){

    $scope.friends = ['Richard', 'Richard', 'Dave', 'Chrissy', 'TK', 'Mikell'];

      $scope.addFriend = function(newFriend){
        $scope.friends.push(newFriend);
        $scope.newFriendName = '';
      }

  });
