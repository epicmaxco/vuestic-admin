<template>
  <div class="tooltips">
    <va-card>
      <div class="va-row">
        <div class="flex md4">
          <va-input
            v-model="title"
            label="Title"
          />
          <va-input
            class="pt-4"
            v-model="message"
            label="Message"
          />
          <div class="va-row pt-2">
            <div class="flex md5">
              <va-button @click="options.show = !options.show">
                Show Tooltip
              </va-button>
            </div>
            <div class="flex md2">
              <va-tooltip
                :options="options"
                :icon="icon"
                style="margin-top: 2rem;"
                :color="color"
                iconColor="#ffc200"
                :title="title"
                :message="message"
              />
            </div>
          </div>
        </div>
        <div class="flex md4">
          <vuestic-simple-select
            label="icon (font-awesome)"
            v-model="icon"
            :options="icons"
          />
        </div>
        <div class="flex md4">
          <vuestic-simple-select
            label="color scheme"
            v-model="color"
            :options="colors"
          />
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
      title: 'Hey folks!',
      message: 'This tooltip is amazing:D',
      icon: 'fa fa-print',
      icons: [
        'fa fa-print', 'fa fa-star'
      ],
      color: 'warning',
      colors: [
        'primary', 'success', 'info', 'danger', 'warning', 'gray', 'dark'
      ],
    }
  }
}
</script>
