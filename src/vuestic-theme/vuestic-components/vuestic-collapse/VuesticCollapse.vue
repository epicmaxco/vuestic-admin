<template>
  <div class="vuestic-collapse">
    <div class="vuestic-collapse__header"
         :class="{ 'active': this.show }"
         @click="toggleCollapseBody()">
      <button class="btn btn-primary">
        <slot name="collapse-header"></slot>
      </button>
    </div>
    <div class="vuestic-collapse__body" v-if="show">
      <slot name="collapse-body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-collapse',
    data () {
      return {
        show: false
      }
    },
    methods: {
      toggleCollapseBody () {
        if (this.$parent.$el.classList.contains('vuestic-accordion')) {
          let collapsesArray = this.$parent.$children
          for (let i = 0; i < collapsesArray.length; i++) {
            if (this === collapsesArray[i]) {
              this.show = !this.show
            } else {
              collapsesArray[i].show = false
            }
          }
        } else {
          this.show = !this.show
        }
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-collapse {
    margin-top: 10px;

    &__body {
      padding: 10px;
      margin-top: 20px;
      background: $light-gray;
    }
  }
</style>
