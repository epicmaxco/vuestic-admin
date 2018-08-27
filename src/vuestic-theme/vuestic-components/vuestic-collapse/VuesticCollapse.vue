<template>
  <div class="vuestic-collapse"
       :class="{ 'open': show }"
  >
    <div class="vuestic-collapse__header"
         @click="toggleCollapse()"
    >
      <slot name="header"/>
    </div>
    <div class="vuestic-collapse__body"
         :class="{ 'open': show }"
    >
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-collapse',
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        show: this.isOpen
      }
    },
    watch: {
      isOpen () {
        this.toggleCollapse()
      }
    },
    methods: {
      toggleCollapse () {
        this.$nextTick(() => {
          let bodyContent = this.$el.lastChild

          this.show = !this.show

          if (bodyContent.classList.contains('open')) {
            bodyContent.style.height = 0
          } else {
            bodyContent.style.height = this.$slots.body[0].elm.clientHeight + 'px'
          }
        })
      }
    },
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
