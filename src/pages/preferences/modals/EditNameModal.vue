<template>
  <va-modal
    hideDefaultActions
    modelValue
    :mobileFullscreen="false"
    @update:modelValue="emits('cancel')"
  >
    <va-form 
      class="w-[326px] md:w-[288px]"
      ref="form"
      @submit.prevent="submit"
    >
      <va-input 
        class="mb-4"
        label="Name"
        placeholder="Name"
        v-model="Name"
      />
      <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-end md:space-x-4">
        <va-button 
          preset="plain"
          :style="buttonStyles"
          @click="emits('cancel')"
        >
          Cancel
        </va-button>
        <va-button 
          class="mb-4 md:mb-0"
          type="submit"
          :style="buttonStyles"
          @click="submit"
        >
          Save
        </va-button>
      </div>
    </va-form>
  </va-modal>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { useGlobalStore } from "../../../stores/global-store"

import { buttonStyles } from '../styles'

const store = useGlobalStore()

const emits = defineEmits(['cancel'])

const Name = ref<string>(store.userName)

const submit = () => {
  if(!Name.value) { return emits('cancel') }
  
  store.changeUserName(Name.value)
  emits('cancel')
}
</script>
