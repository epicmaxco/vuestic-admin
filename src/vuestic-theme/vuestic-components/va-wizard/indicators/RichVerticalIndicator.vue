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
      <div style="margin-top: -0.75rem;" class="d-flex align--center" slot="after">
        <div class="mr-2">
          <va-icon
            v-if="currentStep >= index"
            large
            color="success"
            name="ion ion-md-checkmark step-icon icon-check"
          />
          <va-icon
            v-else
            large
            name="ion ion-md-close step-icon icon-cross"/>
        </div>
        <div>{{ step.label }}</div>
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
