/*****************************************************************************/
/* Tests Publish Functions
/*****************************************************************************/

Meteor.publish('tests', function () {
  // you can remove this if you return a cursor
  this.ready();
});
