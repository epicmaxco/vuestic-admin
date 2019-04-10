```html
  <va-tree-view
    showIcons
    :vuesticTreeRoot="treeViewRoot"
  />
```

```javascript
import VaTreeViewRootMapper from '~vuestic-admin/src/vuestic-theme/vuestic-components/va-tree-view/VaTreeRootMapper.js'

  data () {
    vuesticTreeRoot: VaTreeRootMapper.map([
      {
        label: 'Open category',
        isOpen: true,
        children: [
          {
            label: 'Custom icon',
            icon: 'ion ion-md-flower'
          },
          {
            label: 'Selected',
            selected: true
          },
          {
            label: 'Nested category',
            children: [
              {
                label: 'Nested item',
              }
            ]
          }
        ]
      },
      { label: 'Another item' },
    ])
  }
```

* **showIcons**: _boolean_ -- Show icons. This applies to custom icons as well
* **vuesticTreeRoot**: _VaTreeRoot_ -- Object representing the tree view. You can expose it and modify externally. Tree will follow the changes.

[Find DEMOs here!](https://vuestic.epicmax.co/#/ui/tree-view)


