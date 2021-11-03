<template>
  <div class="chat-page">
    <div class="row">
      <div class="flex md6 xs12">
        <div class="chat">
          <chat-simple-header />
          <chat-simple-content />
          <chat-simple-footer />
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
  name: 'chat',
  components: {
    ChatSimpleHeader,
    ChatSimpleContent,
    ChatSimpleFooter,
    ChatAdvancedHeader,
    ChatAdvancedContent,
    ChatAdvancedFooter,
  },
}
</script>

<style lang="scss">
//$avatarBackgroundColor: #FFE872;

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
    height: calc(100vh - 20rem);
  }
}
</style>






<!--<template>-->
<!--  <div class="chat">-->
<!--    <div class="row">-->
<!--      <div class="flex xs12 md12">-->
<!--        <va-card>-->
<!--          <va-card-title>{{ $t('chat.title') }}</va-card-title>-->
<!--          <va-card-content>-->
<!--            <chat v-model="chatMessages"/>-->
<!--          </va-card-content>-->
<!--        </va-card>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Chat from './Chat'-->

<!--export default {-->
<!--  name: 'chat-page',-->
<!--  components: { Chat },-->
<!--  data () {-->
<!--    return {-->
<!--      chatMessages: [-->
<!--        {-->
<!--          text: 'Hello! So glad you liked my work. Do you want me to shoot you?',-->
<!--          yours: false,-->
<!--        },-->
<!--        {-->
<!--          text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',-->
<!--          yours: true,-->
<!--        },-->
<!--        {-->
<!--          text: 'Sounds great! See you later!',-->
<!--          yours: false,-->
<!--        },-->
<!--        {-->
<!--          text: 'Should I bring a lightbox with me?',-->
<!--          yours: true,-->
<!--        },-->
<!--        {-->
<!--          text: 'No, thanks. There is no need. Can we set up a meeting earlier?',-->
<!--          yours: false,-->
<!--        },-->
<!--        {-->
<!--          text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',-->
<!--          yours: true,-->
<!--        },-->
<!--      ],-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style lang='scss'>-->

<!--</style>-->
