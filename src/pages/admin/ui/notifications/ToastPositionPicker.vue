<template>
  <div class="toast-position-picker mr-4">
    <div class="position-boxes-row d-flex">
      <div
        class="position-box"
        :class="{ selected: isBoxSelected('top-left') }"
        :style="computedStyle"
        @click="updatePosition('top-left')"
      ></div>
      <!-- <div class="position-box"
        @click="updatePosition('top-center')"
        :class="{'selected': isBoxSelected('top-center')}"
        :style="computedStyle">
      </div> -->
      <div
        class="position-box"
        :class="{ selected: isBoxSelected('top-right') }"
        :style="computedStyle"
        @click="updatePosition('top-right')"
      ></div>
    </div>
    <div class="position-boxes-row d-flex">
      <div
        class="position-box"
        :class="{ selected: isBoxSelected('bottom-left') }"
        :style="computedStyle"
        @click="updatePosition('bottom-left')"
      ></div>
      <!-- <div class="position-box"
        @click="updatePosition('bottom-center')"
        :class="{'selected': isBoxSelected('bottom-center')}"
        :style="computedStyle">
      </div> -->
      <div
        class="position-box"
        :class="{ selected: isBoxSelected('bottom-right') }"
        :style="computedStyle"
        @click="updatePosition('bottom-right')"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGlobalConfig } from 'vuestic-ui'
  import { computed } from 'vue'
  const { getGlobalConfig } = useGlobalConfig()

  const props = withDefaults(
    defineProps<{
      modelValue?: string
    }>(),
    {
      modelValue: 'bottom-center',
    },
  )

  const emit = defineEmits<{
    (e: 'update:modelValue', position: string): void
  }>()

  const theme = computed(() => getGlobalConfig().colors!)

  const computedStyle = computed(() => {
    return {
      backgroundColor: theme.value.primary,
    }
  })

  function updatePosition(position: string) {
    emit('update:modelValue', position)
  }

  function isBoxSelected(position: string) {
    return props.modelValue === position
  }
</script>

<style lang="scss" scoped>
  .toast-position-picker {
    width: 112px;
    height: 76px;
  }

  .position-boxes-row {
    flex-direction: row;

    &:first-child {
      margin-bottom: 2px;
    }
  }

  .position-box {
    height: 36px;
    width: 36px;
    margin-right: 2px;
    cursor: pointer;
    opacity: 0.3;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.6;
    }

    &.selected {
      opacity: 1;
    }
  }
</style>
