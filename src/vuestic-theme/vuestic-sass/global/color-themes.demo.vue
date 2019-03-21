<template>
  <VbDemo>
    <VbContainer>
      <va-button class="mb-5" color="info">
        Default Button
      </va-button>
      <va-notification class="mb-5" color="info">
        <va-badge color="info"> Info </va-badge>
        You successfully read this important alert message.
      </va-notification>
      <va-progress-bar class="mb-5" indeterminate color="info"/>
      <va-slider
        v-model="value"
        value-visible
        label="Label"
        color="info"
        icon-right="fa fa-volume-up"
      />
    </VbContainer>
    <VbContainer>
      <vuestic-pallet-custom
        :palette="paletteArray"
        v-model="color"
        @input="changeTheme()"
        class="spinners__color-picker"
      />
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaIcon from './../../vuestic-components/va-icon/VaIcon'
import VaButton from './../../vuestic-components/va-button/VaButton'
import VaNotification from './../../vuestic-components/va-notification/VaNotification'
import VaProgressBar from './../../vuestic-components/va-progress-bar/progress-types/VaProgressBar'
import VuesticPalletCustom from './../../vuestic-components/vuestic-color-picker/VuesticPalletCustom'
import { colorArray } from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticTheme'

export default {
  components: {
    VaIcon, VaButton, VaNotification, VaProgressBar, VuesticPalletCustom
  },
  data () {
    return {
      value: 60,
      icon: 'iconicstroke iconicstroke-info',
      color: '#4AE387',
      theme: 'info',
      paletteArray: colorArray
    }
  },
  methods: {
    changeTheme () {
      this.$themes.info = this.color
    },
  },
}
</script>
