<template>
  <VbDemo>
    <VbCard title="Default">
      <va-icon :icon="icon"/>
    </VbCard>

    <VbCard title="Size in px">
      <va-icon :icon="icon" size="40px"/>
    </VbCard>

    <VbCard title="Size as number">
      <va-icon :icon="icon" :size="60"/>
    </VbCard>

    <VbCard title="Size presets">
      <div style="font-size: 24px">
        <va-icon :icon="icon" small/>
        <va-icon :icon="icon"/>
        <va-icon :icon="icon" large/>
      </div>
    </VbCard>

    <VbCard title="Themes">
      <va-icon :icon="icon" color="info"/>
      <va-icon :icon="icon" color="warning"/>
      <va-icon :icon="icon" color="danger"/>
      <va-icon :icon="icon" color="success"/>
      <va-icon :icon="icon" color="gray"/>
      <va-icon :icon="icon" color="dark"/>
    </VbCard>

    <VbCard title="Rotation">
      <va-icon :icon="icon" :rotation="45"/>&nbsp;
      <va-icon :icon="icon" :rotation="180"/>&nbsp;
      <va-icon :icon="icon" :rotation="270"/>&nbsp;
    </VbCard>

    <VbCard title="Fixed width">
      <va-button :icon="icon" :icon-right="icon">
        Some
      </va-button>
    </VbCard>

    <VbCard title="Iconic">
      <va-icon icon="iconicstroke iconicstroke-hash"/>
      <va-icon icon="iconicstroke iconicstroke-at"/>
    </VbCard>
    <VbCard title="Glyphicon">
      <va-icon icon="glyphicon glyphicon-star"/>
      <va-icon icon="glyphicon glyphicon-glass"/>
    </VbCard>
    <VbCard title="Maki">
      <va-icon icon="maki maki-belowground-rail"/>
      <va-icon icon="maki maki-bicycle"/>
    </VbCard>
    <VbCard title="Entypo">
      <va-icon icon="entypo entypo-note"/>
      <va-icon icon="entypo entypo-star"/>
    </VbCard>
    <VbCard title="Brandico">
      <va-icon icon="brandico brandico-facebook"/>
      <va-icon icon="brandico brandico-twitter"/>
    </VbCard>
    <VbCard title="Font Awesome">
      <va-icon icon="fa fa-anchor"/>
      <va-icon icon="fa fa-area-chart"/>
    </VbCard>
  </VbDemo>
</template>

<script>

import VaIcon from './VaIcon'

export default {
  components: {
    VaIcon,
  },
  data () {
    return {
      icon: 'iconicstroke iconicstroke-info',
    }
  },
}
</script>
