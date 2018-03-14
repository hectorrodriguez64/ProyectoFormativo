'use strict';

(function(){

class TiposDocumentosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('tiposDocumentos', {
    templateUrl: 'app/tipos-documentos/tipos-documentos.html',
    controller: TiposDocumentosComponent,
    controllerAs: 'tiposDocumentosCtrl'
  });

})();
