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
        :label="inputLabel"
        class="va-chat__input"
      />
      <va-button
        @click="sendMessage()"
        slot="append"
      >
        {{buttonLabel}}
      </va-button>
    </div>
  </div>
</template>

<script>
import StickyScroll from '../../vuestic-directives/StickyScroll'
// NOTE Doesn't seem like reusable component.
// Might make more sense to make part of presentation.

export default {
  name: 'va-chat',
  components: {},
  directives: { StickyScroll },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    height: {
      default: '20rem',
      type: String,
    },
    inputLabel: {
      default: 'Your message',
      type: String,
    },
    buttonLabel: {
      default: 'Send',
      type: String,
    },
  },

  data () {
    return {
      inputMessage: '',
    }
  },

  methods: {
    sendMessage () {
      if (this.inputMessage) {
        this.$emit('input', this.value.concat({
          text: this.inputMessage,
          yours: true,
        }))
        this.inputMessage = ''
      }
    },
  },

  mounted () {
    this.$emit('input', this.value)
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
    border-top-right-radius: 0;

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
