<template>
  <div class="space-x-[1px] p-[2px] border rounded w-fit">
    <va-button 
      v-for="option in options"
      class="w-[86px]"
      :textColor="$props.textColor"
      :color="color(option)"
      :style="durationButtonStyles"
      @click="emits('update:modelValue', option)"
    >
      {{ option }}
    </va-button>
  </div>
</template>
<script setup lang="ts">
import { durationButtonStyles } from '../../pages/pricing-plans/styles'

const props = defineProps({
  modelValue: { type: [String, Number] },
  options: { type: Array<String | Number> },
  textColor: { type: String, default: 'textPrimary' },
  color: { type: String, default: 'backgroundSecondary' },
  selectedColor: { type: String, default: 'backgroundElement' },
})

const color = (option: String | Number) => props.modelValue === option ? props.selectedColor : props.color

const emits = defineEmits(['update:modelValue'])
</script>