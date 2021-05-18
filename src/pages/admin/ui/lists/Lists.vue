<template>
  <div class="lists">
    <div class="row">
      <div class="flex xs12 lg6">
        <va-card class="mb-4">
          <va-list>
            <va-list-label>
              {{ $t('lists.customers') }}
            </va-list-label>

            <template v-for="(customer, i) in customers" :key="'item' + customer.id">
              <va-list-item clickable @click="notify(customer.name)">
                <va-list-item-section class="ml-2" avatar>
                  <va-avatar>
                    <img :src="customer.picture" :alt="customer.name">
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

              <va-list-separator v-if="i < customers.length - 1" :key="'separator' + customer.id" />
            </template>
          </va-list>
        </va-card>

        <va-card>
          <va-list>
            <va-list-label>
              {{ $t('lists.recentMessages') }}
            </va-list-label>

            <template v-for="(customer, i) in customers" :key="'item' + customer.id">
              <va-list-item clickable @click="toggleStar(customer)">
                <va-list-item-section icon>
                  <va-icon v-if="customer.starred" name="star" color="warning" />
                </va-list-item-section>

                <va-list-item-section avatar>
                  <va-avatar>
                    <img :src="customer.picture" :alt="customer.name">
                  </va-avatar>
                </va-list-item-section>

                <va-list-item-section>
                  <va-list-item-label>
                    {{ customer.name }}
                  </va-list-item-label>
                </va-list-item-section>

                <va-list-item-section icon>
                  <va-icon
                    :name="getGenderIcon(customer.gender)"
                    :color="getGenderColor(customer.gender)"
                  />
                </va-list-item-section>
              </va-list-item>

              <va-list-separator v-if="i < customers.length - 1" :key="'separator' + customer.id" />
            </template>

            <va-list-separator fit spaced />

            <va-list-label color="gray">
              {{ $t('lists.archieved') }}
            </va-list-label>

            <template v-for="(customer, i) in archived" :key="'item' + customer.id">
              <va-list-item>
                <va-list-item-section icon>
                  <va-icon v-if="customer.starred" name="star" color="warning" />
                </va-list-item-section>

                <va-list-item-section avatar>
                  <va-avatar>
                    <img :src="customer.picture" :alt="customer.name">
                  </va-avatar>
                </va-list-item-section>

                <va-list-item-section>
                  <va-list-item-label>
                    {{ customer.name }}
                  </va-list-item-label>
                </va-list-item-section>
              </va-list-item>

              <va-list-separator v-if="i < archived.length - 1" :key="'separator' + customer.id" />
            </template>
          </va-list>         
        </va-card>
      </div>

      <div class="flex xs12 lg6">
        <va-card class="mb-4">
          <va-list>
            <va-list-label>
              {{ $t('lists.starterKit') }}
            </va-list-label>

            <va-list-item class="ml-2" clickable>
              <va-list-item-section>
                <va-list-item-label>
                  Add profile images
                </va-list-item-label>

                <va-list-item-label caption>
                  You can use PNG or JPG files.
                </va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item class="ml-2" clickable>
              <va-list-item-section>
                <va-list-item-label>
                  Invite friends
                </va-list-item-label>

                <va-list-item-label caption>
                  You can send invitations via email or any messenger.
                </va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-separator fit spaced />

            <va-list-label>
              {{ $t('lists.notifications') }}
            </va-list-label>

            <va-list-item>
              <va-checkbox class="mr-2" v-model="appBanners" />

              <va-list-item-section>
                <va-list-item-label>
                  Application Banners
                </va-list-item-label>

                <va-list-item-label caption>
                  You can send invitations via email or any messenger.
                </va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item>
              <va-checkbox class="mr-2" v-model="banners" />

              <va-list-item-section>
                <va-list-item-label>
                  Banners
                </va-list-item-label>

                <va-list-item-label caption>
                  You can send invitations via email or any messenger.
                </va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item>
              <va-checkbox class="mr-2" v-model="notifications" />

              <va-list-item-section>
                <va-list-item-label>
                  Midnight Notifications
                </va-list-item-label>
              </va-list-item-section>
            </va-list-item>
          </va-list>          
        </va-card>

        <va-card>
          <va-list>
            <va-list-label>
              {{ $t('lists.routerSupport') }}
            </va-list-label>

            <va-list-item :to="{ name: 'google-maps' }">
              <va-list-item-section icon>
                <va-icon name="google" color="red" />
              </va-list-item-section>

              <va-list-item-section>
                <va-list-item-label>Google Maps</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item :to="{ name: 'yandex-maps' }">
              <va-list-item-section icon>
                <va-icon name="map" color="red" />
              </va-list-item-section>

              <va-list-item-section>
                <va-list-item-label>Yandex Maps</va-list-item-label>
              </va-list-item-section>
            </va-list-item>

            <va-list-item :to="{ name: 'leaflet-maps' }">
              <va-list-item-section icon>
                <va-icon name="map_marker" color="red" />
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

<script>
import data from './data.json'

export default {
  data () {
    return {
      customers: data.slice(0, 5),
      archived: data.slice(5, 8),
      appBanners: false,
      banners: false,
      notifications: true,
    }
  },
  methods: {
    getGenderIcon (gender) {
      return gender === 'male' ? 'mars' : 'venus'
    },
    getGenderColor (gender) {
      return gender === 'male' ? 'blue' : 'pink'
    },
    notify (name) {
      this.$vaToast.init(
      {
        message: `Clicked ${name}`,
        position: 'bottom-right',
      })
    },
    toggleStar (customer) {
      customer.starred = !customer.starred
    },
  },
}
</script>
