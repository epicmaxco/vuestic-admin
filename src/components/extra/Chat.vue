<template>
  <div class="va-chat">
    <div
      class="va-chat__body"
      :style="{'height': height}"
      v-sticky-scroll="{
        animate: true,
        duration: 500
      }"
    >
      <div
        class="va-chat__message"
        v-for="(message, index) in value"
        :key="index"
        :class="{'va-chat__message--yours': message.yours}"
      >
        {{message.text}}
      </div>
    </div>
    <div class="va-chat__controls">
      <va-input
        v-model="inputMessage"
        @keypress.enter="sendMessage"
        label="Your message"
        class="va-chat__input"
      />
      <va-button @click="sendMessage()">
        Send
      </va-button>
    </div>
  </div>
</template>

<script>
import StickyScroll from '../../vuestic-theme/vuestic-directives/StickyScroll'

export default {
  name: 'chat',
  directives: { StickyScroll },
  data () {
    return {
      inputMessage: '',
    }
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    height: {
      default: '20rem',
      type: String,
    },
  },
  methods: {
    sendMessage () {
      if (!this.inputMessage) {
        return
      }
      this.$emit('input', this.value.concat({
        text: this.inputMessage,
        yours: true,
      }))
      this.inputMessage = ''
    },
  },
}
</script>

<style lang='scss' scoped>
$chat-message-br: .875rem;

.va-chat {
  width: 100%;

  &__body {
    min-height: 18.75rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    overflow-y: auto;
  }

  &__message {
    padding: .657rem 1.375rem;
    margin-bottom: .625rem;
    max-width: 70%;
    overflow-wrap: break-word;
    border-radius: $chat-message-br;
    border-top-left-radius: 0;

    align-self: flex-start;
    background-color: $light-gray2;

    &:last-child {
      margin-bottom: 0;
    }

    &--yours {
      align-self: flex-end;
      border-top-right-radius: 0;
      border-top-left-radius: $chat-message-br;
      background-color: $brand-primary;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
  }

  &__input {
    margin-bottom: 0;
  }
}
</style>
