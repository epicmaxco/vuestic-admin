<template>
  <div class="chat__footer chat__footer--simple pa-3">
    <div class="chat__typing text--small text--gray pb-2">Maria is typing <span class="ml-1">💬</span></div>
    <div class="chat__message d-flex">
      <va-input v-model="message" placeholder="Your message" />
      <va-button class="va-button--square">Send</va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatFooterSimple',
  data () {
    return {
      message: '',
    }
  }
}
</script>

<style lang="scss" scoped>
$borderColor: #E1E9F8;
$textDarkGray: #767C88;
//:root {
//  --va-button-square-border-radius: 0;
//}

//TODO: check variables overwriting
::v-deep .va-input__container, .va-button, .va-input {
  --va-button-square--border-radius: 0 !important;
  //border-radius: 0;
  //border-radius: var(--va-button-square-border-radius);
}

.va-input {
  border: 1px solid $borderColor;
}

.chat__typing {
  color: $textDarkGray;
}
</style>
