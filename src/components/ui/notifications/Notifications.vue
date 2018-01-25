<template>
  <div class="notifications-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Tooltips'">
         <div class="row">
           <div class="col-md-6">
             <fieldset>
               <div class="form-group">
                 <div class="input-group">
                   <input id="tooltip-title" v-model="tooltipTitle" required/>
                   <label class="control-label" for="tooltip-title">Tooltip Title</label><i class="bar"></i>
                 </div>
               </div>
               <div class="form-group">
                 <div class="input-group">
                   <input id="tooltip-text" v-model="tooltipText" required/>
                   <label class="control-label" for="tooltip-text">Tooltip Text</label><i class="bar"></i>
                 </div>
               </div>
               <div class="form-group">
                 <div class="input-group">
                   <input id="tooltip-icon" v-model="tooltipIcon" required/>
                   <label class="control-label" for="tooltip-icon">Tooltip Icon</label><i class="bar"></i>
                 </div>
               </div>
               <v-popover popover-class="vuestic-tooltip" placement="right">
                 <button class="btn btn-sm btn-primary">
                   Show tooltip
                 </button>
                 <template slot="popover">
                   <div class="popover-icon">
                     <i class="fa fa-image"></i>
                   </div>
                   <div class="popover-content">
                     <div class="popover-header">Hey!</div>
                     <div class="popover-body">This popover is amazing</div>
                   </div>
                 </template>
               </v-popover>
             </fieldset>
           </div>
           <div class="col-md-6">
              <p>
                Any text can be used for
                <a href="#"  v-tooltip="{
                   content: 'You have 2 new messages',
                   classes: 'vuestic-tooltip',
                   placement: 'top'
                }">
                  top tooltip
                </a>
                showcase. Just anything you can possibly imagine to test
                <a href="#"  v-tooltip="{
                   content: 'You have 2 new messages',
                   classes: 'vuestic-tooltip',
                   placement: 'right'
                }">
                  rightside tooltip
                </a>. But it can appear on the
                <a href="#"  v-tooltip="{
                   content: 'You have 2 new messages',
                   classes: 'vuestic-tooltip',
                   placement: 'left'
                }">
                  left
                </a>. Or just
                <a href="#"  v-tooltip="{
                   content: 'You have 2 new messages',
                   classes: 'vuestic-tooltip',
                   placement: 'bottom'
                }">
                  below
                </a>
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
  </div>
</template>

<script>
  export default {
    name: 'notifications',

    data () {
      return {
        tooltipTitle: 'Title',
        tooltipText: 'Text',
        tooltipIcon: 'Icon'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
