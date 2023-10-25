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
      preset="primary"
      @click="emits('click')"
    >
      {{ $props.buttonName }}
    </va-button>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  name: { type: String },
  hasButton: { type: Boolean, default: false },
  buttonName: { type: String },
})

const emits = defineEmits(['click'])

</script>