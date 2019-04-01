<template>
  <div class="tooltips">
    <va-card :title="$t('tooltips.tooltipStyle')">
      <div class="tooltips__content">
        <div class="flex md5">
          <vuestic-simple-select
            class="mt-4"
            style="background-color:rgb(245, 248, 249)"
            label="color scheme"
            v-model="tooltip.color"
            :options="colors"
          />
          <vuestic-simple-select
            class="mt-4"
            style="background-color:rgb(245, 248, 249)"
            label="icon (font-awesome)"
            v-model="tooltip.icon"
            :options="icons"
          />
          <va-input
            v-model="tooltip.title"
            label="Title"
          />
          <va-input
            class="pt-4"
            v-model="tooltip.message"
            label="Message"
          />
          <div class="va-row popover-example mt-5" style="justify-content: center">
            <va-tooltip
              :icon="tooltip.icon"
              :color="tooltip.color"
              :title="tooltip.title"
              :message="tooltip.message"
              placement="bottom"
              open
              :autoHide="false"
            >
              <span></span>
            </va-tooltip>
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
        'fa fa-print', 'fa fa-star'
      ],
      colors: [
        'success', 'info', 'danger', 'warning', 'gray', 'dark'
      ],
      tooltip: {
        title: 'Hey folks!',
        message: 'This tooltip is amazing:D',
        icon: 'fa fa-print',
        color: 'warning'
      }
    }
  }
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
