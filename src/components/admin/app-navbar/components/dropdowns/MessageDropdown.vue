<templates>
  <div class="grow message-dropdown flex-center">
    <va-icon icon="i-nav-messages"/>
    <va-dropdown-old v-model="isOpen" position="bottom">
      <a v-for="(option, id) in options"
         :key="id"
         class="dropdown-item"
         href="#"
      >
        <span class="ellipsis">{{ $t(`messages.${option.name}`, { name: option.details.name})}}</span>
      </a>
      <div class="dropdown-item plain-link-item">
        <a class="plain-link" href="#">{{ $t('messages.all') }}</a>
      </div>
    </va-dropdown-old>
  </div>
</templates>

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
