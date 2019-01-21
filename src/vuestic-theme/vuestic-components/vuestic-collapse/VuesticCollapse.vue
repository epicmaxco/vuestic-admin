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
      <div
        v-else
        class="vuestic-collapse__header__button-container"
      >
        <button
          class="vuestic-collapse__header__button"
        >
          <slot name="header"/>
        </button>
        <i
          v-if="show"
          class="fa fa-angle-up vuestic-collapse__header__button-arrow"
        />
        <i
          v-else
          class="fa fa-angle-down vuestic-collapse__header__button-arrow"
        />
      </div>
    </div>
    <div
      class="vuestic-collapse__body"
      :class="{'background': addBackground}"
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
    addBackground: Boolean,
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
    overflow: hidden;
    &.background {
      margin-top: 4px;
      border-radius: 6px;
      background-color: #f5f8f9;
    }
  }
  &__header {
    &__button-container {
      display: flex;
      background-color: #f5f8f9;
      box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
      border-radius: 6px;
    }
    & &__button {
      background-color: #f5f8f9;
      cursor: pointer;
      outline: 0;
      border: 0;
      padding-top: 11px;
      padding-bottom: 13px;
      padding-left: 16px;
      width: 100%;
      padding-left: 16px;
      text-align: left;
      &-arrow {
        display: flex;
        justify-content: center;
        cursor: pointer;
        padding-top: 16px;
        padding-right: 8px;
        height: 24px;
        width: 24px;
        color: $gray;
      }
    }
    &--no-header {
      margin-bottom: 1rem;
    }
  }
}
</style>
