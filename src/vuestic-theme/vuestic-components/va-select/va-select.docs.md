#Select
```html
<va-select
  :options="options"
  v-model="value"
  label="Country"
  placeholder="Select country"
  clearable="false"
/>

<va-select
  :options="options"
  v-model="value"
  multiple
  searchable
/>
```

**Props**

* `value` - String|Array
* `label` - String - label of select
* `placeholder` - String - placeholder of select
* `options` - Array (default: []) - list of select options. You can use strings or objects as an option. See the object option structure below. 
* `position`: String (default: 'bottom') - direction of select open (one of these values: 'bottom', 'top'),
* `multiple` - Boolean (default: false) - changes select to multiple
* `tagMax` - Number (default: 5) - the max number of chips, when the number of selected items is bigger then max, there is only text '6 items selected'
* `searchable` - Boolean (default: false) - if set true, input can be edited and options are filter automatically by inputted text
* `disabled` - Boolean (default: false) - disable the select
* `readonly` - Boolean (default: false) - puts input in readonly state 
* `width` - String (default: 100%) - the width of the select
* `maxHeight` - String (default: 128px) - the maximum height of the select
* `noOptionsText` - String (default: 'Items not found') - set the custom text, if there are no options in select     
* `fixed` - Boolean (default: true) - Fixed dropdown works fine even if container is `position: relative; overflow: hidden`
* `error` - Boolean (default: false) - Sets error state
* `success` - Boolean (default: false) - Sets the success state

***Option***

* `text` - String - displayed text of option. Field name can be changed by `text-by` prop
* `icon` - String
* `id` - String | Number - option key. Field name can be changed by `key-by` prop
