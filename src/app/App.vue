<template>
  <div id="app" class="app" :class="{'inverted-color': contextConfig.invertedColor}">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // Temporary config for 2.1.
      contextConfig: {
        gradient: true,
        shadow: 'lg', // 3 states: 'sm', 'lg', undefined (no shadow).
        invertedColor: false,
      },
    }
  },
  provide () {
    return {
      contextConfig: this.contextConfig,
    }
  },
}
</script>

<style lang="scss">
@import '../sass/main.scss';

$vue-purple: #6c7fee;
$purple-box-shadow: 0 4px 9.6px 0.4px rgba($vue-purple, 0.5);

body {
  height: 100%;

  #app {
    height: 100%;

    // Temporary colors fix for 2.1.
    &.inverted-color {
      ::selection {
        background-color: $vue-purple;
        color: $white;
      }

      .link {
        color: $vue-purple;
      }

      .va-data-table {
        th.sortable {
          color: $vue-purple;
        }
      }

      .va-dropdown {
        .profile-dropdown,
        .language-dropdown,
        .message-dropdown,
        .notification-dropdown {
          &__item {
            &.active,
            &:hover {
              color: $vue-purple;
            }
          }
        }
      }
    }
  }

  .toasted-container.inverted-color {
    .toasted.vuestic-toast {
      box-shadow: $purple-box-shadow;

      i,
      i.fa {
        color: $vue-purple;
      }
    }
  }
}
</style>
