'use strict';
(function(){

class CompanyListComponent {
  constructor(companyService) {
    this.companyService = companyService;

    this.selected = [];

    this.query = {
      order: 'name',
      limit: 2,
      page: 2
    };
  }
  $onInit(){
    this.companyService.query().$promise
    .then(response => {
      console.log('Company OK',response);
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
CompanyListComponent.$inject = ['companyService'];
angular.module('startUpApp')
  .component('companyList', {
    templateUrl: 'app/company/company-list/company-list.html',
    controller:CompanyListComponent,
    controllerAs:'vm'
  });
})();
