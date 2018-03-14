'use strict';
(function() {

  class CompanyCreateComponent {
    constructor(companyService, ciudadesService, $state, departamentsService, toastr) {
      this.companyService = companyService;
      this.ciudadesService = ciudadesService;
      this.departamentsService = departamentsService;
      this.$state = $state;
      this.showValidaDocumento = false;
      this.showHints = true;
      this.toastr = toastr;
      this.carga = true;

      this.company = {
        cities: {
          id: null
        }
      };

    }

    $onInit() {
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

    createCompany() {
      this.company.active = true;
      console.log(this.company);
      this.isLoading = true;
      console.log(this.isLoading);
      this.companyService.save(this.company).$promise
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
        this.company.cities.id = item.id;
        console.log('Company ', this.company);
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


  CompanyCreateComponent.$inject = ['companyService', 'ciudadesService', '$state', 'departamentsService', 'toastr'];
  angular.module('startUpApp')
    .component('companyCreate', {
      templateUrl: 'app/company/company-create/company-create.html',
      controller: CompanyCreateComponent,
      controllerAs: 'vm'
    });

})();
