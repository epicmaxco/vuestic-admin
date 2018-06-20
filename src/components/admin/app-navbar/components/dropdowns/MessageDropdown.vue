<template>
  <div class="col nav-item dropdown navbar-dropdown" v-dropdown>
    <a class="nav-link dropdown-toggle" href="#">
      <span class="i-nav-messages"></span>
    </a>
    <div class="dropdown-menu">
      <div class="dropdown-menu-content">
        <a v-for="(option, id) in options" :key="id" class="dropdown-item" href="#">
          <span class="ellipsis">{{ $t(`messages.${option.name}`, { name: option.details.name})}}</span>
        </a>
        <div class="dropdown-item plain-link-item">
          <a class="plain-link" href="#">{{'messages.all' | translate}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'message-dropdown',

    props: {
      options: {
        type: Array,
        default: () => [
          {
            name: 'new',
            details: { name: 'Oleg M' }
          },
          {
            name: 'new',
            details: { name: 'Andrei H' }
          },
        ]
      }
    },
  }
</script>

<style lang="scss">
  .i-nav-messages {
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

</style>
