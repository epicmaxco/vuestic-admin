<template>
  <div class="tooltips">
    <div class="row">
      <div class="flex xs12 md6">
        <va-card :title="$t('popovers.popoverStyle')">
          <va-simple-select
            class="mt-4"
            label="color scheme"
            v-model="popover.color"
            :options="colors"
          />
          <va-simple-select
            class="mt-4"
            label="icon (font-awesome)"
            v-model="popover.icon"
            :options="icons"
          />
          <va-input
            v-model="popover.title"
            label="Title"
          />
          <va-input
            class="pt-4"
            v-model="popover.message"
            label="Message"
          />
          <div class="row popover-example mt-5">
            <va-popover
              :icon="popover.icon"
              :color="popover.color"
              :title="popover.title"
              :message="popover.message"
              placement="right"
              open
            >
              <va-button>
                {{ $t('notificationsPage.popovers.showPopover') }}
              </va-button>
            </va-popover>
          </div>
        </va-card>
      </div>

      <div class="flex xs12 md6">
        <va-card :title="$t('popovers.popoverPlacement')">
          <p>
            Any text can be used for
            <va-popover
              placement="top"
              message="Top tooltip text"
            >
              <a href="#">
                {{ $t('notificationsPage.popovers.topTooltip') }}
              </a>
            </va-popover>
            showcase. Just anything you can possibly imagine to test
            <va-popover
              placement="right"
              message="Right tooltip text"
            >
              <a href="#">
                {{ $t('notificationsPage.popovers.rightTooltip') }}
              </a>
            </va-popover>
            .
            But it can appear on the
            <va-popover
              placement="left"
              message="Left tooltip text"
            >
              <a href="#">
                {{$t('notificationsPage.popovers.leftTooltip')}}
              </a>
            </va-popover>
            .
            Or just
            <va-popover
              placement="bottom"
              message="Bottom tooltip text"
            >
              <a href="#">
                {{ $t('notificationsPage.popovers.bottomTooltip') }}
              </a>
            </va-popover>
            the item.
          </p>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import VaInput from '../../../vuestic-theme/vuestic-components/va-input/VaInput'

export default {
  components: { VaInput },
  data () {
    return {
      icons: [
        'fa fa-print', 'fa fa-star',
      ],
      colors: [
        'success', 'info', 'danger', 'warning', 'gray', 'dark',
      ],
      popover: {
        title: 'Hey folks!',
        message: 'This tooltip is amazing:D',
        icon: 'fa fa-print',
        color: 'warning',
      },
    }
  },
}
</script>

<style lang="scss">
.tooltips {
  &__content {
    @include va-flex-center();
  }
}
.popover-example {
  min-height: 100px;
}
</style>
