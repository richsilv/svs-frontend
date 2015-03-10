/*****************************************************************************/
/* UserMethods Methods */
/*****************************************************************************/

Meteor.methods({
  updateRoles: function (targetUserId, roles) {
    var loggedInUser = Meteor.users.findOne(this.userId);

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser, ['admin'])) {
      throw new Meteor.Error(403, 'Access denied');
    }

    Roles.setUserRoles(targetUserId, roles);
  },

  flipAdmin: function(targetUserId) {
    var loggedInUser = Meteor.users.findOne(this.userId);

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser, ['admin'])) {
      throw new Meteor.Error(403, 'Access denied');
    }

    var targetUser = Meteor.users.findOne(targetUserId),
        newRoles = targetUser &&
                   targetUser.roles &&
                   targetUser.roles.indexOf('admin') > -1 ? [] : ['admin'];

    Roles.setUserRoles(targetUserId, newRoles);
  },

  addUser: function (email) {
    var loggedInUser = Meteor.users.findOne(this.userId);

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser, ['admin'])) {
      throw new Meteor.Error(403, 'Access denied');
    }

    var password = Random.id(),
        id = Accounts.createUser({
          email: email,
          password: password,
          profile: { name: email }
        });

    if (id)
      Email.send({
        to: email,
        from: 'noreply@SVS-Testing',
        subject: 'Your New Password',
        text: 'You have recently been added as a new user on the SVS Testing ' +
              'site.  Your password is ' + password + ' and you can log in ' +
              'at ' + Meteor.absoluteUrl()
      });
    return id;
  },

  removeUser: function (targetUserId) {
    var loggedInUser = Meteor.users.findOne(this.userId);

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'])) {
      throw new Meteor.Error(403, 'Access denied');
    }
    console.log('target is ' + targetUserId);

    Roles.removeUsersFromRoles(targetUserId, ['admin']);
    Meteor.users.remove(targetUserId);
    return true;
  }
});
