<template>
  <div class="space-x-[1px] p-[2px] border rounded w-fit" :style="{ 'background-color': getColor($props.backgroundColor) }">
    <VaButton
      v-for="option in mapOptions(options)"
      :key="option.value"
      :color="color(option.value)"
      :style="style"
      :text-color="$props.textColor"
      @click="emits('update:modelValue', option.value)"
    >
      {{ option.name }}
    </VaButton>
  </div>
</template>
<script lang="ts" setup>
import { buttonSelectStyles } from './styles'

import { useColors } from 'vuestic-ui'

const { getColor } = useColors()

interface ButtonSelectOptions {
  name: string
  value: string | number
}

const props = defineProps({
  modelValue: { type: [String, Number], default: undefined },
  options: { type: Array<string | number | ButtonSelectOptions>, required: true },
  textColor: { type: String, default: 'textPrimary' },
  buttonSize: { type: String, default: '86px' },
  color: { type: String, default: 'transparent' },
  backgroundColor: { type: String, default: 'transparent' },
  selectedColor: { type: String, default: 'backgroundElement' },
})

const mapOptions = (options: Array<string | number | ButtonSelectOptions>) => {
  return options.map(option => option instanceof Object ? option : { name: option, value: option })
} 

const style = { ...buttonSelectStyles, width: props.buttonSize }

const color = (option: string | number) => (props.modelValue === option ? props.selectedColor : props.color)

const emits = defineEmits(['update:modelValue'])
</script>
