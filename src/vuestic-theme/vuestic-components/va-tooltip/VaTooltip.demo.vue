<template>
  <VbDemo>
    <VbContainer style="width: 100%" title="Tooltip with title and icon">
      <va-tooltip
        :options="topTooltipOptions"
        icon="glyphicon glyphicon-print"
        color="#fff3d1"
        iconColor="#ffc200"
        title="Hey folks!"
      >
        <va-button>
          Show Tooltip
        </va-button>
      </va-tooltip>
    </VbContainer>
    <VbContainer style="width: 100%" title="Default tooltip">
      <va-tooltip
        :options="topTooltipOptions1"
        color="#ffebeb"
      >
        <va-button>
          Show Tooltip
        </va-button>
      </va-tooltip>
    </VbContainer>
    <VbContainer style="width: 100%" title="Tooltip with icon">
      <va-tooltip
        icon="glyphicon glyphicon-print"
        color="#caeeff"
        iconColor="#2c82e0"
        :options="topTooltipOptions2"
      >
        <va-button>
          Show Tooltip
        </va-button>
      </va-tooltip>
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
      topTooltipOptions: {
        content: 'This tooltip is amazing :D',
        placement: 'right',
        show: true,
        autoHide: false
      },
      topTooltipOptions1: {
        content: 'This tooltip is so minimal :D',
        placement: 'right',
        show: true,
        autoHide: false
      },
      topTooltipOptions2: {
        content: 'This tooltip is so informative!',
        placement: 'right',
        show: true,
        autoHide: false
      },
    }
  }
}
</script>

<style scoped>

</style>
