<template>
  <div class="grow notification-dropdown flex-center">
    <va-icon icon="i-nav-notification"/>
    <va-dropdown-old
      v-model="isShown"
      position="bottom"
      class="notification-dropdown__list"
    >
      <a v-for="(option, id) in options" :key="id" class="dropdown-item"
         href="#">
        <span class="ellipsis">{{$t(`notifications.${option.name}`,
          { name: option.details.name, type: option.details.type })}}
        </span>
      </a>
      <div class="dropdown-item plain-link-item">
        <a class="plain-link" href="#">{{ $t('notifications.all') }}</a>
      </div>
    </va-dropdown-old>
  </div>
</template>

<script>
export default {
  name: 'notification-dropdown',
  data () {
    return {
      isShown: false,
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'sentMessage',
          details: { name: 'Vasily S' },
        },
        {
          name: 'uploadedZip',
          details: { name: 'Oleg M', type: 'typography component' },
        },
        {
          name: 'startedTopic',
          details: { name: 'Andrei H' },
        },
      ],
    },
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.notification-dropdown {
  cursor: pointer;

  @at-root {
    .notification-dropdown__list {
      width: 250px;
    }
  }

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
}
</style>
