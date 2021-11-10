<template>
  <div class="chat__footer chat__footer--simple pa-3">
    <div class="chat__typing text--small text--gray pb-2">Maria is typing <span class="ml-1">💬</span></div>
    <div class="chat__message d-flex">
      <va-input v-model="inputValue" placeholder="Your message" />
      <va-button class="va-button--square" @click="sendMessage()">Send</va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatFooterSimple',
  data () {
    return {
      inputValue: '',
    }
  },
  methods: {
    sendMessage() {
      this.$emit('send-message', {
        inputValue: this.inputValue
      });
      this.inputValue = '';
    },
  }
}
</script>

<style lang="scss" scoped>
$borderColor: #E1E9F8;
$textDarkGray: #767C88;

.va-input-solid .va-input__container, .va-button, .va-input {
  --va-button-square-border-radius: 0 !important;
  --va-input-border-radius: 0 !important;
}

.va-input {
  border: 1px solid $borderColor;
}

.chat__typing {
  color: $textDarkGray;
}
</style>
