<template>
  <div class="lists">
    <div class="row">
      <div class="flex xs12 lg6">
        <va-list fit class="mb-2">
          <va-list-label>
            {{ $t('lists.customers') }}
          </va-list-label>

          <template v-for="(customer, i) in customers">
            <va-item :key="'item' + customer.id" clickable @click="notify(customer.name)">
              <va-item-section avatar>
                <va-avatar>
                  <img :src="customer.picture" :alt="customer.name">
                </va-avatar>
              </va-item-section>

              <va-item-section>
                <va-item-label>
                  {{ customer.name }}
                </va-item-label>

                <va-item-label caption>
                  {{ customer.address }}
                </va-item-label>
              </va-item-section>

              <va-item-section side>
                <va-icon name="fa fa-eye" color="gray" />
              </va-item-section>
            </va-item>

            <va-list-separator v-if="i < customers.length - 1" :key="'separator' + customer.id" />
          </template>
        </va-list>

        <va-list fit>
          <va-list-label>
            {{ $t('lists.recentMessages') }}
          </va-list-label>

          <template v-for="(customer, i) in customers">
            <va-item :key="'item' + customer.id" clickable @click="toggleStar(customer)">
              <va-item-section side>
                <va-icon v-if="customer.starred" name="fa fa-star" color="warning" />
              </va-item-section>

              <va-item-section avatar>
                <va-avatar>
                  <img :src="customer.picture" :alt="customer.name">
                </va-avatar>
              </va-item-section>

              <va-item-section>
                <va-item-label>
                  {{ customer.name }}
                </va-item-label>
              </va-item-section>

              <va-item-section side>
                <va-icon
                  :name="getGenderIcon(customer.gender)"
                  :color="getGenderColor(customer.gender)"
                />
              </va-item-section>
            </va-item>

            <va-list-separator v-if="i < customers.length - 1" :key="'separator' + customer.id" />
          </template>

          <va-list-separator fit spaced />

          <va-list-label color="gray">
            {{ $t('lists.archieved') }}
          </va-list-label>

          <template v-for="(customer, i) in archived">
            <va-item :key="'item' + customer.id">
              <va-item-section side>
                <va-icon v-if="customer.starred" name="fa fa-star" color="warning" />
              </va-item-section>

              <va-item-section avatar>
                <va-avatar>
                  <img :src="customer.picture" :alt="customer.name">
                </va-avatar>
              </va-item-section>

              <va-item-section>
                <va-item-label>
                  {{ customer.name }}
                </va-item-label>
              </va-item-section>
            </va-item>

            <va-list-separator v-if="i < archived.length - 1" :key="'separator' + customer.id" />
          </template>
        </va-list>
      </div>

      <div class="flex xs12 lg6">
        <va-list fit class="mb-2">
          <va-list-label>
            {{ $t('lists.starterKit') }}
          </va-list-label>

          <va-item clickable>
            <va-item-section>
              <va-item-label>
                Add profile images
              </va-item-label>

              <va-item-label caption>
                You can use PNG or JPG files.
              </va-item-label>
            </va-item-section>
          </va-item>

          <va-item clickable>
            <va-item-section>
              <va-item-label>
                Invite friends
              </va-item-label>

              <va-item-label caption>
                You can send invitations via email or any messenger.
              </va-item-label>
            </va-item-section>
          </va-item>

          <va-list-separator fit spaced />

          <va-list-label>
            {{ $t('lists.notifications') }}
          </va-list-label>

          <va-item>
            <va-item-section side>
              <va-checkbox v-model="appBanners" />
            </va-item-section>

            <va-item-section>
              <va-item-label>
                Application Banners
              </va-item-label>

              <va-item-label caption>
                You can send invitations via email or any messenger.
              </va-item-label>
            </va-item-section>
          </va-item>

          <va-item>
            <va-item-section side>
              <va-checkbox v-model="banners" />
            </va-item-section>

            <va-item-section>
              <va-item-label>
                Banners
              </va-item-label>

              <va-item-label caption>
                You can send invitations via email or any messenger.
              </va-item-label>
            </va-item-section>
          </va-item>

          <va-item>
            <va-item-section side>
              <va-checkbox v-model="notifications" />
            </va-item-section>

            <va-item-section>
              <va-item-label>
                Midnight Notifications
              </va-item-label>
            </va-item-section>
          </va-item>
        </va-list>

        <va-list fit>
          <va-list-label>
            {{ $t('lists.routerSupport') }}
          </va-list-label>

          <va-item :to="{ name: 'google-maps' }">
            <va-item-section side>
              <va-icon name="fa fa-google" color="red" />
            </va-item-section>

            <va-item-section>
              <va-item-label>Google Maps</va-item-label>
            </va-item-section>
          </va-item>

          <va-item :to="{ name: 'yandex-maps' }">
            <va-item-section side>
              <va-icon name="fa fa-map" color="red" />
            </va-item-section>

            <va-item-section>
              <va-item-label>Yandex Maps</va-item-label>
            </va-item-section>
          </va-item>

          <va-item :to="{ name: 'leaflet-maps' }">
            <va-item-section side>
              <va-icon name="fa fa-map-marker" color="red" />
            </va-item-section>

            <va-item-section>
              <va-item-label>Leaflet Maps</va-item-label>
            </va-item-section>
          </va-item>
        </va-list>
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
      return gender === 'male' ? 'fa fa-mars' : 'fa fa-venus'
    },
    getGenderColor (gender) {
      return gender === 'male' ? 'blue' : 'pink'
    },
    notify (name) {
      this.showToast(`Clicked ${name}`, {
        position: 'bottom-right',
      })
    },
    toggleStar (customer) {
      customer.starred = !customer.starred
    },
  },
}
</script>
