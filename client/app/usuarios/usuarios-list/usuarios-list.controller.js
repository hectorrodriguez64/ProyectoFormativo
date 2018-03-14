'use strict';
(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;

    this.selected = [];

    this.query = {
      order: 'name',
      limit: 2,
      page: 2
    };
  }
  $onInit(){
    this.usuariosService.query().$promise
    .then(response => {
      console.log('Usuarios OK',response);
      this.arreglo = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
  success(desserts) {
    this.desserts = this.desserts;
  }
}
UsuariosListComponent.$inject = ['usuariosService'];
angular.module('startUpApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs:'vm'
  });
})();
