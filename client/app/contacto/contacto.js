'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacto', {
        url: '/contacto',
        template: '<contacto></contacto>'
      });
  });
