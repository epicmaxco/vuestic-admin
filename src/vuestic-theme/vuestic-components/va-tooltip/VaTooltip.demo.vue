<template>
  <VbDemo>
    <VbContainer style="width: 100%" title="Tooltip with title and icon">
      <va-tooltip
        :options="topTooltipOptions"
        icon="glyphicon glyphicon-print"
        color="warning"
        title="Hey folks!"
        message="This tooltip is amazing :D"
      >
        <va-button>
          Show Tooltip
        </va-button>
      </va-tooltip>
    </VbContainer>
    <VbContainer style="width: 100%" title="Default tooltip">
      <va-tooltip
        :options="topTooltipOptions1"
        color="danger"
        message="This tooltip is so minimal :D"
      >
        <va-button>
          Show Tooltip
        </va-button>
      </va-tooltip>
    </VbContainer>
    <VbContainer style="width: 100%" title="Tooltip with icon">
      <va-tooltip
        icon="glyphicon glyphicon-print"
        color="info"
        :options="topTooltipOptions2"
        message="This tooltip is so informative!"
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
        placement: 'right',
        show: true,
        autoHide: false
      },
      topTooltipOptions1: {
        placement: 'right',
        show: true,
        autoHide: false
      },
      topTooltipOptions2: {
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
