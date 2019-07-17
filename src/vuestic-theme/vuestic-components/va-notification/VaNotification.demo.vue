<template>
  <VbDemo>
    <VbCard title="Colorful Notification">
      <va-notification>
        <va-badge> Paid</va-badge>
        You successfully read this important alert message.
      </va-notification>
      <va-notification color="info">
        <va-badge color="info"> Info</va-badge>
        This alert needs your attention, but it's not super important. Longer text.
      </va-notification>
      <va-notification color="warning">
        <va-badge color="warning"> On Hold</va-badge>
        Better check yourself, you're not looking too good.
      </va-notification>
      <va-notification color="danger">
        <va-badge color="danger"> Danger</va-badge>
        Change a few things up and try submitting again.
      </va-notification>
      <va-notification color="gray">
        <va-badge color="gray"> Processing</va-badge>
        Better check yourself, you're not looking too good.
      </va-notification>
      <va-notification color="dark">
        <va-badge color="dark"> New Label</va-badge>
        Change a few things up and try submitting again.
      </va-notification>
    </VbCard>
    <VbCard title="Closeable Notification">
      <va-checkbox
        label="Toggle visibility"
        v-model="isCloseableNotificationVisible"
      />
      <va-notification v-model="isCloseableNotificationVisible" closeable>
        <va-badge> Paid</va-badge>
        You successfully read this important alert message.
      </va-notification>
    </VbCard>
    <VbCard title="Long" style="width: 300px">
      <va-notification v-model="isCloseableNotificationVisible" closeable>
        <va-badge> Paid</va-badge>
        You successfully read this important alert message. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long.
      </va-notification>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaCheckbox from '../va-checkbox/VaCheckbox'
import VaNotification from './VaNotification'

export default {
  components: { VaCheckbox, VaNotification },
  data () {
    return {
      isCloseableNotificationVisible: true,
    }
  },
}
</script>

<style lang="scss">
.toasted-container {
  &.full-width {
    @include media-breakpoint-down(md) {
      width: calc(100% - #{$content-mobile-wrap-px} - #{$content-mobile-wrap-px});
      left: 0;

      .toasted.vuestic-toast {
        left: $content-mobile-wrap-px;
      }
    }
  }
}

.toasted.vuestic-toast {
  min-height: $toast-min-height;
  padding: $toast-padding-y $toast-padding-x;
  font-size: $toast-font-size;
  font-weight: $toast-font-weight;
  line-height: $toast-line-height;
  background: rgba($toast-bg, 0.9);
  box-shadow: $toast-box-shadow;
  color: $toast-color;
  border-radius: $toast-border-radius;

  i, i.fa {
    font-size: $toast-icon-size;
    color: $toast-icon-color;
    margin-left: $toast-icon-ml;
    margin-right: $toast-icon-mr;
  }

  a.action:hover {
    text-decoration: none;
  }
}
</style>
