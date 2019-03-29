<template>
  <div class="tooltips">
    <div class="va-row">
      <div class="flex md6 xs12">
        <va-card :title="$t('tooltips.tooltip')">
          <div class="va-row">
            <div class="flex md8">
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
              <div class="va-row pt-2">
                <div class="flex md5">
                  <va-button @click="options.show = !options.show">
                    Show Tooltip
                  </va-button>
                </div>
                <va-tooltip
                  :options="options"
                  :icon="tooltip1.icon"
                  style="margin-top: 2rem;"
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
      <div class="flex md6 xs12">
        <va-card :title="$t('tooltips.minimalTooltip')">
          <div class="va-row">
            <div class="flex md8">
              <va-input
                v-model="tooltip2.title"
                label="Title"
              />
              <va-input
                class="pt-4"
                v-model="tooltip2.message"
                label="Message"
              />
              <vuestic-simple-select
                class="mt-4"
                style="background-color:rgb(245, 248, 249)"
                label="icon (font-awesome)"
                v-model="tooltip2.icon"
                :options="icons"
              />
              <vuestic-simple-select
                class="mt-4"
                style="background-color:rgb(245, 248, 249)"
                label="color scheme"
                v-model="tooltip2.color"
                :options="colors"
              />
              <div class="va-row pt-2">
                <div class="flex md5">
                  <va-button @click="options1.show = !options1.show">
                    Show Tooltip
                  </va-button>
                </div>
                <va-tooltip
                  :options="options1"
                  :icon="tooltip2.icon"
                  style="margin-top: 2rem;"
                  :color="tooltip2.color"
                  iconColor="#ffc200"
                  :title="tooltip2.title"
                  :message="tooltip2.message"
                />
              </div>
            </div>
          </div>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card :title="$t('tooltips.anotherOneTooltip')">
          <div class="va-row">
            <div class="flex md8">
              <va-input
                v-model="tooltip3.title"
                label="Title"
              />
              <va-input
                class="pt-4"
                v-model="tooltip3.message"
                label="Message"
              />
              <vuestic-simple-select
                class="mt-4"
                style="background-color:rgb(245, 248, 249)"
                label="icon (font-awesome)"
                v-model="tooltip3.icon"
                :options="icons"
              />
              <vuestic-simple-select
                class="mt-4"
                style="background-color:rgb(245, 248, 249)"
                label="color scheme"
                v-model="tooltip3.color"
                :options="colors"
              />
              <div class="va-row pt-2">
                <div class="flex md5">
                  <va-button @click="options2.show = !options2.show">
                    Show Tooltip
                  </va-button>
                </div>
                <va-tooltip
                  :options="options2"
                  :icon="tooltip3.icon"
                  style="margin-top: 2rem;"
                  :color="tooltip3.color"
                  iconColor="#ffc200"
                  :title="tooltip3.title"
                  :message="tooltip3.message"
                />
              </div>
            </div>
          </div>
        </va-card>
      </div>
    </div>
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
        color: 'warning',
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
.tooltip__content {
}
</style>
