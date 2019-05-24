# Popovers

```html
<va-popover
  title="Popover title"
  message="Popover text"
  placement="bottom"
>
 <span>Hover Me</span>
</va-popover>

<va-popover
  title="Popover title"
  message="Popover text"
  placement="bottom"
  icon="fa fa-gear"
  color="danger"
>
 <span>Hover Me</span>
</va-popover>

<va-popover
  title="Popover title"
  message="Popover text"
  placement="bottom"
  trigger="click"
>
 <span>Click Me</span>
</va-popover>
```  

**Props**
* `open` - Boolean - shows or hide the popover
* `icon` - String - use `icon="fa fa-gear"` to set the icon of the popover.
* `message` - String - text to be displayed in the popover
* `title` - String - text to be displayed in the popover title
* `disabled` - Boolean - on mobile, you can disable the tooltips with the VTooltip.enabled property
* `placement` - String (default: 'bottom') - place, where tooltip text is situated.
* `trigger` - String (default: 'hover') - typeof event triggering the popover. (Possible triggers: 'hover', 'click', 'focus', 'manual').
* `color` - String (default: 'success') - use this property to set the color of the popover. We can choose one color from a set of theme colors (primary, secondary, info, error, warning)
* `autoHide` - Boolean (default: true) - automatically close the tooltip on mouseover.

More information - [v-tooltip docs](https://github.com/Akryum/v-tooltip)!
