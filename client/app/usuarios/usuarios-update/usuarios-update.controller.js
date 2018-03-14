'use strict';

(function() {

  class UsuariosUpdateComponent {
    constructor(usuariosService, $stateParams, $state, ciudadesService, countriesService, tiposDocumentosService, departamentsService, NavegateParams) {
      this.usuariosService = usuariosService;
      this.ciudadesService = ciudadesService;
      this.countriesService = countriesService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.tiposDocumentosService = tiposDocumentosService;
      this.departamentsService = departamentsService;
      this.NavegateParams = NavegateParams;
    }
    getdepartaments() {
      this.departamentsService.getdepartaments({ idCountry: this.idCountry }).$promise
        .then(response => {
          this.departamentos = response;

        })
        .catch(err => console.error(err));
    }

    $onInit() {

      this.tiposDocumentosService.query().$promise
        .then(response => {
          console.log('TYPEDOCUMENT OK', response);
          this.tipoDocumento = response;
        })
        .catch(err => {
          console.log('ERROR', err);
        });
      this.countriesService.query().$promise
        .then(response => {
          this.country = response;
          console.log(this.country);
        })
        .catch(err => console.error(err));

     this.usuariosService.get({id:this.NavegateParams.getData('idUsuario')}).$promise
        .then(response => {
          console.log("Error de datos");
          this.user = response;
          console.log(this.user);
        })
        .catch(err => console.error(err));
    }

    querySearch(searchText) {
      return this.ciudadesService.getCiudades({ nombre: searchText }).$promise
        .then(response => {
          console.log("REST", response);
          return response;
        })
        .catch(err => console.log(err));
    }

    selectedItemChange(item) {
      console.log("TIEM", item);
      if (item.id != undefined) {
        console.log("Este es:", item);
        this.user.cities.id = item.id;
        console.log('Usuario ', this.user);
      }

    }

    getCiudades() {
      this.ciudadesService.getCiudades({ idDepartament: this.idDepartament }).$promise
        .then(response => {
          this.ciudades = response;
        })
        .catch(err => console.error(err));
    }

    updateUser() {
      this.usuariosService.update({ id: this.user.id }, this.user).$promise
        .then(response => {
          console.log("Usuario actualizado")
          this.$state.go('usuarios-list');
        })
        .catch(err => console.error(err));
    }

  }

  angular.module('startUpApp')
    .component('usuariosUpdate', {
      templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
      controller: UsuariosUpdateComponent,
      controllerAs: 'vm'
    });

})();
