<template>
  <va-dropdown
    class="message-dropdown"
    offset="0, 16px"
  >
    <va-icon
      name="i-nav-messages"
      slot="anchor"
      class="message-dropdown__icon"
      :class="{'message-dropdown__icon--unread': !allRead}"
    />
    <div class="message-dropdown__content pl-4 pr-4 pt-2 pb-2">
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
      <div class="row justify--space-between">
        <va-button class="ma-0 mb-2 mt-1 mr-2" small>{{ $t('messages.all') }}</va-button>
        <va-button class="ma-0 mb-2 mt-1" small outline @click="markAllAsRead" :disabled="allRead">{{ $t('messages.mark_as_read') }}</va-button>
      </div>
    </div>
  </va-dropdown>
</template>

<script>
export default {
  name: 'message-dropdown',
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
          details: { name: 'Oleg M', avatar: 'https://picsum.photos/24?image=1083' },
          unread: true,
          id: 1,
        },
        {
          name: 'new',
          details: { name: 'Andrei H', avatar: 'https://picsum.photos/24?image=1025' },
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
      this.computedOptions = this.computedOptions.map(item => ({ ...item, unread: false }))
    },
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.message-dropdown {
  cursor: pointer;
  margin-top: 0.3rem;

  .message-dropdown__icon {
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
  }
  &__item {
    cursor: pointer;
    margin-bottom: .75rem;
    color: $brand-secondary;
    position: relative;
    flex-wrap: nowrap;
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
      min-width: 1.5rem;
      height: 1.5rem;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
