<template>
  <va-dropdown
    class="color-dropdown"
    offset="0, 13px"
  >
    <va-icon
      name="i-nav-color"
      slot="anchor"
      class="color-dropdown__icon"
    />
    <div class="color-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <va-button small color="primary" v-on:click="restoreDefaultTheme">
        Default theme
      </va-button>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="primary" slot="anchor">
          Primary
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.primary" :value="themeProxy.primary"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="secondary" slot="anchor">
          Secondary
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.secondary" :value="themeProxy.secondary"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="success" slot="anchor">
          Success
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.success" :value="themeProxy.success"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="info" slot="anchor">
          Info
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.info" :value="themeProxy.info"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="danger" slot="anchor">
          Danger
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.danger" :value="themeProxy.danger"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="warning" slot="anchor">
          Warning
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.warning" :value="themeProxy.warning"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="gray" slot="anchor">
          Gray
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.gray" :value="themeProxy.gray"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="dark" slot="anchor">
          Dark
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="themeProxy.dark" :value="themeProxy.dark"/>
      </va-dropdown>
    </div>
  </va-dropdown>
</template>

<script>
import { colorArray } from '../../../../../services/vuestic-ui/components'

const themeCache = {}

export default {
  data () {
    const proxyHandler = {
      set: function (target, property, value) {
        if (!themeCache[property] && typeof target[property] === 'string') themeCache[property] = target[property]
        target[property] = value

        return true
      },
    }

    return {
      palette: colorArray,
      themeProxy: new Proxy(this.$themes, proxyHandler),
    }
  },
  methods: {
    restoreDefaultTheme () {
      for (const i in themeCache) {
        this.$themes[i] = themeCache[i]
      }
    },
  },
}
</script>

<style lang="scss">
@import '~vuestic-ui/src/components/vuestic-sass/resources/resources';

.color-dropdown {
  cursor: pointer;
  margin-top: 0.3rem;

  &__icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;

    .color-picker-dropdown {
      display: flex;
      justify-content: center;

      &__badge {
        /* Badges have 0.5rem to the right by default */
        margin-left: 0.5rem;
      }
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
