<template>
  <div class="lists grid grid-cols-12 items-start gap-6">
    <VaCard class="col-span-12 lg:col-span-6 p-4">
      <VaList class="py-4">
        <VaListLabel>
          {{ t('lists.customers') }}
        </VaListLabel>

        <template v-for="(customer, i) in customers" :key="'item' + customer.id">
          <VaListItem clickable @click="notify(customer.name)">
            <VaListItemSection avatar>
              <VaAvatar>
                <img :alt="customer.name" :src="customer.picture" />
              </VaAvatar>
            </VaListItemSection>

            <VaListItemSection>
              <VaListItemLabel>
                {{ customer.name }}
              </VaListItemLabel>

              <VaListItemLabel caption>
                {{ customer.address }}
              </VaListItemLabel>
            </VaListItemSection>

            <VaListItemSection icon>
              <VaIcon color="gray" name="eye" />
            </VaListItemSection>
          </VaListItem>

          <VaListSeparator v-if="i < customers.length - 1" :key="'separator' + customer.id" class="my-1" fit />
        </template>
      </VaList>
    </VaCard>

    <VaCard class="col-span-12 lg:col-span-6 p-4">
      <VaList class="py-4">
        <VaListLabel>
          {{ t('lists.starterKit') }}
        </VaListLabel>

        <VaListItem class="mb-2" clickable>
          <VaListItemSection>
            <VaListItemLabel>Add profile images</VaListItemLabel>

            <VaListItemLabel caption>You can use PNG or JPG files.</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>

        <VaListItem clickable>
          <VaListItemSection>
            <VaListItemLabel>Invite friends</VaListItemLabel>

            <VaListItemLabel caption>You can send invitations via email or any messenger.</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>

        <VaListSeparator fit spaced />

        <VaListLabel>
          {{ t('lists.notifications') }}
        </VaListLabel>

        <VaListItem class="mb-2">
          <VaCheckbox v-model="appBanners" class="mr-2" />

          <VaListItemSection>
            <VaListItemLabel>Application Banners</VaListItemLabel>

            <VaListItemLabel caption>You can send invitations via email or any messenger.</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>

        <VaListItem class="mb-2">
          <VaCheckbox v-model="banners" class="mr-2" />

          <VaListItemSection>
            <VaListItemLabel>Banners</VaListItemLabel>

            <VaListItemLabel caption>You can send invitations via email or any messenger.</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>

        <VaListItem>
          <VaCheckbox v-model="notifications" class="mr-2" />

          <VaListItemSection>
            <VaListItemLabel>Midnight Notifications</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>
      </VaList>
    </VaCard>

    <VaCard class="col-span-12 lg:col-span-6 p-4">
      <VaList class="py-4">
        <VaListLabel>
          {{ t('lists.recentMessages') }}
        </VaListLabel>

        <template v-for="(customer, i) in customers" :key="'item' + customer.id">
          <VaListItem clickable @click="toggleStar(customer)">
            <VaListItemSection icon>
              <VaIcon v-if="customer.starred" color="warning" name="star" />
            </VaListItemSection>

            <VaListItemSection avatar>
              <VaAvatar>
                <img :alt="customer.name" :src="customer.picture" />
              </VaAvatar>
            </VaListItemSection>

            <VaListItemSection>
              <VaListItemLabel>
                {{ customer.name }}
              </VaListItemLabel>
            </VaListItemSection>

            <VaListItemSection icon>
              <VaIcon :color="getGenderColor(customer.gender)" :name="getGenderIcon(customer.gender)" />
            </VaListItemSection>
          </VaListItem>

          <VaListSeparator v-if="i < customers.length - 1" :key="'separator' + customer.id" class="my-1" fit />
        </template>

        <VaListSeparator fit spaced />

        <VaListLabel color="gray">
          {{ t('lists.archieved') }}
        </VaListLabel>

        <template v-for="(customer, i) in archived" :key="'item' + customer.id">
          <VaListItem disabled>
            <VaListItemSection icon>
              <VaIcon v-if="customer.starred" color="warning" name="star" />
            </VaListItemSection>

            <VaListItemSection avatar>
              <VaAvatar>
                <img :alt="customer.name" :src="customer.picture" />
              </VaAvatar>
            </VaListItemSection>

            <VaListItemSection>
              <VaListItemLabel>
                {{ customer.name }}
              </VaListItemLabel>
            </VaListItemSection>
          </VaListItem>

          <VaListSeparator v-if="i < archived.length - 1" :key="'separator' + customer.id" class="my-1" fit />
        </template>
      </VaList>
    </VaCard>

    <VaCard class="col-span-12 lg:col-span-6 p-4">
      <VaList class="py-4">
        <VaListLabel>
          {{ t('lists.routerSupport') }}
        </VaListLabel>

        <VaListItem :to="{ name: 'maplibre-maps' }">
          <VaListItemSection icon>
            <VaIcon color="danger" name="public" />
          </VaListItemSection>

          <VaListItemSection>
            <VaListItemLabel>MapLibre Maps</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>

        <VaListItem :to="{ name: 'yandex-maps' }">
          <VaListItemSection icon>
            <VaIcon color="danger" name="map" />
          </VaListItemSection>

          <VaListItemSection>
            <VaListItemLabel>Yandex Maps</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>

        <VaListItem :to="{ name: 'leaflet-maps' }">
          <VaListItemSection icon>
            <VaIcon color="danger" name="map_marker" />
          </VaListItemSection>

          <VaListItemSection>
            <VaListItemLabel>Leaflet Maps</VaListItemLabel>
          </VaListItemSection>
        </VaListItem>
      </VaList>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vuestic-ui'
import data from './data.json'

const { t } = useI18n()
const { init: initToast } = useToast()

const customers = ref(data.slice(0, 5))
const archived = ref(data.slice(5, 8))
const appBanners = ref(false)
const banners = ref(false)
const notifications = ref(true)

function getGenderIcon(gender: string) {
  return gender === 'male' ? 'mars' : 'venus'
}

function getGenderColor(gender: string) {
  return gender === 'male' ? 'info' : 'success'
}

function notify(name: string) {
  initToast({
    message: `Clicked ${name}`,
    position: 'bottom-right',
  })
}

function toggleStar(customer: { starred: boolean }) {
  customer.starred = !customer.starred
}
</script>
