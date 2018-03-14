'use strict';
(function(){

class ContactoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('contacto', {
    templateUrl: 'app/contacto/contacto.html',
    controller: ContactoComponent
  });

})();
