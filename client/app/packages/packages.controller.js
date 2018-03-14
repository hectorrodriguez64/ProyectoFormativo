'use strict';
(function(){

class PackagesComponent {
  constructor() {
    this.message = 'Hello';
  }




  
}

angular.module('startUpApp')
  .component('packages', {
    templateUrl: 'app/packages/packages.html',
    controller: PackagesComponent,
    controllerAs: 'vm'
  });

})();
