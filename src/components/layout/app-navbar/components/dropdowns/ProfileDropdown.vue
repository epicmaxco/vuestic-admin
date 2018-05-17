<template>
  <div class="col nav-item dropdown navbar-dropdown" v-dropdown>
    <a class="nav-link dropdown-toggle" href="#" @click.prevent="closeMenu">
      <span class="profile-section-avatar-container">
        <slot></slot>
      </span>
    </a>
    <div class="dropdown-menu last">
      <div class="dropdown-menu-content">
        <div v-for="(option, id) in options" :key="id"
          class="dropdown-item plain-link-item">
          <a class="plain-link" href="#">{{ `user.${option.name}` | translate}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'profile-section',

    props: {
      options: {
        type: Array,
        required: true
      }
    },

    computed: {
      ...mapActions(['closeMenu'])
    },

    methods: {
      ...mapActions([
        'closeMenu'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../../../../sass/variables";

  .dropdown.navbar-dropdown {

    .profile-section-avatar-container {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      border: 2px solid $lighter-gray;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }

  }

</style>
