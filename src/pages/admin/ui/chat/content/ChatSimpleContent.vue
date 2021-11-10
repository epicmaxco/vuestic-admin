<template>
  <div class="chat__content pa-3 d-flex">
    <div>
      <div class="chat__content-date text--bold text--secondary text--uppercase text--small text--center pa-5">October 6, 2021</div>

      <va-infinite-scroll
        class="chat__content-messages"
        :load="messagesList"
        disabled
        reverse
      >
        <div
          v-for="(item, index) in messagesList"
          :key="index"
          class="chat__message"
          :class="{'chat__message--outgoing' : !item.isMessageIncoming, 'chat__message--incoming' : item.isMessageIncoming}"
        >
          <div class="chat__message-text">{{ item.text }}</div>
          <div class="chat__message-time"><span v-if="item.sendingTime" >{{ item.sendingTime }}</span>
            <va-icon-double-check
              v-if="!item.isMessageIncoming"
              :class="{'chat__message-icon--viewed': item.viewed}"
            />
          </div>
        </div>
      </va-infinite-scroll>
    </div>
  </div>
</template>

<script>
import VaIconDoubleCheck from '@/components/icons/VaIconDoubleCheck'

export default {
  components: {
    VaIconDoubleCheck,
  },
  props: {
    messagesList: {
      type: Array,
      required: true,
    },
    inputValue: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      isMessageIncoming: false,
    }
  },
}
</script>

<style lang="scss" scoped>
$outgoingBackground: #246FFF;

.chat__content {
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;

  &-date {
    width: 100%;
  }

  &-messages {
    display: flex;
    flex-direction: column;
  }
}

.chat__message {
  display: inline-block;

  &-text {
    padding: 0.8rem;
    margin: 0.25rem 0;
    border-radius: 0.25rem;
  }

  &-time {
    color: #767C88;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  &--outgoing {
    margin-left: auto;
    text-align: right;

    .chat__message-text {
      color: white;
      background: $outgoingBackground;
    }
  }

  &--incoming {
    margin-right: auto;

    .chat__message-text {
      background: white;
    }
  }
}
</style>
