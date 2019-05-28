# Checkbox

Сheckbox supports `disabled` and `checked` attributes

```html
<va-checkbox
  v-model="value"
  label="Selected"
/>
<va-checkbox
  v-model="value"
  :errorMessages="errorMessages"
  :errorCount="3"
  label="With errors"
/>
<va-checkbox
  v-model="array"
  array-value="one"
/>
```

**Props**
* `id` - String
* `name` - String
* `label` - String - label to the right of checkbox
* `value` - Boolean | Array - main value
* `arrayValue` - Any
* `disabled` - Boolean
* `readonly` - Boolean
* `errorMessages` - Number - list of error messages for current input field
* `errorCount` - Number (default: 1) - shows a number of errors to display, given an array of error messages is passed
* `error` - Boolean - define whether the field is error or not

[See demo](http://vuestic.epicmax.co/#/admin/forms/form-elements)
