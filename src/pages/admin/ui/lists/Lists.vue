<template>
  <div class="lists">
    <div class="row">
      <div class="flex xs12 lg6">
        <va-card class="mb-4 px-3">
          <va-list>
            <va-list-label>
              {{ t('lists.customers') }}
            </va-list-label>

            <template v-for="(customer, i) in customers" :key="'item' + customer.id">
              <va-list-item clickable @click="notify(customer.name)">
                <va-list-item-section avatar>
                  <va-avatar>
                    <img :src="customer.picture" :alt="customer.name" />
                  </va-avatar>
                </va-list-item-section>

                <va-list-item-section>
                  <va-list-item-label>
                    {{ customer.name }}
                  </va-list-item-label>

                  <va-list-item-label caption>
                    {{ customer.address }}
                  </va-list-item-label>
                </va-list-item-section>

                <va-list-item-section icon>
                  <va-icon name="eye" color="gray" />
                </va-list-item-section>
              </va-list-item>

              <va-list-separator v-if="i < customers.length - 1" :key="'separator' + customer.id" class="my-1" fit />
            </template>
          </va-list>
        </va-card>

        <va-card class="px-3">
          <va-list>
            <va-list-label>
              {{ t('lists.recentMessages') }}
            </va-list-label>

            <template v-for="(customer, i) in customers" :key="'item' + customer.id">
              <va-list-item clickable @click="toggleStar(customer)">
                <va-list-item-section icon>
                  <va-icon v-if="customer.starred" name="star" color="warning" />
                </va-list-item-section>

                <va-list-item-section avatar>
                  <va-avatar>
                    <img :src="customer.picture" :alt="customer.name" />
                  </va-avatar>
                </va-list-item-section>

                <va-list-item-section>
                  <va-list-item-label>
                    {{ customer.name }}
                  </va-list-item-label>
                </va-list-item-section>

                <va-list-item-section icon>
                  <va-icon :name="getGenderIcon(customer.gender)" :color="getGenderColor(customer.gender)" />
                </va-list-item-section>
              </va-list-item>

              <va-list-separator v-if="i < customers.length - 1" :key="'separator' + customer.id" class="my-1" fit />
            </template>

            <va-list-separator fit spaced />

            <va-list-label color="gray">
              {{ t('lists.archieved') }}
            </va-list-label>

            <template v-for="(customer, i) in archived" :key="'item' + customer.id">
              <va-list-item disabled>
                <va-list-item-section icon>
                  <va-icon v-if="customer.starred" name="star" color="warning" />
                </va-list-item-section>

                <va-list-item-section avatar>
                  <va-avatar>
                    <img :src="customer.picture" :alt="customer.name" />
                  </va-avatar>
                </va-list-item-section>

                <va-list-item-section>
                  <va-list-item-label>
                    {{ customer.name }}
                  </va-list-item-label>
                </va-list-item-section>
              </va-list-item>

              <va-list-separator v-if="i < archived.length - 1" :key="'separator' + customer.id" class="my-1" fit />
            </template>
          </va-list>
        </va-card>
      </div>

      <div class="flex xs12 lg6">
        <va-card class="mb-4 px-3">
          <va-list>
            <va-list-label>
              {{ t('lists.starterKit') }}
            </va-list-label>

            <va-list-item class="mb-2" clickable>
              <va-list-item-section>
                <va-list-item-label>Add profile images</va-list-item-label>

                <va-list-item-label caption>You can use PNG or JPG files.</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item clickable>
              <va-list-item-section>
                <va-list-item-label>Invite friends</va-list-item-label>

                <va-list-item-label caption>You can send invitations via email or any messenger.</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-separator fit spaced />

            <va-list-label>
              {{ t('lists.notifications') }}
            </va-list-label>

            <va-list-item class="mb-2">
              <va-checkbox v-model="appBanners" class="mr-2" />

              <va-list-item-section>
                <va-list-item-label>Application Banners</va-list-item-label>

                <va-list-item-label caption>You can send invitations via email or any messenger.</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item class="mb-2">
              <va-checkbox v-model="banners" class="mr-2" />

              <va-list-item-section>
                <va-list-item-label>Banners</va-list-item-label>

                <va-list-item-label caption>You can send invitations via email or any messenger.</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item>
              <va-checkbox v-model="notifications" class="mr-2" />

              <va-list-item-section>
                <va-list-item-label>Midnight Notifications</va-list-item-label>
              </va-list-item-section>
            </va-list-item>
          </va-list>
        </va-card>

        <va-card class="px-3">
          <va-list>
            <va-list-label>
              {{ t('lists.routerSupport') }}
            </va-list-label>

            <va-list-item :to="{ name: 'maplibre-maps' }">
              <va-list-item-section icon>
                <va-icon name="public" color="danger" />
              </va-list-item-section>

              <va-list-item-section>
                <va-list-item-label>MapLibre Maps</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item :to="{ name: 'yandex-maps' }">
              <va-list-item-section icon>
                <va-icon name="map" color="danger" />
              </va-list-item-section>

              <va-list-item-section>
                <va-list-item-label>Yandex Maps</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item :to="{ name: 'leaflet-maps' }">
              <va-list-item-section icon>
                <va-icon name="map_marker" color="danger" />
              </va-list-item-section>

              <va-list-item-section>
                <va-list-item-label>Leaflet Maps</va-list-item-label>
              </va-list-item-section>
            </va-list-item>
          </va-list>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
