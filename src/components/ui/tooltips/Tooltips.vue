<template>
  <div class="tooltips">
    <va-card :title="$t('tooltips.tooltip')">
      <div class="tooltips__content">
        <div class="flex md5">
          <va-input
            v-model="tooltip1.title"
            label="Title"
          />
          <va-input
            class="pt-4"
            v-model="tooltip1.message"
            label="Message"
          />
          <vuestic-simple-select
            class="mt-4"
            style="background-color:rgb(245, 248, 249)"
            label="icon (font-awesome)"
            v-model="tooltip1.icon"
            :options="icons"
          />
          <vuestic-simple-select
            class="mt-4"
            style="background-color:rgb(245, 248, 249)"
            label="color scheme"
            v-model="tooltip1.color"
            :options="colors"
          />
          <div class="va-row pt-2" style="justify-content: center">
            <va-tooltip
              :options="options"
              :icon="tooltip1.icon"
              style="margin-top: 2rem; margin-right: 10rem"
              :color="tooltip1.color"
              iconColor="#ffc200"
              :title="tooltip1.title"
              :message="tooltip1.message"
            />
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
      options: {
        placement: 'right',
        show: true,
        autoHide: false
      },
      options1: {
        placement: 'right',
        show: true,
        autoHide: false
      },
      options2: {
        placement: 'right',
        show: true,
        autoHide: false
      },
      icons: [
        'fa fa-print', 'fa fa-star'
      ],
      colors: [
        'success', 'info', 'danger', 'warning', 'gray', 'dark'
      ],
      tooltip1: {
        title: 'Hey folks!',
        message: 'This tooltip is amazing:D',
        icon: 'fa fa-print',
        color: 'info',
      },
      tooltip2: {
        title: '',
        message: 'This tooltip is so minimal :D',
        icon: '',
        color: 'danger',
      },
      tooltip3: {
        title: '',
        message: 'This tooltip is so minimal :D',
        icon: 'fa fa-print',
        color: 'info',
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
</style>
