'use strict';

(function() {

  class DashboardUserComponent {
    constructor(AuthService, usuariosService) {
      this.show = true;
      this.AuthService = AuthService;
      this.usuariosService = usuariosService;
    }
    $onInit() {
      this.usuariosService.get({
          id: this.AuthService.idUsuario()
        }).$promise
        .then(response => {
          this.usuario = response;
          console.log("usuario", this.usuario);
        })
        .cacth(err => {
          console.log("ERR", err);
        })

      this.imgPerfil = this.AuthService.getImagePerfil();
      console.log("IMG Perfil ", this.imgPerfil);
      this.idUsuario = this.AuthService.idUsuario();
      console.log('idDelUsuario', this.idUsuario);
    }
    ocultar() {
      if (this.show) {
        this.clase = 'ocultar';
        this.show = false;
      } else {
        this.mostrar();
        this.show = true;
      }
    }

    mostrar() {
      this.clase = 'mostrar';
    }
    getPicSrc() {
      return localStorage.getItem('newPicture') ? localStorage.getItem('newPicture') : this.AuthService.getImagePerfil();
    }
  }
  angular.module('startUpApp')
    .component('dashboardUser', {
      templateUrl: 'app/dashboard/dashboard-user/dashboard-user.html',
      controller: DashboardUserComponent,
      controllerAs: 'vm'
    });

})();
