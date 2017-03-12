const component = {
  templateUrl: './bp-exercise/bp-exercise.html'
};

const APP_NAME = 'bigpanda.exercise';

const bpExerciseApp = angular.module(APP_NAME, [
  'ui.gravatar'
]);

bpExerciseApp.component('bpExercise', component)
