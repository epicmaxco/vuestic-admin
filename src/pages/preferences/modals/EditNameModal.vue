<template>
  <va-modal
    hideDefaultActions
    model-value
    :mobileFullscreen="false"
    @update:modelValue="emits('cancel')"
  >
    <va-form 
      ref="form"
      @submit.prevent="submit"
    >
      <va-input 
        class="!w-[326px] md:!w-[288px]"
        label="Name"
        placeholder="Name"
        v-model="Name"
      />
      <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-end md:space-x-4 mt-4">
        <va-button 
          preset="plain"
          @click="emits('cancel')"
        >
          Cancel
        </va-button>
        <va-button 
          class="mb-4 md:mb-0"
          type="submit"
        >
          Save
        </va-button>
      </div>
    </va-form>
  </va-modal>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { useForm } from 'vuestic-ui'

const { validate } = useForm('form')

const emits = defineEmits(['cancel'])

const Name = ref<string>("Salma Fadel")

const submit = () => {
  if(validate()) {
    console.log('success')
  }
}

</script>
