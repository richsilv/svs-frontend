TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Users = new Tabular.Table({
  name: 'Users',
  collection: Meteor.users,
  selector: function(userId) {
    if (Roles.userIsInRole(userId, ['admin']))
      return {};
    else
      return {_id: userId};
  },
  columns: [
    {
      data: 'emails',
      title: 'Email',
      render: function(val) {
        return val && val.length && val[0].address;
      }
    },
    {
      data: 'createdAt',
      title: 'Created At',
      render: function(val) {
        return moment(val).format(' HH:mm:ss, ddd DD-MMM-YY');
      }
    },
    {
      data: 'roles',
      title: 'Admin?',
      tmpl: Meteor.isClient && Template.adminIcon
    },
    {
      title: 'Remove',
      tmpl: Meteor.isClient && Template.removeIcon
    }
  ]
});
