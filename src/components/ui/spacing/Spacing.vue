<template>
  <div class="spacing flex xs12 md12">
      <vuestic-widget headerText="Spacing">
        <spacing-playgroud :title="''"/>
      </vuestic-widget>
  </div>
</template>

<script>
import SpacingPlaygroud from '../../../vuestic-theme/vuestic-components/vuestic-grid/SpacingPlaygroud'
export default {
  name: 'spacing',
  components: { SpacingPlaygroud },
}
</script>
