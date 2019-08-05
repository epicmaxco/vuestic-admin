<template>
  <div class="chat">
    <div class="row">
      <div class="flex xs12 md12">
        <va-card :title="$t('chat.title')">
          <chat v-model="chatMessages"/>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from './Chat'

export default {
  name: 'chat-page',
  components: { Chat },
  data () {
    return {
      chatMessages: [
        {
          text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
          yours: false,
        },
        {
          text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
          yours: true,
        },
        {
          text: 'Sounds great! See you later!',
          yours: false,
        },
        {
          text: 'Should I bring a lightbox with me?',
          yours: true,
        },
        {
          text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
          yours: false,
        },
        {
          text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',
          yours: true,
        },
      ],
    }
  },
}
</script>

<style lang='scss'>

</style>
