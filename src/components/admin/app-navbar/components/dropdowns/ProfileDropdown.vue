<template>
  <div class="profile-dropdown col nav-item dropdown navbar-dropdown" v-dropdown>
    <a class="nav-link dropdown-toggle" href="#">
      <span class="profile-section-avatar-container">
        <slot></slot>
      </span>
    </a>
    <div class="dropdown-menu last">
      <div class="dropdown-menu-content">
        <div v-for="(option, id) in options" :key="id"
          class="dropdown-item plain-link-item">
          <router-link :to="{name: option.redirectTo}" class="plain-link" href="#">{{ `user.${option.name}` | translate}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile-section',

    props: {
      options: {
        type: Array,
        default: () => [
          {
            name: 'profile',
            redirectTo: '',
          },
          {
            name: 'logout',
            redirectTo: 'login'
          }
        ]
      }
    },
  }
</script>

<style lang="scss">
  .profile-dropdown {

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
