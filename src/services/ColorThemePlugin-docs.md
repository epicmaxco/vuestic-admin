# ColorThemePlugin

This plugin provides app-wide colors.

You can define your own colors or change existing ones by providing them via plugin options:

```js
Vue.use(ColorThemePlugin, {themes: {primary: '#f06595', blurple: '#7289DA'}})
```

And you can use them in component code or template like this:

**Component**
```js
this.$themes.primary
```

**Template**
```html
<div :style="{backgroundColor: $themes.blurple}"/>
```
