'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Not-Found', {
        url: '/Not-Found',
        template: '<not-found></not-found>'
      });
  });
