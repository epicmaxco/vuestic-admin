<template>
  <div class="col nav-item dropdown navbar-dropdown" v-dropdown>
    <a class="nav-link dropdown-toggle" href="#">
      <span class="i-nav-notification"></span>
    </a>
    <div class="dropdown-menu">
      <div class="dropdown-menu-content">
        <a v-for="(option, id) in options" :key="id" class="dropdown-item" href="#">
          <span class="ellipsis">{{$t(`notifications.${option.name}`, { name: option.details.name, type: option.details.type })}}</span>
        </a>
        <div class="dropdown-item plain-link-item">
          <a class="plain-link" href="#">{{'notifications.all' | translate}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'notification-dropdown',

    props: {
      options: {
        type: Array,
        required: true
      }
    },
  }
</script>

<style lang="scss">
  @import "../../../../../sass/variables";

   .i-nav-notification {
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

  .i-nav-notification::after {
    right: -4px;
    top: 0;
  }

</style>
