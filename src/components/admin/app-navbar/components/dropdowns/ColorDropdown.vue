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
      <va-button-toggle
        outline
        small
        color="gray"
        v-model="mode"
        :options="modeOptions"
        style="max-width: 100%;"
      />
      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="primary"
          slot="anchor"
        >
          Primary
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.primary"
          :value="themeProxy.primary"
        />
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="secondary"
          slot="anchor"
        >
          Secondary
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.secondary"
          :value="themeProxy.secondary"
        />
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="success"
          slot="anchor"
        >
          Success
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.success"
          :value="themeProxy.success"
        />
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="info"
          slot="anchor"
        >
          Info
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.info"
          :value="themeProxy.info"
        />
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="danger"
          slot="anchor"
        >
          Danger
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.danger"
          :value="themeProxy.danger"
        />
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="warning"
          slot="anchor"
        >
          Warning
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.warning"
          :value="themeProxy.warning"
        />
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="gray"
          slot="anchor"
        >
          Gray
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.gray"
          :value="themeProxy.gray"
        />
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge
          class="color-picker-dropdown__badge"
          color="dark"
          slot="anchor"
        >
          Dark
        </va-badge>
        <va-advanced-color-picker
          class="my-1"
          v-model="themeProxy.dark"
          :value="themeProxy.dark"
        />
      </va-dropdown>

      <va-button class="button-restore" outline small color="gray" icon="entypo entypo-arrows-ccw" @click="restoreDefaultTheme">
        Restore Defaults
      </va-button>
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
      mode: 0,
      palette: colorArray,
      themeProxy: new Proxy(this.$themes, proxyHandler),
    }
  },
  computed: {
    modeOptions () {
      return [{
        value: 0,
        label: 'Original',
      }, {
        value: 1,
        label: 'Corporate',
      }]
    },
  },
  methods: {
    /* use setTheme() method in future */
    restoreDefaultTheme () {
      for (const theme in themeCache) {
        this.$themes[theme] = themeCache[theme]
      }
    },
  },
}
</script>

<style lang="scss">

.color-dropdown {
  cursor: pointer;

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

.button-restore {
  display: flex;
  margin: 0.375rem auto;
}
</style>
