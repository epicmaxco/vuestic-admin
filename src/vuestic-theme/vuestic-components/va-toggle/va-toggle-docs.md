# Toggle

Toggle component is conceptually similar to checkbox, but stars a different look.

```html
<va-toggle
  v-model="value"
  label="Toggle"
/>
<va-toggle
  v-model="value"
  :true-value="on"
  :false-value="off"
  label="value"
/>
<va-toggle
  v-model="value"
  color="info"
  small
/>
```  

**Props**
* `value` - Boolean | String | Number - shows or hide the popover
* `label` - String - text of slot label for the toggle
* `color` - String (default: 'success') - use this property to set the color of the track. We can choose one color from a set of theme colors (primary, secondary, info, error, warning)
* `disable` - Boolean - use this property to make toggle disabled
* `small` - Boolean - use this property to set small size of toggle
* `large` - Boolean - use this property to set large size of toggle
* `true-value` - toggle gets into `true` state, when model has this value
* `false-value` - toggle gets into `false` state, when model has this value
* `tabindex` - Number - use this property to set custom tabindex

[See demo](http://vuestic.epicmax.co/#/admin/forms/form-elements)
