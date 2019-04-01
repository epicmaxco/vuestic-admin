<template>
  <div class="users-members-tab dashboard-tab">
    <div class="va-row justify--center">
      <div class="flex md3 flex justify--center align--center">
        <va-profile-card
          name="Veronique Lee"
          location="Malaga, Spain"
          photoSource="https://i.imgur.com/NLrdqsk.png"
          :social="{twitter: 'twitter.com', facebook: 'facebook.com', instagram: 'instagram.com'}"
        />
      </div>
      <div class="flex md9">
        <va-chat v-model="chatMessages"/>
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
