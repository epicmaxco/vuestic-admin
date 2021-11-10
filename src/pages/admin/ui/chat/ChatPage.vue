<template>
  <div class="chat-page">
    <div class="row">
      <div class="flex md6 xs12">
        <div class="chat">
          <chat-simple-header />
          <chat-simple-content :messages-list="messagesList" />
          <chat-simple-footer @send-message="sendMessage"/>
        </div>
      </div>

      <div class="flex md6 xs12">
        <div class="chat">
          <chat-advanced-header />
          <chat-advanced-content />
          <chat-advanced-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatSimpleHeader from './header/ChatSimpleHeader'
import ChatSimpleContent from './content/ChatSimpleContent'
import ChatSimpleFooter from './footer/ChatSimpleFooter'
import ChatAdvancedHeader from './header/ChatAdvancedHeader'
import ChatAdvancedContent from './content/ChatAdvancedContent'
import ChatAdvancedFooter from './footer/ChatAdvancedFooter'

export default {
  name: 'ChatPage',
  components: {
    ChatSimpleHeader,
    ChatSimpleContent,
    ChatSimpleFooter,
    ChatAdvancedHeader,
    ChatAdvancedContent,
    ChatAdvancedFooter,
  },
  data () {
    return {
      messagesList: [
        { text: 'Pure magic!! 🎩', isMessageIncoming: true, viewed: true},
        { text: 'I have some cool ideas!', isMessageIncoming: true, sendingTime: '16:22', viewed: false},
        { text: 'How about vodka and pepsi?', isMessageIncoming: false, sendingTime: '16:26', viewed: false},
        { text: 'Hi', isMessageIncoming: true, viewed: true},
        { text: 'Hello', isMessageIncoming: true, sendingTime: '16:57', viewed: true},
        { text: 'Hola', isMessageIncoming: true, viewed: false},
        { text: 'Wrrrr', isMessageIncoming: false, viewed: false},
        { text: 'Prrrrrr', isMessageIncoming: true, viewed: true},
      ]
    }
  },
  methods: {
    sendMessage(data) {
      this.messagesList.push(
        {text: data.inputValue, isMessageIncoming: false, sendingTime: '16:22', viewed: false},
      )
    },
  }
}
</script>

<style lang="scss">
.chat-page {
  max-width: 900px;
}

.chat {
  background: var(--va-light-gray2);

  &__header {
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    height: 50px;
    border-bottom: 1px solid var(--va-separator-color);

    &--simple {
      justify-content: center;
    }
  }

  &__content {
    height: 500px;
    >div {
      overflow: auto !important;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  }
}
</style>
