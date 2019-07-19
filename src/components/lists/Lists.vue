<template>
  <div>
    <va-list fit style="maxWidth: 400px" class="mb-2">
      <va-list-label>
        Customers
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

    <va-list fit style="maxWidth: 400px" class="mb-2">
      <va-list-label>
        Recent Messages
      </va-list-label>

      <template v-for="(customer, i) in customers">
        <va-item :key="'item' + customer.id" clickable>
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
        Archived
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

    <va-list fit style="maxWidth: 400px">
      <va-list-label>
        Starter kit
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
        Notifications
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
  },
}
</script>

<style lang="scss" scoped>

</style>
