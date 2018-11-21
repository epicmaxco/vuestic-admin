<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <va-notification :color="'success'" :closeable="true" v-model="value">
        <span slot="icon" class="badge badge-pill badge-success">
          {{'notificationsPage.alerts.success' | translate}}
        </span>
        {{'notificationsPage.alerts.successMessage' | translate}}
      </va-notification>
      <va-notification :color="'info'" :closeable="true">
        <span slot="icon" class="badge badge-pill badge-info">
          {{'notificationsPage.alerts.info' | translate}}
        </span>
        {{'notificationsPage.alerts.infoMessage' | translate}}
      </va-notification>
      <va-notification :color="'warning'" :closeable="true">
        <span slot="icon" class="badge badge-pill badge-warning">
          {{'notificationsPage.alerts.warning' | translate}}
        </span>
        {{'notificationsPage.alerts.warningMessage' | translate}}
      </va-notification>
      <va-notification :color="'danger'" :closeable="true">
        <span slot="icon" class="badge badge-pill badge-danger">
          {{'notificationsPage.alerts.danger' | translate}}
        </span>
        {{'notificationsPage.alerts.dangerMessage' | translate}}
      </va-notification>
      <va-notification :color="'gray'" :closeable="true">
        <span slot="icon" class="badge badge-pill badge-gray">
          {{'notificationsPage.alerts.gray' | translate}}
        </span>
        {{'notificationsPage.alerts.warningMessage' | translate}}
      </va-notification>
      <va-notification :color="'dark'" :closeable="true">
        <span slot="icon" class="badge badge-pill badge-dark">
          {{'notificationsPage.alerts.danger' | translate}}
        </span>
        {{'notificationsPage.alerts.dangerMessage' | translate}}
      </va-notification>
    </div>
  </div>
</template>

<script>
import VaNotification from './VaNotification'

export default {
  components: {
    VaNotification
  },
  data () {
    return {
      value: true,
      errorMessages: ['error message 1', 'error message 2']
    }
  }
}
</script>
