<template>
  <div class="vuestic-collapse">
    <div class="vuestic-collapse__header"
         @click="toggleCollapseBody()">
      <slot name="header"></slot>
    </div>
    <div class="vuestic-collapse__body"
         :class="{ 'open': show }">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-collapse',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        show: this.value,
        duration: 200
      }
    },
    methods: {
      toggleCollapseBody () {
        let bodyContent = this.$el.lastChild
        let accordion = this.$parent

        if (accordion.$el.classList.contains('vuestic-accordion') && !accordion.expand) {
          let collapsesArray = this.$parent.$children
          for (let i = 0; i < collapsesArray.length; i++) {
            if (this === collapsesArray[i]) {
              this.show = !this.show
            } else {
              collapsesArray[i].$el.lastChild.style.height = 0
              collapsesArray[i].show = false
            }
          }
        } else {
          this.show = !this.show
        }

        if (bodyContent.classList.contains('open')) {
          bodyContent.style.height = 0
        } else {
          bodyContent.style.height = this.$slots.body[0].elm.clientHeight + 'px'
        }
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-collapse {
    margin-bottom: 10px;

    &__body {
      height: 0;
      transition: height 0.3s;
      margin-top: 20px;
      background: $light-gray;
      overflow: hidden;
    }
  }
</style>
