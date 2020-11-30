<template>
  <div class="spacing flex xs12 md12">
    <va-card>
      <va-card-title>{{ $t('spacing.title') }}</va-card-title>
      <va-card-content>
        <spacing-playgroud :title="''"/>
      </va-card-content>
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
