'use strict';
(function() {

  class ProfileUpdateComponent {
    constructor($q, $state, Upload, API, AuthService, usuariosService, ciudadesService, countriesService, tiposDocumentosService, departamentsService, $stateParams, localStorageService) {
      this.usuariosService = usuariosService;
      this.ciudadesService = ciudadesService;
      this.countriesService = countriesService;
      this.tiposDocumentosService = tiposDocumentosService;
      this.departamentsService = departamentsService;
      this.$stateParams = $stateParams;
      this.localStorageService = localStorageService;
      this.$q = $q;
      this.$state = $state;
      this.Upload = Upload;
      this.API = API;
      this.AuthService = AuthService;

      this.user = {
        idCities: {

        }
      };
    }

    $onInit() {
      this.imgPerfil = this.AuthService.getImagePerfil();
      console.log("IMG Perfil ", this.imgPerfil);
      this.idUsuario = this.AuthService.idUsuario();
      console.log('idDelUsuario', this.idUsuario);

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

      console.log('IdUserLogin', this.AuthService.idUsuario());
      this.usuariosService.get({
          id: this.AuthService.idUsuario()
        }).$promise
        .then(response => {
          this.user = response;
          console.log(this.user);
        })
        .catch(err => console.error(err));
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
        this.user.cities.id = item.id;
        console.log('Usuario ', this.user);
      }

    }
    getCiudades() {
      this.ciudadesService.getCiudades({
          idDepartament: this.idDepartament
        }).$promise
        .then(response => {
          this.ciudades = response;
        })
        .catch(err => console.error(err));
    }

    updateUser() {
      this.usuariosService.update({
          id: this.user.id
        }, this.user).$promise
        .then(response => {
          console.log("Usuario actualizado")
          this.$state.go('profile');
        })
        .catch(err => console.error(err));
    }

    create(from) {
      this.Upload.upload({
        url: this.API + '/api/upload',
        data: {
          'file': this.file,
          'idUser': this.idUsuario
        }
      }).then(function(resp) {
        console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        console.log('OK');
        localStorage.setItem('newPicture', resp.config.data.file.name);
      }, function(resp) {
        console.log('Error status: ' + resp.status);
      }, function(evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
    }

    getPicSrc() {
      return localStorage.getItem('newPicture') ? localStorage.getItem('newPicture') : this.AuthService.getImagePerfil();
    }


  }

  angular.module('startUpApp')
    .component('profileUpdate', {
      templateUrl: 'app/profile/profile-update/profile-update.html',
      controller: ProfileUpdateComponent,
      controllerAs: 'vm'
    });
})();
