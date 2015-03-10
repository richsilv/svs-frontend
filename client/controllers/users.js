UsersController = RouteController.extend({
  subscriptions: function () {
    return [
      Meteor.subscribe('users')
    ];
  },

  data: function () {
  },

  onBeforeAction: function() {
    if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) this.redirect('/');
    this.next();
  },

  action: function () {
    this.render();
  }
});
