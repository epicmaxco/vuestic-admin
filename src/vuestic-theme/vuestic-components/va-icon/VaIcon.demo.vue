<template>
  <VbDemo>
    <VbContainer title="Default">
      <va-icon :icon="icon"/>
    </VbContainer>

    <VbContainer title="Size in px">
      <va-icon :icon="icon" size="40px"/>
    </VbContainer>

    <VbContainer title="Size as number">
      <va-icon :icon="icon" :size="60"/>
    </VbContainer>

    <VbContainer title="Size presets">
      <div style="font-size: 24px">
        <va-icon :icon="icon" small/>
        <va-icon :icon="icon"/>
        <va-icon :icon="icon" large/>
      </div>
    </VbContainer>

    <VbContainer title="Themes">
      <va-icon :icon="icon" color="info"/>
      <va-icon :icon="icon" color="warning"/>
      <va-icon :icon="icon" color="danger"/>
      <va-icon :icon="icon" color="success"/>
      <va-icon :icon="icon" color="gray"/>
      <va-icon :icon="icon" color="dark"/>
    </VbContainer>

    <VbContainer title="Rotation">
      <va-icon :icon="icon" :rotation="45"/>&nbsp;
      <va-icon :icon="icon" :rotation="180"/>&nbsp;
      <va-icon :icon="icon" :rotation="270"/>&nbsp;
    </VbContainer>

    <VbContainer title="Fixed width">
      <va-button :icon="icon" :icon-right="icon">
        Some
      </va-button>
    </VbContainer>

    <VbContainer title="Iconic">
      <va-icon icon="iconicstroke iconicstroke-hash"/>
      <va-icon icon="iconicstroke iconicstroke-at"/>
    </VbContainer>
    <VbContainer title="Glyphicon">
      <va-icon icon="glyphicon glyphicon-star"/>
      <va-icon icon="glyphicon glyphicon-glass"/>
    </VbContainer>
    <VbContainer title="Maki">
      <va-icon icon="maki maki-belowground-rail"/>
      <va-icon icon="maki maki-bicycle"/>
    </VbContainer>
    <VbContainer title="Entypo">
      <va-icon icon="entypo entypo-note"/>
      <va-icon icon="entypo entypo-star"/>
    </VbContainer>
    <VbContainer title="Brandico">
      <va-icon icon="brandico brandico-facebook"/>
      <va-icon icon="brandico brandico-twitter"/>
    </VbContainer>
    <VbContainer title="Font Awesome">
      <va-icon icon="fa fa-anchor"/>
      <va-icon icon="fa fa-area-chart"/>
    </VbContainer>
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
