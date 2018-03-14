'use strict';
(function(){

class ServiciosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('servicios', {
    templateUrl: 'app/servicios/servicios.html',
    controller: ServiciosComponent
  });

})();
