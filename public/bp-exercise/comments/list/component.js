function ListController(CommentsService) {
  const vm = this;
  vm.comments = [];
  CommentsService.List().then((comments) => {
    vm.comments = comments;
  });
}

ListController.$inject = ['CommentsService'];

bpExerciseApp.component('commentsList', {
  controller: ['CommentsService', ListController],
  templateUrl: 'bp-exercise/comments/list/list.html'
});
