AccountsTemplates.configure({
    enablePasswordChange: true,
    forbidClientAccountCreation: true,
    homeRoutePath: '/tests',
    redirectTimeout: 4000,
    hideSignUpLink: true,
    showForgotPasswordLink: true
});

/*****************************************************************************/
/* Login: Event Handlers and Helpers */
/*****************************************************************************/
Template.Login.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Login.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};
