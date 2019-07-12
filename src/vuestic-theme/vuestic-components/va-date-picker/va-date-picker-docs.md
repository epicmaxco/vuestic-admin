# Date Pickers

```html
<va-date-picker
  :config="{mode: 'multiple'}"
  v-model="date"
  label="Pick dates"
/>
```

**Props**
* `value` - defines selected date
* `weekDays` - Boolean - use `:weekDays="true"` to add panel with days of week
* `placeholder` - String - set input placeholder
* `label` - String - set input label
* `disabled` - Boolean - set input disabled
* `error` - Boolean - change input color to `danger`
* `success` - Boolean - change input color to `success`
* `messages` - Array - use to show info messages
* `errorMessages` - Array - use to show errors
* `config` - Object - use config to change datepicker options

More information - [flatpickr docs](https://flatpickr.js.org/options/)

