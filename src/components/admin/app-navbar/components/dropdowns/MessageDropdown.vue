<template>
  <div class="message-dropdown flex-center">
    <va-icon
      icon="i-nav-messages"
      :class="{'unread': !allRead}"
    />
    <va-dropdown v-model="isOpen" position="bottom" class="message-dropdown__container py-3 px-2">
      <div
        v-for="option in computedOptions"
        :key="option.id"
        class="message-dropdown__item position-relative pr-3 flex-nowrap va-row"
        :class="{'unread': option.unread}"
        @click="markAsRead(option.id)"
      >
        <img :src="option.details.avatar" class="message-dropdown__item__avatar mr-1"/>
        <span class="ellipsis">{{ $t(`messages.${option.name}`, { name: option.details.name})}}</span>
      </div>
      <div class="va-row justify--space-between">
        <va-button>{{ $t('messages.all') }}</va-button>
        <va-button outline @click="markAllAsRead" :disabled="allRead">{{ $t('messages.mark_as_read') }}</va-button>
      </div>
    </va-dropdown>
  </div>
</template>

<script>
export default {
  name: 'message-dropdown',
  data () {
    return {
      isOpen: false,
      computedOptions: this.options.map(item => ({ ...item, unread: true })),
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'new',
          details: { name: 'Oleg M', avatar: 'https://picsum.photos/24?image=1083' },
          id: 1,
        },
        {
          name: 'new',
          details: { name: 'Andrei H', avatar: 'https://picsum.photos/24?image=1025' },
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
    markAsRead (id) {
      this.computedOptions = this.computedOptions.map(item => item.id === id
        ? { ...item, unread: false }
        : { ...item })
    },
    markAllAsRead () {
      this.computedOptions = this.computedOptions.map(item => ({ ...item, unread: false }))
    },
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.message-dropdown {
  cursor: pointer;

  .i-nav-messages {
    position: relative;

    &.unread::before {
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
  &__container {
    max-width: 25rem;
    margin-left: -2rem;
  }
  &__item {
    cursor: pointer;
    margin-bottom: .75rem;
    color: $brand-secondary;
    &.unread {
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
