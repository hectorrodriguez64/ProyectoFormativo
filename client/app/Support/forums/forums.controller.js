'use strict';
(function(){

class ForumsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('forums', {
    templateUrl: 'app/Support/forums/forums.html',
    controller: ForumsComponent
  });

})();
