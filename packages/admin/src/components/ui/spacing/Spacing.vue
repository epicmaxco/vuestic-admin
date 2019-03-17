<template>
  <div class="spacing flex xs12 md12">
      <vuestic-widget headerText="Spacing">
        <spacing-playgroud :title="''"/>
      </vuestic-widget>
  </div>
</template>

<script>
import SpacingPlaygroud from '../../../../../ui/src/components/va-grid/SpacingPlaygroud'
export default {
  name: 'spacing',
  components: { SpacingPlaygroud },
}
</script>
