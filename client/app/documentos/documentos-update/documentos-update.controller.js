'use strict';
(function(){

class DocumentosUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('documentosUpdate', {
    templateUrl: 'app/documentos/documentos-update/documentos-update.html',
    controller: DocumentosUpdateComponent
  });

})();
