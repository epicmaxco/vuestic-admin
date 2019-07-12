### Template
```html
  <va-tree-root>
      <va-tree-category label="Electronics">
        <va-tree-node>Cellphones</va-tree-node>
      </va-tree-category>
      <va-tree-category isOpen label="Products">
        <va-tree-category label="Cables">
          <va-tree-node>Audio</va-tree-node>
          <va-tree-node>Video</va-tree-node>
          <va-tree-node>Optical</va-tree-node>
        </va-tree-category>
        <va-tree-node>Monitors</va-tree-node>
        <va-tree-node>Keyboards</va-tree-node>
      </va-tree-category>
    </va-tree-root>
```

### Props
#### Component: `va-tree-root`
* `color` - String - set a color for the hove tree
#### Component: `va-tree-category`
* `label` - String, Number - label of the category
* `isOpen` - Boolean - default state of category
* `icon` - String - set a icon before the label
* `color` - String - set a color of category switcher

#### Component: `va-tree-node`
* `hightlighted` - Boolean - highlight the label of node
* `icon` - String - name of icon at the _left_ of node
* `iconRight` - String - name of icon at the _right_ of node

###Slots 
***Components `va-tree-category`, `va-tree-node`***
* `checkbox`

[See demo](https://vuestic.epicmax.co/#/ui/tree-view)


