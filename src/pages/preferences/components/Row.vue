<template>
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">
      {{ $props.name }}
    </p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        <slot/>
      </div>
    </div>
    <va-button 
      class="w-fit"
      v-show="$props.hasButton"
      :preset="preset"
      :color="color"
      :style="buttonStyles"
      @mouseover="isHovering = true"
      @mouseout="isHovering = false"
      @click="emits('click')"
    >
      {{ buttonName }}
    </va-button>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

import { buttonStyles } from '../styles'

const props = defineProps({
  name: { type: String, default: undefined },
  hasButton: { type: Boolean, default: false },
  buttonName: { type: String, default: undefined },
  enabled: { type: Boolean, default: false }
})

const isHovering  = ref(false)

const preset = computed(() => {
  if(props.enabled) { return undefined }

  return 'primary'
})
const color = computed(() => {
  if(!props.enabled) { return undefined }

  return isHovering.value  ? 'danger' : 'success'
})
const buttonName = computed(() => {
  if(!props.enabled) { return props.buttonName}

  return isHovering.value  ? 'Disable' : 'Enabled'
})

const emits = defineEmits(['click'])
</script>