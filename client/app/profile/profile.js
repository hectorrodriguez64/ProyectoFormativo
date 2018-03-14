'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: '<profile></profile>'
    })
       .state('profile-update', {
        url: '/profile-update',
        template: '<profile-update></profile-update>'
      })
      .state('change-password', {
      url: '/change-password',
      template: '<change-password></change-password>'
    });
});
