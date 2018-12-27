<template>
  <div class="message-dropdown flex-center">
    <span class="i-nav-messages"/>
    <vuestic-dropdown v-model="isOpen" position="bottom">
      <a v-for="(option, id) in options"
         :key="id"
         class="dropdown-item"
         href="#"
      >
        <span class="ellipsis">{{ $t(`messages.${option.name}`, { name: option.details.name})}}</span>
      </a>
      <div class="dropdown-item plain-link-item">
        <a class="plain-link" href="#">{{'messages.all' | translate}}</a>
      </div>
    </vuestic-dropdown>
  </div>
</template>

<script>
export default {
  name: 'message-dropdown',
  data () {
    return {
      isOpen: false,
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'new',
          details: { name: 'Oleg M' },
        },
        {
          name: 'new',
          details: { name: 'Andrei H' },
        },
      ],
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
}
</style>
