export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center',
    },
    {
      name: 'name',
      title: 'user',
      sortField: 'name',
    },
    {
      name: 'salary',
      title: 'score',
    },
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
