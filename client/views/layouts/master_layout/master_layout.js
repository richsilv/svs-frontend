/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpers */
/*****************************************************************************/
Template.MasterLayout.events({
  'click [data-action="logout"]': function() {
    Meteor.logout();
  }
});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
};

Template.MasterLayout.destroyed = function () {
};
