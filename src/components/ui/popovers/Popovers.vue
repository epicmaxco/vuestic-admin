<template>
  <div class="tooltips">
    <va-card :title="$t('popovers.popoverStyle')">
      <div class="tooltips__content">
        <div class="flex md5">
          <va-simple-select
            class="mt-4"
            label="color scheme"
            v-model="popover.color"
            :options="colors"
          />
          <va-simple-select
            class="mt-4"
            label="icon (font-awesome)"
            v-model="popover.icon"
            :options="icons"
          />
          <va-input
            v-model="popover.title"
            label="Title"
          />
          <va-input
            class="pt-4"
            v-model="popover.message"
            label="Message"
          />
          <div class="va-row popover-example mt-5" style="justify-content: center">
            <va-popover
              :icon="popover.icon"
              :color="popover.color"
              :title="popover.title"
              :message="popover.message"
              placement="bottom"
              open
              :autoHide="false"
            >
              <span></span>
            </va-popover>
          </div>
        </div>
      </div>
    </va-card>
  </div>
</template>

<script>
import VaInput from '../../../vuestic-theme/vuestic-components/va-input/VaInput'

export default {
  components: { VaInput },
  data () {
    return {
      icons: [
        'fa fa-print', 'fa fa-star',
      ],
      colors: [
        'success', 'info', 'danger', 'warning', 'gray', 'dark',
      ],
      popover: {
        title: 'Hey folks!',
        message: 'This tooltip is amazing:D',
        icon: 'fa fa-print',
        color: 'warning',
      },
    }
  },
}
</script>

<style lang="scss">
.tooltips {
  &__content {
    @include va-flex-center();
  }
}
.popover-example {
  min-height: 100px;
}
</style>
