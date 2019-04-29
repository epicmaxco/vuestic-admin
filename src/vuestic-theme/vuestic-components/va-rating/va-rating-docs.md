# VaRating

```html
<va-rating
  :max="6"
  size="30px"
  color="red"
  emptyIcon="fa fa-star-o"
  halfIcon="fa fa-star-half-full"
  v-model="value"
/>
```

**Props**
* `icon` - String (default: 'fa fa-star') - icon for full selected rating item.
* `halfIcon` - String (default: 'fa fa-star-half-full') - icon for half selected rating item
* `emptyIcon` - String - icon for not selected rating item
* `value` - Number (default: 1) - rating value (could be like `2.5` for halves).
* `readonly` - Boolean
* `disabled` - Boolean
* `numbers` - Boolean - makes `va-rating` use numbers instead of icons
* `max` - Number (default: 5) - max number of rating items
* `size` - String (default: 'medium') - use this property to set items size in rating. You can use preset values (`"medium"`, `"large"`, `"small"`) or define exact size: `"30px"`.
* `color`- String (default: #4ae387) - theme or color
