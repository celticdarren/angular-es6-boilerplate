import <%= upCaseName %>Component from './<%= name %>.component';

const module = angular
  .module('<%= name %>', [])
  .component('<%= name %>', <%= upCaseName %>Component);

export default module.name;
