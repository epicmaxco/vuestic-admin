In vuestic we expose a number of events so that you can subscribe to them without complex boilerplate. It works like this:

```html
<script>
// In component
export default {
  subs: {
    resize (resizeEvent) {
      console.log(resizeEvent)
    },
  },
}
</script>
```

Here's the events we exposed:

## Window events
* `resize` - Vanilla [window resize](https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView/resize_event).
* `resizeEnd` - Window resize with throttle. Allows to bind dom redraws without introducing lag.
