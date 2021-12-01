<template>
  <div class="chat__footer chat__footer--advanced pa-3">
    <div class="chat__typing text--small text--gray pb-2 pl-2">{{ chatAdminName }} is typing <span class="ml-1">💬</span></div>
    <div class="chat__message d-flex">
      <va-input v-model="inputValue" placeholder="Your message"
        @focus="onFocus"
        @submit="sendMessage()"
        @blur="onBlur"
        @keyup.enter.exact="sendMessage()"/>
      <va-button v-if="notEmpty || showSendButton" class="va-button--square" @click="sendMessage()" >Send</va-button>
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
      showSendButton: false,
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
    onFocus() {
      this.showSendButton = true;
    },
    onBlur() {
      setTimeout(() => {
        this.showSendButton = false;
      });
    }
  }
}
</script>

<style lang="scss">
.chat__footer--advanced {
  padding: 0 !important;

  .va-input {
    width: 100%;
    border: 1px solid var(--va-light-blue-border);

    &__container {
      height: 45px;
    }
  }

  .chat__message {
    position: relative;
  }

  .va-button {
    position: absolute;
    right: 8px;
    top: 4.5px;
    border-radius: 30px;
    width: 65px;
  }
}
</style>

