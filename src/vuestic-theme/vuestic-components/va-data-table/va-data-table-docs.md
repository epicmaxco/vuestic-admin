# VaDataTable
Powerful data-table with support for scoped-slots, sorting and pagination.
Works with the static data as well as in the api mode (server-side pagination).

```html
<va-data-table
  :fields="fields"
  :data="data"
  :per-page="5"
  :total-pages="10"
  :row-class="greyIfInactive"
  api-mode
  no-pagination
  clickable
  hoverable
  no-data-label="Nothing to display, sir!"
  loading
>
  <template slot="actions" slot-scope="props">
    {{ props.rowData }}
  </template>
</va-data-table>
```

**Props**
* `fields` - Array - column definitions.
```
[{
  name: 'name',
  title: 'Name,
}, {
  name: 'email',
  title: Email,
}, {
  name: '__slot:actions', // <- make the cell customizable via scoped slot
  dataClass: 'text-right',
}]
```
* `data` - Array - data to generate the table from.
* `perPage` - Number (default: `6`) - number of records per page.
* `totalPages` - Number - total number of the pages in `apiMode`.
* `rowClass` - Function - apply specific row class conditionally.
* `apiMode` - Boolean - if `false` - pagination and sorting are controlled by the table itself (static data mode),
  if `true` - pagination and sorting are controlled by the user (dynamic data mode).
* `noPagination` - Boolean - hide pagination.
* `clickable` - Boolean - make row clickable.
* `hoverable` - Boolean - highlight row on hover.
* `noDataLabel` - String - text placeholder for when the table is empty.
* `loading` - Boolean - display loading overlay.
