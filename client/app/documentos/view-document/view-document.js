'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view-document', {
        url: '/view-document',
        template: '<view-document></view-document>',
        parent:'dashboard-user'
      });
  });
