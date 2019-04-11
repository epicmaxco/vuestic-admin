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
For `none` no external handling is done. Instead we provide a prop `show` and a bunch of events: `mouseover`, `mouseout`, `click`, `clickOutside`.

*  `contentHoverable`: Boolean
