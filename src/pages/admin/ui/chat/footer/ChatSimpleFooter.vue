<template>
  <div class="chat__footer chat__footer--simple pa-3">
    <div class="chat__typing text--small text--gray pb-2">{{ chatAdminName }} is typing <span class="ml-1">💬</span></div>
    <div class="chat__message d-flex">
      <va-input v-model="inputValue" placeholder="Your message" @keyup.enter.exact="sendMessage()"/>
      <va-button class="va-button--square" @click="sendMessage()" >Send</va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatFooterSimple',
  data () {
    return {
      inputValue: '',
      chatAdminName: 'Maria',
    }
  },
  computed: {
    notEmpty() {
      return this.inputValue && this.inputValue.trim();
    },
  },
  methods: {
    sendMessage() {
      if (!this.notEmpty) {
        return;
      }
      this.$emit('send-message', {
        inputValue: this.inputValue
      });
      this.inputValue = '';
    },

  }
}
</script>

