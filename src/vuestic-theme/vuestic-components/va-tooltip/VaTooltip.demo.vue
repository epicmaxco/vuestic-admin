<template>
  <VbDemo>
    <VbContainer style="width: 100%" title="Tooltip with title and icon">
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
        <div class="flex">
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
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaTooltip from './VaTooltip'

export default {
  components: {
    VaTooltip
  },
  data () {
    return {
      options: {
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
      }
    }
  }
}
</script>
