### Key points
* We want to use external positioning library, like `popper.js`.
* This dropdown is not user-friendly component and is supposed to be used in scope of another component.
* This dropdown can be used as tooltip, popover etc. 
* This dropdown is not used as modal or notification, as those two implement different and much simpler logic for positioning.

### Template

```html
<div> <!-- dropdown root -->
  <div> <!-- activator -->
    <!-- activator slot -->
  </div>
  <div> <!-- content -->
     <!-- content slot -->
  </div>
</div>
```

### Props

* `trigger`: ['hover', 'click', 'none'] - default: 'click'

For `trigger` prop we provide only 2 options because these are easy to implement from container. In contrast, `focus` is tricky to implement from container and is simpler to handle from parent component.

For `hover` dropdown is shown only on hover, click does nothing.
For `click` dropdown is shown on click and we handle click outside.
For `none` no external handling is done. Instead we provide a prop `value` and a some events: `click`, `clickOutside`.

* `isContentHoverable` - Boolean - default: `true`. Setting to false is useful for tooltips, where hanging dropdown become an obstacle.
* `position` - String - default: 'bottom'. Appropriate values are 'top', 'bottom', 'left', 'right', 'auto', 'top-start', 'top-end' (and same for each direction). See [popper.js docs](https://popper.js.org/popper-documentation.html#Popper.placements) for details.
* `fixed` - Boolean - default: `false`. Fixed dropdown works fine even if container is `position: relative; overflow: hidden`.
* `disabled` - Boolean - default: `false`. Clicks and hovers won't do a thing.
* `offset` - String - See [popper.js docs](https://popper.js.org/popper-documentation.html#modifiers..offset) for details.
* `value` - Boolean - default: `false`. Used for passing down open/close state when trigger is 'none'.

#### Props (advanced)

* `closeOnClickOutside` - Boolean - default: `true`. If set to `false`, click outside of dropdown won't close it. Useful for complex forms.
* `closeOnAnchorClick` - Boolean - default: `true`. If set to `false`, click dropdown won't close on anchor click.
* `hoverOverTimeout` - Number - default: 30. Hover dropdown will open after hovering for at least that value. Useful when you have a list with dropdowns and do not want to open every each of them on hover.
* `hoverOutTimeout` - Number - default: 200. Hover dropdown will close after that timing. Allows to move cursor to content even with gaps in-between.
* `keepAnchorWidth` - Boolean - default: `false`. Dropdown should have the same width as anchor. Useful for selects.

### Additional things

* You can close dropdown from its child components by using global method `$closeDropdown`. 

### Credits

* We use [Popper.js](https://popper.js.org/) internally. It's  great.
