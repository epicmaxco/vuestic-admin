<template>
  <div class="notifications">
    <div class="row">
      <div class="flex md12">
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
              <fieldset>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="toast-text"
                      class="control-input"
                      v-model="toastText"
                      required
                    />
                    <label class="control-label" for="toast-text" :style="{color: this.$themes.primary}">
                      {{ $t('notificationsPage.toasts.textLabel') }}
                    </label>
                    <va-icon name="bar"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="toast-duration"
                      class="control-input"
                      type="number"
                      v-model="toastDuration" required
                    />
                    <label class="control-label" for="toast-duration" :style="{color: this.$themes.primary}">
                      {{ $t('notificationsPage.toasts.durationLabel') }}
                    </label>
                    <va-icon name="bar"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="toast-icon"
                      class="control-input"
                      v-model="toastIcon"
                      required
                    />
                    <label class="control-label" for="toast-icon" :style="{color: this.$themes.primary}">
                      {{ $t('notificationsPage.toasts.iconLabel') }}
                    </label>
                    <va-icon name="bar"/>
                  </div>
                </div>
                <!-- TODO Redo with global classes -->
                <div class="form-group row mb-4">
                  <toast-position-picker v-model="toastPosition"/>
                  <va-checkbox
                    :label="$t('notificationsPage.toasts.fullWidthLabel')"
                    :id="'toast-fullwidth'"
                    v-model="isToastFullWidth"
                  />
                </div>
                <va-button color="primary" slot="trigger" @click="launchToast">
                  {{ $t('notificationsPage.toasts.launchToast') }}
                </va-button>
              </fieldset>
              <br>
              <br>
              <br>
            </div>
            <div class="flex xs12 md6 flex-center">
              <div
                v-if="isToastContentPresent"
                class="toasted-container sample-toasted-container shrink"
              >
                <div class="toasted vuestic-toast none default">
                  <va-icon v-if="toastIcon" :icon="['fa', toastIcon]"/>
                  {{toastText}}
                </div>
              </div>
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

<style lang="scss">
.control-input:invalid:not(:focus) + .control-label {
  color: #b3b3b3 !important;
}
</style>
