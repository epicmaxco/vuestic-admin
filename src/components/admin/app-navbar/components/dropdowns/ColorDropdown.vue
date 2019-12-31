<template>
  <va-dropdown
    class="color-dropdown"
    offset="0, 13px"
  >
    <va-icon-color
      slot="anchor"
      class="color-dropdown__icon"
      :color="contextConfig.invertedColor ? $themes.gray : 'white'"
    />
    <div class="color-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <va-button-toggle
        outline
        small
        color="dark"
        @input="setTheme"
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
          v-model="$themes.primary"
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
          v-model="$themes.secondary"
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
          v-model="$themes.success"
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
          v-model="$themes.info"
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
          v-model="$themes.danger"
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
          v-model="$themes.warning"
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
          v-model="$themes.gray"
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
          v-model="$themes.dark"
        />
      </va-dropdown>
    </div>
  </va-dropdown>
</template>

<script>
import {
  ColorThemeActionsMixin,
  ColorThemeMixin,
} from '../../../../../services/vuestic-ui'
import VaIconColor from '../../../../../iconset/VaIconColor'
import { originalTheme, corporateTheme } from 'vuestic-ui/src/services/themes'

export default {
  mixins: [ColorThemeActionsMixin, ColorThemeMixin],
  inject: ['contextConfig'],
  components: {
    VaIconColor,
  },
  created () {
    if (this.$route.query && this.$route.query.theme === 'corporate') {
      this.setTheme(corporateTheme)
    }
  },
  computed: {
    modeOptions () {
      return [
        {
          label: 'Original',
          value: originalTheme,
        },
        {
          label: 'Corporate',
          value: corporateTheme,
        },
      ]
    },
  },
  methods: {
    setTheme (theme) {
      this.setColors(theme.colors)
      Object.keys(theme.context).forEach((key) => {
        this.contextConfig[key] = theme.context[key]
      })
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
