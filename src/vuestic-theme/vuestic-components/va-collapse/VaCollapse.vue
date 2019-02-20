<template>
  <div
    class="va-collapse"
    :class="{'va-collapse--with-background': withBackground}"
  >
    <div
      class="va-collapse__header"
      :class="{
        'vuestic-collapse__header--custom-header': customHeader,
      }"
      @click="onHeaderClick()"
    >
      <template v-if="customHeader">
        <slot name="header"/>
      </template>
      <div
        v-else
        class="va-collapse__header__content"
      >
        <slot name="header"/>
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
      type: Boolean
    },
    withBackground: Boolean,
    customHeader: Boolean
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
      bodyContent.style.height = this.$slots.body[0].elm.clientHeight + 36 + 'px'
      bodyContent.style.paddingTop = 1 + 'rem'
      bodyContent.style.paddingBottom = 1 + 'rem'
      this.show = true
    },
    collapse () {
      const bodyContent = this.$refs.collapseBody
      bodyContent.style.height = 0
      bodyContent.style.paddingTop = 0
      bodyContent.style.paddingBottom = 0
      this.show = false
    },
    onHeaderClick () {
      this.toggle()
      this.accordion.onChildChange(this, this.show)
    },
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
    transition: ease-in 0.3s;
    overflow: hidden;
    margin-top: 0.1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  &--with-background > &__body {
    margin-top: 0.1rem;
    border-radius: 0.375rem;
    background-color: $light-gray3;
  }
  &__header {
    height: 50px;
    &__content {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      background-color: $light-gray3;
      box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
      border-radius: 0.375rem;
      cursor: pointer;
      outline: 0;
      border: 0;
      align-items: center;
      padding-top: 11px;
      padding-bottom: 13px;
      padding-left: 1rem;
      text-align: left;
    }
    &__icon {
      cursor: pointer;
      width: 24px;
      color: $gray;
    }
    &--custom-header {
      margin-bottom: 1rem;
    }
  }
}
</style>
