<template>
  <va-modal hide-default-actions model-value :mobile-fullscreen="false" @update:modelValue="emits('cancel')">
    <va-form ref="form" class="w-[326px] md:w-[288px]" @submit.prevent="submit">
      <va-input v-model="Name" class="mb-4" label="Name" placeholder="Name" />
      <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-end md:space-x-4">
        <va-button preset="plain" :style="buttonStyles" @click="emits('cancel')"> Cancel </va-button>
        <va-button class="mb-4 md:mb-0" type="submit" :style="buttonStyles" @click="submit"> Save </va-button>
      </div>
    </va-form>
  </va-modal>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import { useUserStore } from '../../../stores/user-store'

  import { buttonStyles } from '../styles'
  import { useToast } from 'vuestic-ui/web-components'

  const store = useUserStore()

  const { init } = useToast()

  const emits = defineEmits(['cancel'])

  const Name = ref<string>(store.userName)

  const submit = () => {
    if (!Name.value || Name.value === store.userName) {
      return emits('cancel')
    }

    store.changeUserName(Name.value)
    init({ message: "You've successfully changed your name", color: 'success' })
    emits('cancel')
  }
</script>
