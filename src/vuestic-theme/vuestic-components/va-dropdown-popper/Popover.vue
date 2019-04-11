<template>
  <div>
    <div ref="activator">
      <slot name="activator">Default slot</slot>
    </div>
    <div ref="popover" class="popover-container">
      <slot v-if="visible" name="popover">
        <Card>
          <slot name="popover-content">Default tooltip</slot>
        </Card>
      </slot>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js'
import Card from './Card'

export default {
  components: {
    Card,
  },
  data () {
    return {
      visible: false,
      activator: null,
      popover: null,
      popoverRendered: false,
      popperInstance: null,
    }
  },
  mounted () {
    if (!this.$slots.activator) {
      return
    }

    const parentElement = this.$el.parentNode

    this.activator = this.$refs.activator.firstChild
    parentElement.insertBefore(this.activator, this.$el)

    this.popover = this.$refs.popover
    parentElement.insertBefore(this.popover, this.$el)

    // document.body.appendChild(this.$refs.popover);
    parentElement.removeChild(this.$el)

    // this.activator.addEventListener("mouseover", this.show);
    // this.activator.addEventListener("mouseout", this.hide);
    this.activator.addEventListener('click', this.click)
  },
  watch: {
    visible () {
      // if (!this.popoverRendered) {
      //   const app = document.getElementById("app");
      //   app.appendChild(this.popover);
      //   this.popoverRendered = true;
      // }

      this.popperInstance = new Popper(this.activator, this.popover, {
        placement: 'bottom',
      })
    },
  },
  methods: {
    click () {
      this.visible = !this.visible
    },
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    },
    update () {
      if (this.visible) {
        this.popperInstance.update()
      }
    },
  },
}
</script>
