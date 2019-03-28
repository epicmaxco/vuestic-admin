<template>
  <div class="tooltips">
    <va-card>
      <div class="flex md6">
        <fieldset>
      <div class="form-group">
        <div class="input-group">
          <input id="popover-title" v-model="popoverTitle"
                 @input="checkPopoverContents" required/>
          <label class="control-label" for="popover-title">{{'notificationsPage.popovers.popoverTitleLabel'
            | translate}}</label><va-icon icon="bar"/>
        </div>
      </div>
          <div class="form-group">
            <div class="input-group">
              <input id="popover-title" v-model="popoverTitle"
                     @input="checkPopoverContents" required/>
              <label class="control-label" for="popover-title">{{'notificationsPage.popovers.popoverTitleLabel'
                | translate}}</label><va-icon icon="bar"/>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <input id="popover-title" v-model="popoverTitle"
                     @input="checkPopoverContents" required/>
              <label class="control-label" for="popover-title">{{'notificationsPage.popovers.popoverTitleLabel'
                | translate}}</label><va-icon icon="bar"/>
            </div>
          </div>
        </fieldset>
      </div>
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
    </va-card>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      topTooltipOptions: {
        content: 'This tooltip is amazing :D',
        placement: 'right',
        show: true,
        autoHide: false
      }
    }
  }
}
</script>
