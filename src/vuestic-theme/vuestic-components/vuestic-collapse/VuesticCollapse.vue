<template>
  <div class="vuestic-collapse">

    <div
      class="vuestic-collapse__header"
      :class="{
        'vuestic-collapse__header--no-header': noHeader,
      }"
      @click="onHeaderClick()"
    >
      <template v-if="noHeader">
        <slot name="header"/>
      </template>
      <button
        v-else
        class="vuestic-collapse__header__button btn btn-primary"
      >
        <slot name="header"/>
      </button>
    </div>

    <div
      class="vuestic-collapse__body"
      ref="collapseBody"
    >
      <slot name="body"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'vuestic-collapse',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    noHeader: Boolean,
  },
  inject: {
    accordion: {
      default: () => ({
        onChildChange: () => {
        },
      }),
    },
  },
  data () {
    return {
      show: this.value,
    }
  },
  watch: {
    show (show) {
      if (show) {
        this.expand()
      } else {
        this.collapse()
      }
    },
  },
  methods: {
    expand () {
      const bodyContent = this.$refs.collapseBody
      bodyContent.style.height = this.$slots.body[0].elm.clientHeight + 'px'

      this.show = true
    },
    collapse () {
      const bodyContent = this.$refs.collapseBody
      bodyContent.style.height = 0

      this.show = false
    },
    onHeaderClick () {
      this.toggle()
      this.accordion.onChildChange(this, this.show)
    },
    // Public
    toggle () {
      this.show ? this.collapse() : this.expand()
    },
  },
}
</script>

<style lang="scss">
.vuestic-collapse {
  & + & {
    margin-top: 8px;
  }

  &__body {
    height: 0;
    transition: height 0.3s;
    margin-top: 20px;
    background: $light-gray;
    overflow: hidden;
  }

  &__header {
    &__button {
      width: 100%;
      padding-left: 1.5rem;
      border-radius: 0;
      text-align: left;
    }
    &--no-header {
      margin-bottom: 1rem;
    }
  }

  .vuestic-collapse__body {
    margin-top: 0;
  }
}
</style>
