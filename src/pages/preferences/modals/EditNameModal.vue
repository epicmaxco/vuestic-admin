<template>
  <VaModal
    :mobile-fullscreen="false"
    size="small"
    hide-default-actions
    max-width="380px"
    model-value
    close-button
    @update:modelValue="emits('cancel')"
  >
    <h1 class="va-h5 mb-4">Reset password</h1>
    <VaForm ref="form" @submit.prevent="submit">
      <VaInput v-model="Name" class="mb-4" label="Name" placeholder="Name" />
      <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-end md:space-x-4">
        <VaButton :style="buttonStyles" preset="secondary" color="secondary" @click="emits('cancel')"> Cancel</VaButton>
        <VaButton :style="buttonStyles" class="mb-4 md:mb-0" type="submit" @click="submit"> Save</VaButton>
      </div>
    </VaForm>
  </VaModal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '../../../stores/user-store'

import { buttonStyles } from '../styles'
import { useToast } from 'vuestic-ui'

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

<style lang="scss">
// TODO temporary before https://github.com/epicmaxco/vuestic-ui/issues/4020 fix
.va-modal__inner {
  min-width: 326px;
}
</style>
