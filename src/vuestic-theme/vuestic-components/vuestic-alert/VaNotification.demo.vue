<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <va-notification color="success" :closeable="true" v-model="value">
        <span slot="icon" class="va-notification__badge va-notification__badge--success">
          Paid
        </span>
        You successfully read this important alert message.
      </va-notification>
      <va-notification color="info" :closeable="true">
        <span slot="icon" class="va-notification__badge va-notification__badge--info">
          Info
        </span>
        This alert needs your attention, but it's not super important.
      </va-notification>
      <va-notification color="warning" :closeable="true">
        <span slot="icon" class="va-notification__badge va-notification__badge--warning">
          On Hold
        </span>
        Better check yourself, you're not looking too good.
      </va-notification>
      <va-notification color="danger" :closeable="true">
        <span slot="icon" class="va-notification__badge va-notification__badge--danger">
          Danger
        </span>
        Change a few things up and try submitting again.
      </va-notification>
      <va-notification color="gray" :closeable="true">
        <span slot="icon" class="va-notification__badge va-notification__badge--gray">
          Processing
        </span>
        Better check yourself, you're not looking too good.
      </va-notification>
      <va-notification color="dark" :closeable="true">
        <span slot="icon" class="va-notification__badge va-notification__badge--dark">
          New Label
        </span>
        Change a few things up and try submitting again.
      </va-notification>
    </div>
  </div>
</template>

<script>
import VaNotification from './VaNotification'

export default {
  components: {
    VaNotification
  }
}
</script>
