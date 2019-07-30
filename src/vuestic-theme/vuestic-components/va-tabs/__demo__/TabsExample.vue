<template>
  <div>
    <va-tabs v-model="selectedTabIndex">
      <va-tab
        v-for="tabObject in tabObjects"
        :key="tabObject.key"
      >
        {{ tabObject.title }}
        <va-icon
          name="fa fa-times"
          class="ml-2"
          @click.stop.native="removeTab(tabObject)"
        />
      </va-tab>
    </va-tabs>

    <div style="height: 20px"/>

    <div>
      Content: {{ selectedTab ? selectedTab.title : 'none' }}
    </div>
    <div>
      <input type="number" v-model.number="selectedTabIndex">
    </div>
  </div>
</template>

<script>
import VaTabs from '../VaTabs'
import VaTab from '../VaTab'
import VaIcon from '../../va-icon/VaIcon'

export default {
  name: 'TabsExample',
  components: {
    VaIcon,
    VaTab,
    VaTabs,
  },
  data () {
    return {
      selectedTabIndex: 0,
      tabObjects: [
        {
          key: 'products',
          title: 'Products',
        },
        {
          key: 'orders',
          title: 'Orders',
        },
        {
          key: 'cart',
          title: 'Cart',
        },
      ],
    }
  },
  computed: {
    selectedTab () {
      return this.tabObjects[this.selectedTabIndex]
    },
  },
  methods: {
    removeTab (tabToRemove) {
      this.tabObjects = this.tabObjects.filter(tab => tab !== tabToRemove)
    },
  },
}
</script>
