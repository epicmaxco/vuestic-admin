<template>
  <VbDemo>
    <VbContainer title="Timeline Separator" width="100px">
      <va-timeline-separator/>
    </VbContainer>
    <VbContainer title="Vertical Timeline Separator" height="50px">
      <va-timeline-separator vertical/>
    </VbContainer>
    <VbContainer title="Active Timeline Center" width="100px">
      <va-timeline-separator active/>
    </VbContainer>
    <VbContainer title="Active Timeline Previous Line" width="100px">
      <va-timeline-separator activePrevious/>
    </VbContainer>
    <VbContainer title="Active Timeline Next Line" width="100px">
      <va-timeline-separator activeNext/>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaTimelineSeparator from './VaTimelineSeparator.vue'

export default {
  components: {
    VaTimelineSeparator
  }
}
</script>
