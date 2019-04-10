<template>
  <div
    class="va-collapse"
    :class="{'va-collapse--with-background': withBackground}"
  >
    <div
      class="va-collapse__header"
      @click="onHeaderClick()"
    >
      <template>
        <slot name="header" v-if="customHeader"/>
      </template>
      <div
        v-if="!customHeader"
        class="va-collapse__header__content"
      >
        <slot name="header"/>
        <va-icon
          v-if="show"
          class="fa fa-angle-up va-collapse__header__icon"
        />
        <va-icon
          v-else
          class="fa fa-angle-down va-collapse__header__icon"
        />
      </div>
    </div>
    <div
      class="va-collapse__body"
      :style="stylesComputed"
    >
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'

export default {
  name: 'va-collapse',
  components: { VaIcon },
  props: {
    isOpenDefault: {
      type: Boolean,
    },
    withBackground: Boolean,
    customHeader: Boolean,
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
      show: this.isOpenDefault,
    }
  },
  computed: {
    stylesComputed () {
      if (this.show && this.$slots.body[0]) {
        return {
          height: this.getHeight(),
          paddingTop: 1 + 'rem',
          paddingBottom: 1 + 'rem',
        }
      }
      return {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }
    },
  },
  methods: {
    onHeaderClick () {
      this.toggle()
      this.accordion.onChildChange(this, this.show)
    },
    collapse () {
      this.show = false
    },
    expand () {
      this.show = true
    },
    toggle () {
      if (this.show) {
        this.collapse()
      } else {
        this.expand()
      }
    },
    getHeight () {
      return this.$slots.body[0].elm ? `calc(` + this.$slots.body[0].elm.clientHeight +
        `px + 2rem)` : `100%`
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

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
    @at-root {
      .va-collapse--with-background > & {
        margin-top: 0.1rem;
        border-radius: 0.375rem;
        background-color: $light-gray3;
      }
    }
  }

  &__header {
    &__content {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      background-color: $light-gray3;
      box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
      border-radius: 0.375rem;
      align-items: center;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 1rem;
    }

    &__icon {
      @include flex-center();
      min-width: 1.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      color: $gray;
    }
  }
}
</style>
