### Limitations

For now we focus on bare-bones tabs and make them solid.

* Only one style option.
* There is no content, only tabs themselves.
* Tabs are positioned only on top.
* Scroll is native scroll. No fancy arrows or custom scroll.

### Template

```html
<va-tabs v-model="tabValue">
  <va-tab
    v-for="title in tabTitles"
    :key="title"
  >
    {{title}}
  </va-tab>
</va-tabs>
```

### Props

#### Component: va-tabs

* `value` - Number  - selected tab index.
* `right` - Boolean - align right.
* `center` - Boolean - align center.
* `grow` - Boolean - tabs will take full width.
* `hideSlider` - Boolean - hide slider.

#### Component: va-tab

Has no props.
