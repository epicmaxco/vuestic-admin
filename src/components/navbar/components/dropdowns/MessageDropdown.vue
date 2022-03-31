<template>
  <va-dropdown
    class="message-dropdown"
    position="bottom"
    :offset="[0, 13]"
  >
    <template #anchor>
      <va-icon-message
        class="message-dropdown__icon"
        :class="{'message-dropdown__icon--unread': !allRead}"
      />
    </template>

    <va-dropdown-content class="message-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <div
        v-for="option in computedOptions"
        :key="option.id"
        class="message-dropdown__item row pt-1 pb-1 mt-2 mb-2"
        :class="{'message-dropdown__item--unread': option.unread}"
        @click="option.unread = false"
      >
        <img :src="option.details.avatar" class="message-dropdown__item__avatar mr-2"/>
        <span class="ellipsis" style="max-width: 85%;">{{ $t(`messages.${option.name}`, { name: option.details.name})}}</span>
      </div>
      <div class="row justify--space-between mt-1">
        <va-button class="md6 mr-2" size="small">{{ $t('messages.all') }}</va-button>
        <va-button class="md6" size="small" outline @click="markAllAsRead" :disabled="allRead">{{ $t('messages.mark_as_read') }}</va-button>
      </div>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script>
import VaIconMessage from '@/components/icons/VaIconMessage'

export default {
  name: 'message-dropdown',
  components: {
    VaIconMessage,
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
          name: 'new',
          details: {
            name: 'Oleg M',
            avatar: 'https://picsum.photos/24?image=1083',
          },
          unread: true,
          id: 1,
        },
        {
          name: 'new',
          details: {
            name: 'Andrei H',
            avatar: 'https://picsum.photos/24?image=1025',
          },
          unread: true,
          id: 2,
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

.message-dropdown {
  cursor: pointer;

  .message-dropdown__icon {
    position: relative;
    display: flex;
    align-items: center;

    &--unread::before {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      top: -0.5rem;
      background-color: var(--va-danger);
      height: 0.375rem;
      width: 0.375rem;
      margin: 0 auto;
      border-radius: 0.187rem;
    }
  }

  &__item {
    cursor: pointer;
    margin-bottom: 0.75rem;
    position: relative;
    flex-wrap: nowrap;

    &--unread {
      color: var(--va-gray);

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: 0.375rem;
        width: 0.375rem;
        background-color: var(--va-danger);
        margin: auto;
        border-radius: 0.187rem;
      }
    }

    &:hover {
      color: var(--va-primary);
    }

    &__avatar {
      border-radius: 50%;
      min-width: 1.5rem;
      height: 1.5rem;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
