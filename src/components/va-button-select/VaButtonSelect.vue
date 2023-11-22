<template>
  <div class="space-x-[1px] p-[2px] border rounded w-fit">
    <VaButton
      v-for="option in options"
      :key="option"
      :color="color(option)"
      :style="durationButtonStyles"
      :text-color="$props.textColor"
      class="w-[86px]"
      @click="emits('update:modelValue', option)"
    >
      {{ option }}
    </VaButton>
  </div>
</template>
<script lang="ts" setup>
import { durationButtonStyles } from '../../pages/pricing-plans/styles'

const props = defineProps({
  modelValue: { type: [String, Number], default: undefined },
  options: { type: Array<string | number>, required: true },
  textColor: { type: String, default: 'textPrimary' },
  color: { type: String, default: 'backgroundSecondary' },
  selectedColor: { type: String, default: 'backgroundElement' },
})

const color = (option: string | number) => (props.modelValue === option ? props.selectedColor : props.color)

const emits = defineEmits(['update:modelValue'])
</script>
