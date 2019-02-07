<template>
  <VbDemo>
    <VbContainer title="Colorful Notification">
      <va-notification>
        <span class="va-notification__badge va-notification__badge--success"> Paid </span>
        You successfully read this important alert message.
      </va-notification>
      <va-notification color="info">
        <span class="va-notification__badge va-notification__badge--info"> Info </span>
        This alert needs your attention, but it's not super important. Longer text.
      </va-notification>
      <va-notification color="warning">
        <span class="va-notification__badge va-notification__badge--warning"> On Hold </span>
        Better check yourself, you're not looking too good.
      </va-notification>
      <va-notification color="danger">
        <span class="va-notification__badge va-notification__badge--danger"> Danger </span>
        Change a few things up and try submitting again.
      </va-notification>
      <va-notification color="gray">
        <span class="va-notification__badge va-notification__badge--gray"> Processing </span>
        Better check yourself, you're not looking too good.
      </va-notification>
      <va-notification color="dark">
        <span class="va-notification__badge va-notification__badge--dark"> New Label </span>
        Change a few things up and try submitting again.
      </va-notification>
    </VbContainer>
    <VbContainer title="Closeable Notification">
      <vuestic-checkbox
        label="Toggle visibility"
        v-model="isCloseableNotificationVisible"
      />
      <va-notification v-model="isCloseableNotificationVisible" closeable>
        <span class="va-notification__badge va-notification__badge--success"> Paid </span>
        You successfully read this important alert message.
      </va-notification>
    </VbContainer>
    <VbContainer title="Long" style="width: 300px">
      <va-notification v-model="isCloseableNotificationVisible" closeable>
        <span class="va-notification__badge va-notification__badge--success"> Paid </span>
        You successfully read this important alert message. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long.
      </va-notification>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VuesticCheckbox from '../vuestic-checkbox/VuesticCheckbox'
import VaNotification from './VaNotification'

export default {
  components: { VuesticCheckbox, VaNotification },
  data () {
    return {
      isCloseableNotificationVisible: true,
    }
  },
}
</script>
