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
      <div slot="before">
        <div>
          <va-icon
            v-if="currentStep >= index"
            large
            color="success"
            icon="ion ion-md-checkmark step-icon icon-check"
          />
          <va-icon
            v-else
            large
            icon="ion ion-md-close step-icon icon-cross"/>
        </div>
        <span slot="before">{{ step.label }}</span>
      </div>
    </va-timeline-item>
  </va-timeline>
</template>

<script>
export default {
  name: 'va-wizard-rich-horizontal-indicator',
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    currentStep: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
