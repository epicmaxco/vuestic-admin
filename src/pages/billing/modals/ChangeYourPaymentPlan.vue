<template>
  <VaModal
    :mobile-fullscreen="false"
    size="small"
    max-width="380px"
    hide-default-actions
    model-value
    close-button
    @update:modelValue="emits('cancel')"
  >
    <div class="space-y-6">
      <h3>
        Are you sure you want to switch to the
        <span class="font-bold text-primary">{{ yearlyPlan ? 'monthly' : 'annual' }}</span>
        plan?
      </h3>
      <div class="flex flex-col-reverse md:justify-end md:flex-row md:space-x-4">
        <VaButton preset="secondary" color="secondary" @click="emits('cancel')"> Cancel</VaButton>
        <VaButton class="mb-4 md:mb-0" @click="confirm()"> Update Plan</VaButton>
      </div>
    </div>
  </VaModal>
</template>
<script lang="ts" setup>
import { useToast } from 'vuestic-ui'

const { init } = useToast()

defineProps({
  yearlyPlan: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['cancel', 'confirm'])

const confirm = () => {
  init({ message: "You've successfully changed your payment plan", color: 'success' })
  emits('confirm')
}
</script>

<style lang="scss">
.va-modal__inner {
  min-width: 326px;
}
</style>
