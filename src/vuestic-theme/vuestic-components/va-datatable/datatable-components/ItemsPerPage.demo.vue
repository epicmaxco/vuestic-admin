<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 200px">
      <items-per-page
        :options="options"
        label="Label"
        :defaultPerPage="itemsPerPage"
        @items-per-page="onItemsPerPage"
      />
    </div>
  </div>
</template>

<script>
import ItemsPerPage from './ItemsPerPage.vue'

export default {
  components: {
    ItemsPerPage,
  },
  data () {
    return {
      itemsPerPage: 7,
      options: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
      ],
    }
  },
  methods: {
    onItemsPerPage (value) {
      // eslint-disable-next-line no-console
      console.log('onItemsPerPage', value)
    },
  },
}
</script>
