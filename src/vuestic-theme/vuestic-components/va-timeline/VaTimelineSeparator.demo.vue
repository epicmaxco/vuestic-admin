<template>
  <VbDemo>
    <VbCard title="Timeline Separator" width="100px">
      <va-timeline-separator/>
    </VbCard>
    <VbCard title="Vertical Timeline Separator" height="50px">
      <va-timeline-separator vertical/>
    </VbCard>
    <VbCard title="Active Timeline Center" width="100px">
      <va-timeline-separator active/>
    </VbCard>
    <VbCard title="Active Timeline Previous Line" width="100px">
      <va-timeline-separator activePrevious/>
    </VbCard>
    <VbCard title="Active Timeline Next Line" width="100px">
      <va-timeline-separator activeNext/>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaTimelineSeparator from './VaTimelineSeparator.vue'

export default {
  components: {
    VaTimelineSeparator,
  },
}
</script>
