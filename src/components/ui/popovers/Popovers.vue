<template>
  <div class="tooltips">
    <div class="row">
      <div class="flex xs12 md6">
        <va-card :title="$t('popovers.popoverStyle')">
          <va-select
            class="mb-4"
            label="color scheme"
            v-model="popover.color"
            :options="colors"
          />
          <va-select
            class="mb-4"
            label="icon (font-awesome)"
            v-model="popover.icon"
            :options="icons"
            key-by="icon"
          />
          <va-input
            class="mb-4"
            v-model="popover.title"
            label="Title"
          />
          <va-input
            class="mb-4"
            v-model="popover.message"
            label="Message"
          />
          <div class="row popover-example mt-5">
            <va-popover
              :icon="popover.icon.icon"
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
          <p class="my-2 mx-2">
            Any text can be used for
            <va-popover
              placement="bottom"
              message="Bottom tooltip"
            >
              <a class="link">
                {{ $t('notificationsPage.popovers.bottomTooltip') }}
              </a>
            </va-popover>
            tooltip showcase. Just anything you can possibly imagine to test
            <va-popover
              placement="right"
              message="Right tooltip"
            >
              <a class="link">
                {{ $t('notificationsPage.popovers.rightTooltip') }}
              </a>
            </va-popover>
            tooltip.
            But it can appear on the
            <va-popover
              placement="left"
              message="Left tooltip"
            >
              <a class="link">
                {{$t('notificationsPage.popovers.leftTooltip')}}
              </a>
            </va-popover>
            .
            Or just
            <va-popover
              placement="top"
              message="Top tooltip"
            >
              <a class="link">
                {{ $t('notificationsPage.popovers.topTooltip') }}
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
export default {
  components: {},
  data () {
    return {
      icons: [
        {
          icon: 'fa fa-print',
          text: 'print',
        },
        {
          icon: 'fa fa-star',
          text: 'star',
        },
      ],
      colors: ['success', 'info', 'danger', 'warning', 'gray', 'dark'],
      popover: {
        title: 'Hey folks!',
        message: 'This tooltip is amazing:D',
        icon: {
          icon: 'fa fa-print',
          text: 'print',
        },
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
</style>
