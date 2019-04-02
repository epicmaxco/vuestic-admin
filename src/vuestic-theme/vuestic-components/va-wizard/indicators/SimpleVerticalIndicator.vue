<template>
  <va-timeline
    v-if="steps"
    class="fill-height"
    vertical
  >
    <va-timeline-item
      v-for="(step, index) of steps"
      :key="index"
      :style="{ height: 100/steps.length + '%' }"
      :class="{ 'title': currentStep >= index, 'title title--gray': currentStep < index }"
      :active="currentStep >= index"
    >
      <span slot="after">{{ step.label }}</span>
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
    step: {},
    currentStep: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
