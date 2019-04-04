<template>
  <VbDemo>
    <VbContainer style="width: 100%">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>VaPopover</th>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaPopover from './VaPopover'

export default {
  components: {
    VaPopover
  },
  data () {
    return {
      placementRight: 'right',
      placementLeft: 'left',
      placementBottom: 'bottom',
      placementTop: 'top',
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
