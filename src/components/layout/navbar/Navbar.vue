<template>
  <nav class="navbar app-navbar navbar-toggleable-md">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="menu-icon i-menu-expanded" href="#" @click.prevent="toggleSidebar(false)" v-if="sidebarOpened"></a>
    <a class="menu-icon i-menu-collapsed" href="#" @click.prevent="toggleSidebar(true)" v-else></a>

    <a class="navbar-brand" href="#">
      <i class="i-vuestic"></i>
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown navbar-dropdown" v-dropdown>
          <a class="nav-link dropdown-toggle" href="#"><span class="i-nav-messages notify"></span></a>
          <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
            <span class="ellipsis">New messages from Oleg M</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="ellipsis">New messages from Andrei H</span>
          </a>
            <div class="dropdown-item plain-link-item">
              <a class="plain-link" href="#">See all messages</a>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown navbar-dropdown" v-dropdown>
          <a class="nav-link dropdown-toggle" href="#"><span class="i-nav-notification notify"></span></a>
          <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                <span class="ellipsis">Vasily S sent you a message</span>
              </a>
              <a class="dropdown-item" href="#">
                <span class="ellipsis">Oleg M uploaded new Zip file with typography component</span>
              </a>
              <a class="dropdown-item" href="#">
                <span class="ellipsis">Andrei H started a new topic</span>
              </a>
              <div class="dropdown-item plain-link-item">
                <a class="plain-link" href="#">See all notifications</a>
              </div>
          </div>
        </li>
        <li class="nav-item dropdown navbar-dropdown" v-dropdown>
          <a class="nav-link dropdown-toggle" href="#">
            <span class="avatar-container"></span>
          </a>
          <div class="dropdown-menu">
            <div class="dropdown-item plain-link-item">
              <a class="plain-link" href="#">My Profile</a>
            </div>
            <div class="dropdown-item plain-link-item">
              <a class="plain-link" href="#">Logout</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Dropdown from 'directives/Dropdown'

  export default {
    name: 'navbar',

    directives: {
      dropdown: Dropdown
    },

    computed: mapGetters([
      'sidebarOpened'
    ]),

    methods: {
      ...mapActions([
        'toggleSidebar'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .navbar.app-navbar {
    height: $top-nav-height;
    padding-left: $nav-padding-left;
    padding-right: $nav-padding-right;
    background-color: $top-nav-bg;

    .avatar-container {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
    }

    .menu-icon {
      margin-right: 28px;
    }

    .dropdown.navbar-dropdown {
      .dropdown-toggle {
        &:after {
           display: none;
         }
      }

      &.show {
        .dropdown-menu {
          left: auto;
          right: 0;
        }
        &:after {
           position: absolute;
           bottom: -16px;
           right: calc(50% - 10px);
           width: 0;
           height: 0;
           display: block;
           content: '';
           border-left: 10px solid transparent;
           border-right: 10px solid transparent;
           border-bottom: 10px solid $darkest-gray;
         }
      }

      .dropdown-menu {
        margin-top: 15px;
        max-width: 345px;
      }


      .dropdown-item {
        height: $navbar-dd-item-height;
        cursor: pointer;
        font-size: $font-size-base;

        &:hover, &:active, &:focus, &.active {
          outline: none;
        }

        &.plain-link-item {
          color: $brand-primary;

          &:hover, &:active, &:focus {
            background: $dropdown-background;
          }

          .plain-link {
            text-decoration: none;
          }
        }
      }
    }

    .notify {
      position: relative;

      &::after {
         content: '';
         position: absolute;
         right: -6px;
         top: -6px;
         background-color: $brand-primary;
         height: 12px;
         width: 12px;
         border-radius: 50%;
       }
    }

    .i-nav-notification.notify::after {
      right: -4px;
      top: 0;
    }
  }
</style>
