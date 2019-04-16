<template>
  <va-timeline v-if="steps">
    <va-timeline-item
      v-for="(step, index) of steps"
      :key="index"
      :style="{ width: 100/steps.length + '%' }"
      class="text--center"
      :class="{ 'title': currentStep >= index, 'title title--gray': currentStep < index }"
      :active="currentStep >= index"
    >
      <span slot="before">{{ step.label }}</span>
    </va-timeline-item>
  </va-timeline>
</template>

<script>
export default {
  name: 'va-wizard-simple-horizontal-indicator',
  props: {
    steps: {
      type: Array,
    },
    currentStep: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    step: {},
    isActive: {
      type: Boolean,
      default: false,
    },
    indexCurrent: {},
    indexMax: {},
  },
}
</script>
