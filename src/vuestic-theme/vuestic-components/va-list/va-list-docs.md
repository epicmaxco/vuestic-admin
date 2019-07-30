# VaList
Easy-to-use List component with support for icons, avatars, item selection.

```html
<va-list fit>
  <va-list-label color="primary">
    Customers
  </va-list-label>

  <va-item clickable to="/foo/1" @click="notify">
    <va-item-section side>
      <va-icon name="fa fa-star" />
    </va-item-section>

    <va-item-section avatar>
      <va-avatar>
        <img src="path">
      </va-avatar>
    </va-item-section>

    <va-item-section>
      <va-item-label>
        Add profile images
      </va-item-label>

      <va-item-label caption>
        You can use PNG or JPG files.
      </va-item-label>
    </va-item-section>
  </va-item>
</va-list>
```

**VaList Props**
* `fit` - Boolean - full width

**VaItem Props**
* `clickable` - Boolean - make list items clickable
* `to` - String - use item as router-link

**VaListLabel Props**
* `color`- String (default: info) - theme or color

**VaItemSection Props**
* `avatar`- Boolean - reserve space for an avatar (48px)
* `side`- Boolean - reserve space for an icon / action (24px)

**VaItemLabel Props**
* `caption`- Boolean - smaller (caption) text
