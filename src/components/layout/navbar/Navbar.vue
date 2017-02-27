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
        <li class="nav-item">
          <a class="nav-link" href="#"><span class="i-nav-messages notify"></span></a>
        </li>
        <li class="nav-item dropdown navbar-dropdown" v-dropdown>
          <a class="nav-link dropdown-toggle" href="#"><span class="i-nav-notification notify"></span></a>
          <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Vasily S sent you a message</a>
              <a class="dropdown-item" href="#">Oleg M uploaded new Zip file with typography component</a>
              <a class="dropdown-item" href="#">Andrei H started a new topic</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="avatar-container"></span>
          </a>
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
      }

      .dropdown-menu {
        margin-top: 15px;
        padding: 0;
        border-radius: 0;
        background-color: $darkest-gray;
        box-shadow: $navbar-dd-box-shadow;
      }


      .dropdown-item {
        height: $navbar-dd-item-height;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $navbar-dd-item-color;
        padding: 0 25px;

        &:hover, &:active, &:focus {
          outline: none;
          background-color: $navbar-dd-item-hover-bg;
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
