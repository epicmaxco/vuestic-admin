<template>
  <div class="spacing flex xs12 md12">
    <va-card title="Spacing">
      <spacing-playgroud :title="''"/>
    </va-card>
  </div>
</template>

<script>
import SpacingPlaygroud from './SpacingPlaygroud'

export default {
  name: 'spacing',
  components: { SpacingPlaygroud },
}
</script>
