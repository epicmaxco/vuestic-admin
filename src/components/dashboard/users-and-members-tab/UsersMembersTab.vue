<template>
  <div class="users-members-tab dashboard-tab">
    <div class="row">
      <div class="col-md-4 d-flex">
        <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'"
                              :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
        </vuestic-profile-card>
      </div>
      <div class="col-md-8 d-flex">
        <vuestic-chat v-model="chatMessages"></vuestic-chat>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticChat from 'components/common/vuestic-chat/VuesticChat'
  import VuesticProfileCard from 'components/common/vuestic-profile-card/VuesticProfileCard.vue'

  export default {
    name: 'users-members-tab',
    components: {
      VuesticChat,
      VuesticProfileCard
    },
    data () {
      return {
        chatMessages: [
          {
            text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
            yours: false
          },
          {
            text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
            yours: true
          },
          {
            text: 'Sounds great! See you later!',
            yours: false
          },
          {
            text: 'Should I bring a lightbox with me?',
            yours: true
          },
          {
            text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
            yours: false
          },
          {
            text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',
            yours: true
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";


</style>
