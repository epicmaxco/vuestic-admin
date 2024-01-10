<template>
  <VaDropdown :offset="[13, 0]" class="notification-dropdown" stick-to-edges :close-on-content-click="false">
    <template #anchor>
      <VaButton preset="secondary" color="textPrimary">
        <VaBadge overlap>
          <template #text> 2+</template>
          <VaIconNotification class="notification-dropdown__icon" />
        </VaBadge>
      </VaButton>
    </template>
    <VaDropdownContent class="md:max-w-[420px] w-full">
      <section class="max-h-[320px] p-4 overflow-auto">
        <VaList class="space-y-1 mb-2">
          <template v-for="item in getNotifications" :key="item.id">
            <VaListItem class="text-base cursor-pointer">
              <VaListItemSection icon class="mx-0 p-0">
                <VaIcon :name="item.icon" color="secondary" />
              </VaListItemSection>
              <VaListItemSection>
                {{ item.message }}
              </VaListItemSection>
              <VaListItemSection icon class="mx-1">
                {{ item.updateTimestamp }}
              </VaListItemSection>
            </VaListItem>
            <VaListSeparator v-if="item.separator" class="mx-3" />
          </template>
        </VaList>

        <VaButton preset="primary" class="w-full" @click="displayAllNotifications = !displayAllNotifications"
          >{{ displayAllNotifications ? t('notifications.less') : t('notifications.all') }}
        </VaButton>
      </section>
    </VaDropdownContent>
  </VaDropdown>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import VaIconNotification from '../../../icons/VaIconNotification.vue'

const { t, locale } = useI18n()

const baseNumberOfVisibleNotifications = 4
const rtf = new Intl.RelativeTimeFormat(locale.value, { style: 'short' })
const displayAllNotifications = ref(false)

interface INotification {
  message: string
  icon: string
  id: number
  separator?: boolean
  updateTimestamp: string
}

const notifications: INotification[] = [
  {
    message: '4 pending requests',
    icon: 'favorite_outline',
    id: 1,
    separator: true,
    updateTimestamp: rtf.format(-3, 'minutes').toString(),
  },
  {
    message: '3 new reports',
    icon: 'calendar_today',
    id: 2,
    separator: true,
    updateTimestamp: rtf.format(-12, 'hours').toString(),
  },
  {
    message: 'Whoops! Your trial period has expired.',
    icon: 'error_outline',
    id: 3,
    separator: true,
    updateTimestamp: rtf.format(-2, 'days').toString(),
  },
  {
    message: 'It looks like your timezone is set incorrectly, please change it to avoid issues with Memory.',
    icon: 'schedule',
    id: 4,
    updateTimestamp: rtf.format(-1, 'weeks').toString(),
  },
  {
    message: '2 new team members added',
    icon: 'group_add',
    id: 5,
    separator: false,
    updateTimestamp: rtf.format(-15, 'minutes').toString(),
  },
  {
    message: 'Monthly budget exceeded by 10%',
    icon: 'trending_up',
    id: 6,
    separator: true,
    updateTimestamp: rtf.format(-3, 'days').toString(),
  },
  {
    message: '7 tasks are approaching their deadlines',
    icon: 'alarm',
    id: 7,
    separator: false,
    updateTimestamp: rtf.format(-5, 'hours').toString(),
  },
  {
    message: 'New software update available',
    icon: 'system_update',
    id: 8,
    separator: true,
    updateTimestamp: rtf.format(-1, 'days').toString(),
  },
]

const getNotifications = computed(() => {
  return displayAllNotifications.value ? notifications : notifications.slice(0, baseNumberOfVisibleNotifications)
})
</script>

<style lang="scss" scoped>
.notification-dropdown {
  cursor: pointer;

  .notification-dropdown__icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
