'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-list', {
        url: '/usuarios-list',

        template: '<usuarios-list></usuarios-list>'
      })
      .state('usuarios-create', {
        url: '/usuarios-create',
        template: '<usuarios-create></usuarios-create>'
      })
      .state('usuarios-update', {
        url: '/usuarios-update',
        template: '<usuarios-update></usuarios-update>'
      });
  });
