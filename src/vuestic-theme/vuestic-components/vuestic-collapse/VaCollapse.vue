<template>
  <div class="va-collapse">
    <div
      class="va-collapse__header"
      :class="{
        'vuestic-collapse__header--no-header': noHeader,
      }"
      @click="onHeaderClick()"
    >
      <template v-if="noHeader">
        <slot name="header"/>
      </template>
      <div
        v-else
        class="va-collapse__header__button-container va-row"
      >
        <button
          class="va-collapse__header__button"
        >
          <slot name="header"/>
        </button>
        <i
          v-if="show"
          class="fa fa-angle-up va-collapse__header__icon"
        />
        <i
          v-else
          class="fa fa-angle-down va-collapse__header__icon"
        />
      </div>
    </div>
    <div
      class="va-collapse__body"
      :class="{'va-collapse__body--with-background': isBackgroundExists}"
      ref="collapseBody"
    >
      <slot name="body"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'va-collapse',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    isBackgroundExists: Boolean,
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
.va-collapse {
  & + & {
    margin-top: 1.5rem;
  }
  &__body {
    height: 0;
    transition: height 0.3s;
    overflow: hidden;
    &--with-background {
      margin-top: 0.25rem;
      border-radius: 6px;
      background-color: $collapse-background;
    }
  }
  &__header {
    &__button-container {
      justify-content: space-between;
      cursor: pointer;
      background-color: $collapse-background;
      box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
      border-radius: 6px;
    }
    & &__button {
      background-color: $collapse-background;
      cursor: pointer;
      outline: 0;
      border: 0;
      padding-top: 11px;
      padding-bottom: 13px;
      padding-left: 1rem;
      text-align: left;
    }
    &__icon {
      cursor: pointer;
      padding-top: 1rem;
      padding-right: 0.5rem;
      height: 24px;
      width: 24px;
      color: $gray;
    }
    &--no-header {
      margin-bottom: 1rem;
    }
  }
}
</style>
