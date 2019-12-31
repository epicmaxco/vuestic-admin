<template>
  <va-dropdown
    class="notification-dropdown"
    offset="0, 16px"
    boundary-body
  >
    <va-icon-notification
      slot="anchor"
      class="notification-dropdown__icon"
      :class="{'notification-dropdown__icon--unread': !allRead}"
      :color="contextConfig.invertedColor ? $themes.gray : 'white'"
    />
    <div class="notification-dropdown__content pl-3 pr-3 pt-2 pb-2">
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
      <div class="row justify--space-between">
        <va-button class="ma-0 mb-2 mt-1" small>{{ $t('notifications.all') }}</va-button>
        <va-button class="ma-0 mb-2 mt-1" small outline @click="markAllAsRead" :disabled="allRead">{{ $t('notifications.mark_as_read') }}</va-button>
      </div>
    </div>
  </va-dropdown>
</template>

<script>
import VaIconNotification from '../../../../../iconset/VaIconNotification'
import { ColorThemeMixin } from '../../../../../services/vuestic-ui'

export default {
  name: 'notification-dropdown',
  inject: ['contextConfig'],
  components: {
    VaIconNotification,
  },
  mixins: [ColorThemeMixin],
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

<style lang="scss">

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
      background-color: $brand-danger;
      height: 0.375rem;
      width: 0.375rem;
      margin: 0 auto;
      border-radius: 0.187rem;
    }
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;
    max-width: 19rem;
  }

  &__item {
    cursor: pointer;
    margin-bottom: 0.75rem;
    color: $brand-secondary;
    flex-wrap: nowrap;
    position: relative;

    &--unread {
      color: $vue-darkest-blue;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: 0.375rem;
        width: 0.375rem;
        background-color: $brand-danger;
        margin: auto;
        border-radius: 0.187rem;
      }
    }

    &:hover {
      color: $vue-green;
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
