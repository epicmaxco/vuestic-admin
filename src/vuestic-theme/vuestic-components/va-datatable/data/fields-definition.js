export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'name',
      sortField: 'name',
      width: '24%',
    },
    {
      name: 'email',
      sortField: 'email',
      width: '24%',
    },
    {
      name: 'address.line2',
      title: 'city',
      width: '24%',
    },
    {
      name: 'salary',
      title: 'score',
      width: '24%',
    },
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'email': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
