<template>
  <div class="users-members-tab dashboard-tab">
    <div class="va-row">
      <div class="flex md3 flex justify--center align--center">
        <vuestic-profile-card :name="'Veronique Lee'"
                              :location="'Malaga, Spain'"
                              photoSource="https://i.imgur.com/NLrdqsk.png"
                              :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
        </vuestic-profile-card>
      </div>
      <div class="flex md9">
        <vuestic-chat v-model="chatMessages"></vuestic-chat>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users-members-tab',

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

<style lang="scss" scoped>
.vuestic-profile-card {
  margin-left: 1rem;

  @include media-breakpoint-up(md) {
    margin-top: -$tab-content-pt;
  }

  @include media-breakpoint-down(md) {
    margin-bottom: $tab-content-pt;
    margin-left: 0;
  }
}

</style>
