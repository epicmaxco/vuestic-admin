<template>
  <div class="notifications-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'notificationsPage.popovers.title' | translate">
          <div class="row">
            <div class="col-md-6">
              <fieldset>
                <div class="form-group">
                  <div class="input-group">
                    <input id="popover-title" v-model="popoverTitle" @input="checkPopoverContents" required/>
                    <label class="control-label" for="popover-title">{{'notificationsPage.popovers.popoverTitleLabel' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="popover-text" v-model="popoverText" @input="checkPopoverContents" required/>
                    <label class="control-label" for="popover-text">{{'notificationsPage.popovers.popoverTextLabel' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="popover-icon" v-model="popoverIcon" @input="checkPopoverContents" required/>
                    <label class="control-label" for="popover-icon">{{'notificationsPage.popovers.popoverIconLabel' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
                <vuestic-popover popover-class="vuestic-tooltip" placement="right" :disabled="isPopoverDisabled">
                  <button slot="trigger" class="btn btn-sm btn-primary">
                    {{'notificationsPage.popovers.showPopover' | translate}}
                  </button>
                  <i
                    slot="icon"
                    class="fa"
                    :class="popoverIcon">
                  </i>
                  <span slot="header">{{popoverTitle}}</span>
                  <span slot="body">{{popoverText}}</span>
                </vuestic-popover>
              </fieldset>
            </div>
            <div class="col-md-6">
              <p>
                Any text can be used for
                <vuestic-tooltip :options="topTooltipOptions"><a href="#">{{'notificationsPage.popovers.topTooltip' | translate}}</a></vuestic-tooltip>
                showcase. Just anything you can possibly imagine to test
                <vuestic-tooltip :options="rightTooltipOptions"><a href="#">{{'notificationsPage.popovers.rightTooltip' | translate}}</a></vuestic-tooltip>.
                But it can appear on the
                <vuestic-tooltip :options="leftTooltipOptions"><a href="#">{{'notificationsPage.popovers.leftTooltip' | translate}}</a></vuestic-tooltip>.
                Or just
                <vuestic-tooltip :options="bottomTooltipOptions"><a href="#">{{'notificationsPage.popovers.bottomTooltip' | translate}}</a></vuestic-tooltip>
                the item.
              </p>
            </div>
         </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'notificationsPage.alerts.title' | translate">
          <vuestic-alert type="success" :withCloseBtn="true">
            <span class="badge badge-pill badge-success">{{'notificationsPage.alerts.success' | translate}}</span>
            {{'notificationsPage.alerts.successMessage' | translate}}
            <i class="fa fa-close alert-close"></i>
          </vuestic-alert>
          <vuestic-alert type="info" :withCloseBtn="true">
            <span class="badge badge-pill badge-info">{{'notificationsPage.alerts.info' | translate}}</span>
            {{'notificationsPage.alerts.infoMessage' | translate}}
          </vuestic-alert>
          <vuestic-alert type="warning" :withCloseBtn="true">
            <span class="badge badge-pill badge-warning">{{'notificationsPage.alerts.warning' | translate}}</span>
            {{'notificationsPage.alerts.warningMessage' | translate}}
          </vuestic-alert>
          <vuestic-alert type="danger" :withCloseBtn="true">
            <span class="badge badge-pill badge-danger">{{'notificationsPage.alerts.danger' | translate}}</span>
            {{'notificationsPage.alerts.dangerMessage' | translate}}
          </vuestic-alert>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Toasts'">
          <div class="row">
            <div class="col-md-6">
              <fieldset>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-text" v-model="toastText" required/>
                    <label class="control-label" for="toast-text">Text</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-duration" type="number" v-model="toastDuration" required/>
                    <label class="control-label" for="toast-duration">Duration (seconds)</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-icon" v-model="toastIcon" required/>
                    <label class="control-label" for="toast-icon">Icon (fontawesome)</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group toasts-position-group">
                  <toast-position-picker></toast-position-picker>
                  <div class="form-check abc-checkbox abc-checkbox-primary">
                    <input class="form-check-input" id="toast-fullwidth" v-model="isToastFullWidth" type="checkbox">
                    <label class="form-check-label" for="toast-fullwidth">
                      <span class="abc-label-text">Fullwidth</span>
                    </label>
                  </div>
                </div>
                <button slot="trigger" class="btn btn-sm btn-primary" @click="launchToast">
                  Launch toast
                </button>
              </fieldset>
            </div>
            <div class="col-md-6">

            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import ToastPositionPicker from './ToastPositionPicker.vue'

  export default {
    name: 'notifications',

    components: {ToastPositionPicker},

    data () {
      return {
        popoverTitle: 'Hey!',
        popoverText: 'This popover is amazing',
        popoverIcon: 'fa-image',
        isPopoverDisabled: false,
        topTooltipOptions: {
          content: 'Top tooltip text',
          placement: 'top'
        },
        leftTooltipOptions: {
          content: 'Left tooltip text',
          placement: 'left'
        },
        rightTooltipOptions: {
          content: 'Right tooltip text',
          placement: 'right'
        },
        bottomTooltipOptions: {
          content: 'Bottom tooltip text',
          placement: 'bottom'
        },
        toastText: 'This toast is awesome!',
        toastDuration: 2,
        toastIcon: 'fa-image',
        isToastFullWidth: false
      }
    },

    methods: {
      checkPopoverContents () {
        if (!(this.popoverTitle || this.popoverText || this.popoverIcon)) {
          this.isPopoverDisabled = true
        } else {
          this.isPopoverDisabled = false
        }
      },

      launchToast () {
        this.showToast('This toast is amazing!', {icon: 'fa-image'})
      }
    }
  }
</script>

<style lang="scss" scoped>

  .toasts-position-group {
    display: flex;
    flex-direction: row;
  }

  .toast-position-picker {
    margin-right: 2rem;
  }

</style>
