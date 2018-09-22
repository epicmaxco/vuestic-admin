<template>
  <vuestic-dropdown arrow>
    <span slot="dropdown-button" class="i-nav-notification"></span>
    <template>
      <a v-for="(option, id) in options" :key="id" class="dropdown-item" href="#">
          <span class="ellipsis">{{$t(`notifications.${option.name}`,
            { name: option.details.name, type: option.details.type })}}
          </span>
      </a>
      <div class="dropdown-item plain-link-item">
        <a class="plain-link" href="#">{{'notifications.all' | translate}}</a>
      </div>
    </template>
  </vuestic-dropdown>
</template>

<script>
export default {
  name: 'notification-dropdown',

  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'sentMessage',
          details: { name: 'Vasily S' }
        },
        {
          name: 'uploadedZip',
          details: { name: 'Oleg M', type: 'typography component' }
        },
        {
          name: 'startedTopic',
          details: { name: 'Andrei H' }
        }
      ],
    }
  },
}
</script>

<style lang="scss">
   .i-nav-notification {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: -4px;
      top: 0;
      background-color: $brand-primary;
      height: 12px;
      width: 12px;
      border-radius: 50%;
    }
  }
</style>
