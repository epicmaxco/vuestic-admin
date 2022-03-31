<template>
  <va-dropdown
    class="notification-dropdown"
    position="bottom"
    :offset="[0, 13]"
  >
    <template #anchor>
      <va-icon-notification
        class="notification-dropdown__icon"
        :class="{'notification-dropdown__icon--unread': !allRead}"
      />
    </template>
    <va-dropdown-content class="notification-dropdown__content pl-3 pr-3 pt-2 pb-2">
      <div
        v-for="option in computedOptions"
        :key="option.id"
        class="notification-dropdown__item row pt-1 pb-1 mt-2 mb-2"
        :class="{'notification-dropdown__item--unread': option.unread}"
        @click="option.unread = false"
      >
        <img v-if="option.details.avatar" class="mr-2 notification-dropdown__item__avatar" :src="option.details.avatar"/>
        <span class="ellipsis" style="max-width: 85%;">
          <span class="text--bold" v-if="option.details.name">{{option.details.name}}</span> {{$t(`notifications.${option.name}`, { type: option.details.type })}}
        </span>
      </div>
      <div class="row justify--space-between mt-1">
        <va-button class="md6 mr-2" size="small">{{ $t('notifications.all') }}</va-button>
        <va-button class="md6" size="small" outline @click="markAllAsRead" :disabled="allRead">{{ $t('notifications.mark_as_read') }}</va-button>
      </div>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script>
import VaIconNotification from '@/components/icons/VaIconNotification'

export default {
  name: 'notification-dropdown',
  components: {
    VaIconNotification,
  },
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
          details: { name: 'Vasily S', avatar: 'https://picsum.photos/123' },
          unread: true,
          id: 1,
        },
        {
          name: 'uploadedZip',
          details: {
            name: 'Oleg M',
            avatar: 'https://picsum.photos/100',
            type: 'typography component',
          },
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
      this.computedOptions = this.computedOptions.map(item => ({
        ...item,
        unread: false,
      }))
    },
  },
}
</script>

<style lang="scss" scoped>

.row {
  flex-wrap: nowrap !important;
}
.md6 {
  box-sizing: border-box;
}

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
      top: -0.5rem;
      // background-color: $brand-danger;
      height: 0.375rem;
      width: 0.375rem;
      margin: 0 auto;
      border-radius: 0.187rem;
    }
  }

  &__content {
    max-width: 20rem;
  }

  &__item {
    cursor: pointer;
    margin-bottom: 0.75rem;
    flex-wrap: nowrap;
    position: relative;

    &--unread {
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: 0.375rem;
        width: 0.375rem;
        margin: auto;
        border-radius: 0.187rem;
      }
    }

    &:hover {
      color: var(--va-primary);
    }

    &__avatar {
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      min-width: 1.5rem;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
