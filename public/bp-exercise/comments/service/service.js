bpExerciseApp.service('CommentsService', function($http) {
  this.List = () => {
    return $http({
      url: '/comments',
      method: 'GET'
    }).then((results) => results.data);
  }
});
