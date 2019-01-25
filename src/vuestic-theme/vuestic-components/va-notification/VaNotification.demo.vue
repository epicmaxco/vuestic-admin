<template>
  <VbDemo>
    <VbContainer>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Va Notification</th>
        </tr>
        <tr>
          <td>Colorful Notification</td>
          <td>
            <VaContainer>
              <va-notification>
                <span class="va-badge va-badge--success"> Paid </span>
                You successfully read this important alert message.
              </va-notification>
              <va-notification color="info">
                <span class="va-badge va-badge--info"> Info </span>
                This alert needs your attention, but it's not super important.
              </va-notification>
              <va-notification color="warning">
                <span class="va-badge va-badge--warning"> On Hold </span>
                Better check yourself, you're not looking too good.
              </va-notification>
              <va-notification color="danger">
                <span class="va-badge va-badge--danger"> Danger </span>
                Change a few things up and try submitting again.
              </va-notification>
              <va-notification color="gray">
                <span class="va-badge va-badge--gray"> Processing </span>
                Better check yourself, you're not looking too good.
              </va-notification>
              <va-notification color="dark">
                <span class="va-badge va-badge--dark"> New Label </span>
                Change a few things up and try submitting again.
              </va-notification>
            </VaContainer>
          </td>
        </tr>
        <tr>
          <td>Visible Notification</td>
          <td>
            <VaContainer>
              <va-notification v-model="isVisible">
                <span class="va-badge va-badge--success"> Paid </span>
                You successfully read this important alert message.
              </va-notification>
            </VaContainer>
          </td>
        </tr>
        <tr>
          <td>Closeable Notification</td>
          <td>
            <VaContainer>
              <va-notification v-model="isVisible2" closeable>
                <span class="va-badge va-badge--success"> Paid </span>
                You successfully read this important alert message.
              </va-notification>
            </VaContainer>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>
export default {
  data () {
    return {
      isVisible: true,
      isVisible2: true
    }
  }
}
</script>
