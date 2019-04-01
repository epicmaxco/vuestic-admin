<template>
  <div class="notifications">
    <div class="va-row">
      <div class="flex md12">
        <va-card
          :title=" $t('notificationsPage.popovers.title') ">
          <div class="va-row">
            <div class="flex md6">
              <fieldset>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="popover-title"
                      v-model="popoverTitle"
                      @input="checkPopoverContents"
                      required
                    />
                    <label class="control-label" for="popover-title">
                      {{ $t('notificationsPage.popovers.popoverTitleLabel')
                      }}</label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="popover-text" v-model="popoverText"
                           @input="checkPopoverContents" required/>
                    <label class="control-label" for="popover-text">
                      {{ $t('notificationsPage.popovers.popoverTextLabel')
                      }}</label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="popover-icon"
                      v-model="popoverIcon"
                      @input="checkPopoverContents"
                      required
                    />
                    <label class="control-label" for="popover-icon">
                      {{ $t('notificationsPage.popovers.popoverIconLabel')
                      }}</label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
                <va-popover
                  popover-class="va-tooltip"
                  placement="right"
                  :disabled="isPopoverDisabled"
                >
                  <va-button slot="trigger">
                    {{ $t('notificationsPage.popovers.showPopover') }}
                  </va-button>
                  <va-icon slot="icon" :icon="[ 'fa', popoverIcon ]"/>
                  <span slot="header">{{popoverTitle}}</span>
                  <span slot="body">{{popoverText}}</span>
                </va-popover>
              </fieldset>
            </div>
            <div class="flex md6">
              <p>
                Any text can be used for
                <va-tooltip :options="topTooltipOptions">
                  <a href="#">
                    {{'notificationsPage.popovers.topTooltip'}}
                  </a>
                </va-tooltip>
                showcase. Just anything you can possibly imagine to test
                <va-tooltip :options="rightTooltipOptions"><a href="#">
                  {{ $t('notificationsPage.popovers.rightTooltip') }}
                </a></va-tooltip>
                .
                But it can appear on the
                <va-tooltip :options="leftTooltipOptions"><a href="#">
                  {{$t('notificationsPage.popovers.leftTooltip')}}</a></va-tooltip>
                .
                Or just
                <va-tooltip :options="bottomTooltipOptions"><a href="#">
                  {{ $t('notificationsPage.popovers.bottomTooltip') }}
                </a></va-tooltip>
                the item.
              </p>
            </div>
          </div>
        </va-card>
      </div>
    </div>

    <div class="va-row">
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

    <div class="va-row">
      <div class="flex xs12">
        <va-card :title="$t('notificationsPage.toasts.title')">
          <div class="va-row">
            <div class="flex xs12 md6">
              <fieldset>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-text" v-model="toastText" required/>
                    <label class="control-label" for="toast-text">
                      {{ $t('notificationsPage.toasts.textLabel') }}
                    </label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="toast-duration"
                      type="number"
                      v-model="toastDuration" required
                    />
                    <label class="control-label" for="toast-duration">
                      {{ $t('notificationsPage.toasts.durationLabel') }}
                    </label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-icon" v-model="toastIcon" required/>
                    <label class="control-label" for="toast-icon">
                      {{ $t('notificationsPage.toasts.iconLabel') }}
                    </label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
                <!-- TODO Redo with global classes -->
                <div class="form-group va-row mb-4">
                  <toast-position-picker v-model="toastPosition"/>
                  <va-checkbox
                    :label="$t('notificationsPage.toasts.fullWidthLabel')"
                    :id="'toast-fullwidth'"
                    v-model="isToastFullWidth"
                  />
                </div>
                <va-button slot="trigger" @click="launchToast">
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
      popoverTitle: 'Hey!',
      popoverText: 'This popover is amazing',
      popoverIcon: 'fa-image',
      isPopoverDisabled: false,
      topTooltipOptions: {
        content: 'Top tooltip text',
        placement: 'top',
      },
      leftTooltipOptions: {
        content: 'Left tooltip text',
        placement: 'left',
      },
      rightTooltipOptions: {
        content: 'Right tooltip text',
        placement: 'right',
      },
      bottomTooltipOptions: {
        content: 'Bottom tooltip text',
        placement: 'bottom',
      },
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
    checkPopoverContents () {
      this.isPopoverDisabled = !(this.popoverTitle || this.popoverText || this.popoverIcon)
    },
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
