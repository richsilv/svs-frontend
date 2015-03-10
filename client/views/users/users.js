/*****************************************************************************/
/* Users: Event Handlers and Helpers */
/*****************************************************************************/
Template.Users.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click [data-action="add-user"]': function(evt, tmp) {
    var email = tmp.$('[data-field="email"]').val();

    if (email) Meteor.call('addUser', email, function(err, id) {
      if (err) toastr.error(err.message, 'Error!');
      else toastr.success('New user added with id: ' +
                          id + '. They will receive an email containing ' +
                          'their password shortly.', 'Success');
    });
  }
});

Template.Users.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Users: Lifecycle Hooks */
/*****************************************************************************/
Template.Users.created = function () {
};

Template.Users.rendered = function () {
};

Template.Users.destroyed = function () {
};

Template.adminIcon.helpers({
  isAdmin: function() {
    var user = Template.currentData();
    return user.roles && user.roles.indexOf('admin') > -1;
  },
  isDisabled: function() {
    var user = Template.currentData();
    return (Meteor.userId() === user._id) ? 'disabled' : '';
  }
});

Template.adminIcon.events({
  'click': function() {
    if (Meteor.userId() === this._id) return false;
    Meteor.call('flipAdmin', this._id, function(err) {
      if (err)
        toastr.error(err.message, 'Error!');
    });
  }
});

Template.removeIcon.helpers({
  isDisabled: function() {
    var user = Template.currentData();
    return (Meteor.userId() === user._id) ? 'disabled' : '';
  }
});

Template.removeIcon.events({
  'click': function() {
    var userId = this._id;
    if (Meteor.userId() === this._id) return false;
    SemanticModal.confirmModal({
      header: 'Confirm',
      message: 'Are you sure you want to remove this user?',
      callback: function() {
        Meteor.call('removeUser', userId, function(err) {
          if (err)
            toastr.error(err.message, 'Error!');
        });
      }
    });
  }
});
