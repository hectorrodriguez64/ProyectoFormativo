'use strict';
(function(){

class NotFoundComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('notFound', {
    templateUrl: 'components/Not-Found/Not-Found.html',
    controller: NotFoundComponent
  });

})();
