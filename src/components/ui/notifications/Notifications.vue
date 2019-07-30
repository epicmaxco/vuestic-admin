<template>
  <div class="notifications">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('notificationsPage.notifications.title')">
          <div class="mb-3">
            <va-notification closeable>
              <va-badge>
                {{ $t('notificationsPage.notifications.success') }}
              </va-badge>
              {{ $t('notificationsPage.notifications.successMessage') }}
            </va-notification>
          </div>
          <div class="mb-3">
            <va-notification color="info" closeable>
              <va-badge color="info">
                {{ $t('notificationsPage.notifications.info') }}
              </va-badge>
              {{ $t('notificationsPage.notifications.infoMessage') }}
            </va-notification>
          </div>
          <div class="mb-3">
            <va-notification color="warning" closeable>
              <va-badge color="warning">
                {{ $t('notificationsPage.notifications.warning') }}
              </va-badge>
              {{ $t('notificationsPage.notifications.warningMessage') }}
            </va-notification>
          </div>
          <div class="mb-3">
            <va-notification color="danger" closeable>
              <va-badge color="danger">
                {{ $t('notificationsPage.notifications.danger') }}
              </va-badge>
              {{ $t('notificationsPage.notifications.dangerMessage') }}
            </va-notification>
          </div>
          <div class="mb-3">
            <va-notification color="gray" closeable>
              <va-badge color="gray">
                {{ $t('notificationsPage.notifications.gray') }}
              </va-badge>
              {{ $t('notificationsPage.notifications.warningMessage') }}
            </va-notification>
          </div>
          <div class="mb-3">
            <va-notification color="dark" closeable>
              <va-badge color="dark">
                {{ $t('notificationsPage.notifications.dark') }}
              </va-badge>
              {{ $t('notificationsPage.notifications.dangerMessage') }}
            </va-notification>
          </div>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('notificationsPage.toasts.title')">
          <div class="row">
            <div class="flex xs12 md6">
              <va-input
                v-model="toastText"
                :label="$t('notificationsPage.toasts.textLabel')"
                class="control-input"
                required
              />
              <va-input
                v-model="toastDuration"
                type="number"
                :label="$t('notificationsPage.toasts.durationLabel')"
                class="control-input"
                required
              />
              <va-input
                v-model="toastIcon"
                :label="$t('notificationsPage.toasts.iconLabel')"
                class="control-input mb-0"
                required
              />
            </div>
            <div class="flex xs12 md6">
              <div class="row">
                <div class="flex xs12">
                  <toast-position-picker v-model="toastPosition"/>
                </div>
                <div class="flex xs12">
                  <va-checkbox
                    :label="$t('notificationsPage.toasts.fullWidthLabel')"
                    :id="'toast-fullwidth'"
                    v-model="isToastFullWidth"
                  />
                </div>
              </div>
            </div>
            <div class="flex xs12">
              <va-button class="ma-0" color="primary" slot="trigger" @click="launchToast">
                {{ $t('notificationsPage.toasts.launchToast') }}
              </va-button>
            </div>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import ToastPositionPicker from './ToastPositionPicker.vue'

export default {
  name: 'notifications',
  components: { ToastPositionPicker },
  data () {
    return {
      toastText: 'This toast is awesome!',
      toastDuration: 2500,
      toastIcon: 'fa-star-o',
      toastPosition: 'bottom-right',
      isToastFullWidth: false,
    }
  },
  computed: {
    isToastContentPresent () {
      return !!(this.toastText || this.toastIcon)
    },
  },
  methods: {
    launchToast () {
      this.showToast(
        this.toastText,
        {
          icon: this.toastIcon,
          position: this.toastPosition,
          duration: this.toastDuration,
          fullWidth: this.isToastFullWidth,
        },
      )
    },
  },
}
</script>
