'use strict';

(function(){

class CiudadesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('ciudades', {
    templateUrl: 'app/ciudades/ciudades.html',
    controller: CiudadesComponent,
    controllerAs: 'vm'
  });

})();
