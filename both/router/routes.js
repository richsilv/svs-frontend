/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

AccountsTemplates.configureRoute('enrollAccount', {
    name: 'enroll',
    path: '/enroll',
    template: 'Enroll',
    layoutTemplate: 'MasterLayout',
    redirect: '/users'
});

AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'Login',
    layoutTemplate: 'MasterLayout',
    redirect: '/'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('tests-page', {path: '/tests'});
  this.route('home', {path: '/'});
  this.route('users', {path: '/users'});
  this.route('settings', {path: '/settings'});
});

Router.plugin('ensureSignedIn');
