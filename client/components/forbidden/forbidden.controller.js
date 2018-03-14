'use strict';

(function() {

  class ForbiddenComponent {

    constructor() {

    }

  }

  angular.module('startUpApp')
    .component('forbidden', {
      templateUrl: 'components/forbidden/forbidden.html',
      controller: ForbiddenComponent
    });
})();
