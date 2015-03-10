/*****************************************************************************/
/* Users Publish Functions
/*****************************************************************************/

Meteor.publish('users', function () {
  if (Roles.userIsInRole(this.userId, ['admin'])) return Meteor.users.find();
  else this.ready();
});
