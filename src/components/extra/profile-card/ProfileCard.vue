<template>
  <div class="profile-card">
    <div class="row">
      <div class="col-md-12">
        <widget header-text="Profile Card">
          <div class="container d-flex justify-content-center">
            <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'"></vuestic-profile-card>
          </div>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import VuesticProfileCard from '../../common/vuestic-profile-card/VuesticProfileCard.vue'

  export default {
    name: 'profile-card',
    components: {
      VuesticProfileCard,
      Widget
    }
  }
</script>
