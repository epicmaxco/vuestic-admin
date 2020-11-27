// TODO: fix badges
<template>
  <div class="notifications">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('notificationsPage.notifications.title') }}</va-card-title>
          <va-card-content>
            <div class="mb-3">
              <va-alert closeable>
                <va-badge slot="icon" :text="$t('notificationsPage.notifications.success')" />
                {{ $t('notificationsPage.notifications.successMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="info" closeable>
                <va-badge color="info" slot="icon" :text="$t('notificationsPage.notifications.info')" />
                {{ $t('notificationsPage.notifications.infoMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="warning" closeable>
                <va-badge color="warning" slot="icon" :text="$t('notificationsPage.notifications.warning')" />
                {{ $t('notificationsPage.notifications.warningMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="danger" closeable>
                <va-badge color="danger" slot="icon" :text="$t('notificationsPage.notifications.danger')" />
                {{ $t('notificationsPage.notifications.dangerMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="gray" closeable>
                <va-badge color="gray" slot="icon" :text="$t('notificationsPage.notifications.gray')" />
                {{ $t('notificationsPage.notifications.warningMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="dark" closeable>
                <va-badge color="dark" slot="icon" :text="$t('notificationsPage.notifications.dark')" />
                {{ $t('notificationsPage.notifications.dangerMessage') }}
              </va-alert>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('notificationsPage.toasts.title') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 md6">
              <va-input
                v-model="toastText"
                :label="$t('notificationsPage.toasts.textLabel')"
                class="control-input mb-3"
                required
              />
              <va-input
                v-model="toastDuration"
                type="number"
                :label="$t('notificationsPage.toasts.durationLabel')"
                class="control-input mb-3"
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
          </va-card-content>
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
