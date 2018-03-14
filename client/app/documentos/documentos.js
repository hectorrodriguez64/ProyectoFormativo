'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentos', {
        url: '/documentos',
        template: '<documentos></documentos>',
        parent:'dashboard-user'
      });
  });
