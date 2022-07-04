<template>
  <div class="tooltips">
    <div class="row">
      <div class="flex xs12 md6">
        <va-card>
          <va-card-title>{{ t('popovers.popoverStyle') }}</va-card-title>
          <va-card-content>
            <va-select v-model="popover.color" class="mb-4" label="color scheme" :options="colors" />
            <va-select
              v-model="popover.icon"
              class="mb-4"
              label="icon (font-awesome)"
              :options="icons"
              track-by="icon"
            />
            <va-input v-model="popover.title" class="mb-4" label="Title" />
            <va-input v-model="popover.message" class="mb-4" label="Message" />
            <div class="popover-example mt-5">
              <va-popover
                :icon="popover.icon.icon"
                :color="popover.color"
                :title="popover.title"
                :message="popover.message"
                placement="right"
                open
              >
                <va-button>
                  {{ t('notificationsPage.popovers.showPopover') }}
                </va-button>
              </va-popover>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12 md6">
        <va-card>
          <va-card-title>{{ t('popovers.popoverPlacement') }}</va-card-title>
          <va-card-content>
            <p class="my-2 mx-2">
              Any text can be used for
              <va-popover placement="bottom" message="Bottom tooltip">
                <a class="link">
                  {{ t('notificationsPage.popovers.bottomTooltip') }}
                </a>
              </va-popover>
              tooltip showcase. Just anything you can possibly imagine to test
              <va-popover placement="right" message="Right tooltip">
                <a class="link">
                  {{ t('notificationsPage.popovers.rightTooltip') }}
                </a>
              </va-popover>
              tooltip. But it can appear on the
              <va-popover placement="left" message="Left tooltip">
                <a class="link">
                  {{ t('notificationsPage.popovers.leftTooltip') }}
                </a>
              </va-popover>
              . Or just
              <va-popover placement="top" message="Top tooltip">
                <a class="link">
                  {{ t('notificationsPage.popovers.topTooltip') }}
                </a>
              </va-popover>
              the item.
            </p>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const icons = ref([
    {
      icon: 'print',
      text: 'print',
    },
    {
      icon: 'star',
      text: 'star',
    },
  ])

  const colors = ref(['success', 'info', 'danger', 'warning', 'gray', 'dark'])

  const popover = ref({
    title: 'Hey folks!',
    message: 'This tooltip is amazing :D',
    icon: {
      icon: 'print',
      text: 'print',
    },
    color: 'warning',
  })
</script>
