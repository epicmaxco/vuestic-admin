<template>
  <div class="vuestic-chat">
    <div class="chat-body" :style="{'height': height}"
         v-sticky-scroll="{animate: true, duration: 500}">
      <div
        class="chat-message"
        v-for="(message, index) in value"
        :key="index"
        :class="{'yours': message.yours, 'alien': !message.yours}"
      >
        {{message.text}}
      </div>
    </div>
    <div class="chat-controls">
      <fieldset>
        <div class="form-group form-group-w-btn">
          <div class="input-group">
            <input @keypress="keyHandler($event)" v-model="inputMessage"
                   required title=""/>
            <label class="control-label">Your message</label><i class="bar"></i>
          </div>
          <div class="btn btn-sm btn-primary" @click="sendMessage()">Send</div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import StickyScroll from 'vuestic-directives/StickyScroll'

export default {
  name: 'vuestic-chat',

  directives: { StickyScroll },

  props: {
    value: {
      type: Array,
      default: () => [],
    },
    height: {
      default: '20rem',
    },
  },

  data () {
    return {
      inputMessage: '',
    }
  },

  methods: {
    keyHandler (event) {
      if (event.keyCode === 13) {
        this.sendMessage()
      }
    },

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
$chat-body-min-height: 18.75rem;
$chat-body-mb: 1.5rem;
$chat-message-mb: 0.625rem;
$chat-message-py: 0.657rem;
$chat-message-px: 1.375rem;
$chat-message-br: 0.875rem;

.vuestic-chat {
  width: 100%;
}

.chat-body {
  min-height: $chat-body-min-height;
  display: flex;
  flex-direction: column;
  margin-bottom: $chat-body-mb;
  overflow: auto;
}

.chat-message {
  padding: $chat-message-py $chat-message-px;
  margin-bottom: $chat-message-mb;
  border-radius: $chat-message-br;
  max-width: 70%;
  overflow-wrap: break-word;

  &:last-child {
    margin-bottom: 0;
  }

  &.alien {
    align-self: flex-start;
    border-top-left-radius: 0;
    background-color: $light-gray2;
  }

  &.yours {
    align-self: flex-end;
    border-top-right-radius: 0;
    background-color: $brand-primary;
  }

  .chat-message-input {
    resize: vertical !important;
  }
}

</style>
