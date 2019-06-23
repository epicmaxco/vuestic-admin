<template>
    <va-dropdown
      class="notification-dropdown"
    >
      <va-icon
        slot="anchor"
        name="i-nav-notification"
        class="notification-dropdown__icon"
        :class="{'notification-dropdown__icon--unread': !allRead}"
      />
      <div class="notification-dropdown__content py-3 px-2">
        <div
          v-for="option in computedOptions"
          :key="option.id"
          class="notification-dropdown__item pr-3 va-row"
          :class="{'notification-dropdown__item--unread': option.unread}"
          @click="option.unread = false"
         >
          <img v-if="option.details.avatar" class="mr-1 notification-dropdown__item__avatar" :src="option.details.avatar"/>
          <span class="ellipsis">
            {{$t(`notifications.${option.name}`, { name: option.details.name, type: option.details.type })}}
          </span>
        </div>
        <div class="va-row justify--space-between">
          <va-button class="m-0 mr-1" small>{{ $t('notifications.all') }}</va-button>
          <va-button class="m-0" small outline @click="markAllAsRead" :disabled="allRead">{{ $t('notifications.mark_as_read') }}</va-button>
        </div>
      </div>
    </va-dropdown>
</template>

<script>
export default {
  name: 'notification-dropdown',
  data () {
    return {
      computedOptions: [...this.options],
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'sentMessage',
          details: { name: 'Vasily S', avatar: 'https://picsum.photos/100' },
          unread: true,
          id: 1,
        },
        {
          name: 'uploadedZip',
          details: { name: 'Oleg M', avatar: 'https://picsum.photos/100', type: 'typography component' },
          unread: true,
          id: 2,
        },
        {
          name: 'startedTopic',
          details: { name: 'Andrei H', avatar: 'https://picsum.photos/24' },
          unread: true,
          id: 3,
        },
      ],
    },
  },
  computed: {
    allRead () {
      return !this.computedOptions.filter(item => item.unread).length
    },
  },
  methods: {
    markAllAsRead () {
      this.computedOptions = this.computedOptions.map(item => ({ ...item, unread: false }))
    },
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.notification-dropdown {
  cursor: pointer;
  .notification-dropdown__icon {
    position: relative;
    display: flex;
    align-items: center;

    &--unread::before {
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
  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: .5rem;
    max-width: 25rem;
  }
  &__item {
    cursor: pointer;
    margin-bottom: .75rem;
    color: $brand-secondary;
    flex-wrap: nowrap;
    position: relative;
    &--unread {
      color: $vue-darkest-blue;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: .375rem;
        width: .375rem;
        background-color: $brand-danger;
        margin: auto;
        border-radius: .187rem;
      }
    }
    &:hover {
      color: $vue-green;
    }
    &__avatar {
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
