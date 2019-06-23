<template>
  <VbDemo>
    <VbCard title="Default">
      <va-icon :name="icon"/>
    </VbCard>

    <VbCard title="Size in px">
      <va-icon :name="icon" size="40px"/>
    </VbCard>

    <VbCard title="Size as number">
      <va-icon :name="icon" :size="60"/>
    </VbCard>

    <VbCard title="Size presets">
      <div style="font-size: 24px">
        <va-icon :name="icon" small/>
        <va-icon :name="icon"/>
        <va-icon :name="icon" large/>
      </div>
    </VbCard>

    <VbCard title="Themes">
      <va-icon :name="icon" color="info"/>
      <va-icon :name="icon" color="warning"/>
      <va-icon :name="icon" color="danger"/>
      <va-icon :name="icon" color="success"/>
      <va-icon :name="icon" color="gray"/>
      <va-icon :name="icon" color="dark"/>
    </VbCard>

    <VbCard title="Rotation">
      <va-icon :name="icon" :rotation="45"/>&nbsp;
      <va-icon :name="icon" :rotation="180"/>&nbsp;
      <va-icon :name="icon" :rotation="270"/>&nbsp;
    </VbCard>

    <VbCard title="Fixed width">
      <va-button :name="icon" :icon-right="icon">
        Some
      </va-button>
    </VbCard>

    <VbCard title="Iconic">
      <va-icon name="iconicstroke iconicstroke-hash"/>
      <va-icon name="iconicstroke iconicstroke-at"/>
    </VbCard>
    <VbCard title="Glyphicon">
      <va-icon name="glyphicon glyphicon-star"/>
      <va-icon name="glyphicon glyphicon-glass"/>
    </VbCard>
    <VbCard title="Maki">
      <va-icon name="maki maki-belowground-rail"/>
      <va-icon name="maki maki-bicycle"/>
    </VbCard>
    <VbCard title="Entypo">
      <va-icon name="entypo entypo-note"/>
      <va-icon name="entypo entypo-star"/>
    </VbCard>
    <VbCard title="Brandico">
      <va-icon name="brandico brandico-facebook"/>
      <va-icon name="brandico brandico-twitter"/>
    </VbCard>
    <VbCard title="Font Awesome">
      <va-icon name="fa fa-anchor"/>
      <va-icon name="fa fa-area-chart"/>
    </VbCard>
    <VbCard title="Material design icons">
      <va-icon name="material-icons">face</va-icon>
      <va-icon name="material-icons">&#xE87C;</va-icon>
      <va-icon name="material-icons" color="danger">face</va-icon>
    </VbCard>
  </VbDemo>
</template>

<script>

import VaIcon from './VaIcon'
import VaButton from '../va-button/VaButton'

export default {
  components: {
    VaButton,
    VaIcon,
  },
  data () {
    return {
      icon: 'iconicstroke iconicstroke-info',
    }
  },
}
</script>
