<template>
  <VbDemo>
    <VbContainer>
      <va-icon :icon="icon" :color="color" large/>
      <va-button :color="">
        Default Button
      </va-button>
      <va-notification :color="color">
        <span class="va-notification__badge va-notification__badge--success"> Paid </span>
        You successfully read this important alert message.
      </va-notification>
    </VbContainer>
    <VbContainer>
      <!--<vuestic-pallet-custom
        :color="color"
        :palette="paletteArray"
        v-model="color"
        class="spinners__color-picker"
      />-->
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaIcon from './../../vuestic-components/va-icon/VaIcon'
import VaButton from './../../vuestic-components/va-button/VaButton'
import VaNotification from './../../vuestic-components/va-notification/VaNotification'
// import { colorArray } from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticTheme'

export default {
 components: {
   VaIcon, VaButton, VaNotification
 },
 data () {
   return {
     icon: 'iconicstroke iconicstroke-info',
     color: 'info',
     // paletteArray: colorArray
   }
 },
}
</script>
