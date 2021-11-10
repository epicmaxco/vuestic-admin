<template>
  <div class="chat__content pa-3 d-flex">
    <div class="chat__content-wrapper">
      <div class="text--bold text--secondary text--uppercase text--small text--center pa-5">October 6, 2021</div>

      <va-infinite-scroll
        class="chat__content-messages d-flex"
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
          <div class="chat__message-text pa-2 my-1">{{ item.text }}</div>
          <div class="chat__message-time text--small mb-2"><span v-if="item.sendingTime" >{{ item.sendingTime }}</span>
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
}
</script>

<style lang="scss" scoped>
.chat__content {
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;


  &-messages {
    //TODO: change to style framework classes
    flex-direction: column;
  }
}

.chat__message {
  display: inline-block;

  &-text {
    border-radius: var(--va-input-border-radius);
  }

  &-time {
    color: var(--va-text-gray);
  }

  &--outgoing {
    margin-left: auto;
    text-align: right;

    .chat__message-text {
      color: white;
      background: var(--va-bright-blue);
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
