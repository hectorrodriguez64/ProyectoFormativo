'use strict';

(function() {

  class CompanyUpdateComponent {
    constructor(companyService, $stateParams, $state, ciudadesService, countriesService, departamentsService, NavegateParams) {
      this.companyService = companyService;
      this.ciudadesService = ciudadesService;
      this.countriesService = countriesService;
      this.$stateParams = $stateParams;
      this.$state = $state;
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

      this.countriesService.query().$promise
        .then(response => {
          this.country = response;
          console.log(this.country);
        })
        .catch(err => console.error(err));

     this.companyService.get({id:this.NavegateParams.getData('idCompany')}).$promise
        .then(response => {
          console.log("Error de datos");
          this.company = response;
          console.log(this.company);
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
        console.log('Company ', this.company);
      }

    }

    getCiudades() {
      this.ciudadesService.getCiudades({ idDepartament: this.idDepartament }).$promise
        .then(response => {
          this.ciudades = response;
        })
        .catch(err => console.error(err));
    }

    updateCompany() {
      this.companyService.update({ id: this.company.id }, this.company).$promise
        .then(response => {
          console.log("Compañia actualizada")
          this.$state.go('company-list');
        })
        .catch(err => console.error(err));
    }

  }
                    
  angular.module('startUpApp')
    .component('companyUpdate', {
      templateUrl: 'app/company/company-update/company-update.html',
      controller: CompanyUpdateComponent,
      controllerAs: 'vm'
    });

})();
