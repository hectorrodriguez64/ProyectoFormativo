'use strict';
(function() {

  class UsuariosCreateComponent {
    constructor(usuariosService, tiposDocumentosService, ciudadesService, $state, departamentsService, toastr) {
      this.usuariosService = usuariosService;
      this.ciudadesService = ciudadesService;
      this.tiposDocumentosService = tiposDocumentosService;
      this.departamentsService = departamentsService;
      this.$state = $state;
      this.showValidaDocumento = false;
      this.showHints = true;
      this.toastr = toastr;
      this.carga = true;

      this.user = {
        idCities: {
          
        }
      };

    }

    $onInit() {
      this.tiposDocumentosService.query().$promise
        .then(response => {
          console.log('Estos son los tipos de documentos ', response);
          this.tipoDocumento = response;
        })
        .catch(err => {
          console.log('ERROR', err);
        });

      this.ciudadesService.query().$promise
        .then(response => {
          console.log('Lista de ciudades', response);
          this.ciudad = response;
        })
        .catch(err => {
          console.log('ERROR', err);
        });

      this.departamentsService.query().$promise
        .then(response => {
          this.departamentsList = response;
          console.log('departamentos ', this.departamentsList);
        })
        .catch(err => {
          console.log(err, 'Error');
        });

      if (!localStorage.respuestaModal)
        $('#pwdModal').modal();
    }

    createUser() {
      this.user.active = true;
      console.log(this.user);
      this.isLoading = true;
      console.log(this.isLoading);
      this.usuariosService.save(this.user).$promise
        .then(response => {
          this.isLoading = false;
          console.log('CREATE OK', response);
          this.toastr.success('Cuenta creada Con exito', {
            progressBar: true,
            closeButton: true
          });
          this.carga = false;
          this.$state.go('login');
        })
        .catch(err => {
          this.toastr.error('Error al crear cuenta', {
            progressBar: true,
            closeButton: true
          });
          this.isLoading = false;
          console.log('ERROR', err);
        });
        console.log(this.user);
    }
    querySearch(searchText) {
      return this.ciudadesService.getCiudades({
          nombre: searchText
        }).$promise
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
        this.user.idCities = item;
        console.log('Usuario ', this.user);
      }

    }

    getCiudades() {
      console.log(this.idDepartaments);
      this.ciudadesService.getCiudades({
          idDepartaments: this.idDepartaments
        }).$promise
        .then(response => {
          console.log('Ciudades', response);
          this.ciudad = response;
        })
        .catch(err => console.error(err));
    }
  }


  UsuariosCreateComponent.$inject = ['usuariosService', 'tiposDocumentosService', 'ciudadesService', '$state', 'departamentsService', 'toastr'];
  angular.module('startUpApp')
    .component('usuariosCreate', {
      templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
      controller: UsuariosCreateComponent,
      controllerAs: 'vm'
    });

})();
