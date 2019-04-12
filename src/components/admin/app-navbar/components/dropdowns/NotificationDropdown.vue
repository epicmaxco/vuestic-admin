<template>
  <div class="notification-dropdown flex-center">
    <va-icon icon="i-nav-notification"/>
    <va-dropdown
      v-model="isShown"
      position="bottom"
      class="notification-dropdown__list"
    >
      <div
        v-for="(option, id) in options"
        :key="id"
        class="va-dropdown-item"
        href="#"
       >
        <span class="ellipsis">{{$t(`notifications.${option.name}`,
          { name: option.details.name, type: option.details.type })}}
        </span>
      </div>
      <div class="va-row justify--space-between">
        <va-button href="#">{{ $t('notifications.all') }}</va-button>
        <va-button flat href="#">{{ $t('notifications.all') }}</va-button>
      </div>
    </va-dropdown>
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

    &::before {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      top: -.5rem;
      background-color: $brand-danger;
      height: .375rem;
      width: .375rem;
      margin: 0 auto;
      border-radius: .187rem;
    }
  }
}
</style>
