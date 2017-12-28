<template>
  <div class="row">
    <vuestic-widget :headerText="$t('spinners.title')" class="col-sm-12">
        <div v-for="(group, i) in groups" :key="i" class="row">
          <div v-for="item in group" :key="item" class="col">
            <component
              :is="item"
              :size="config.size"
              :color="config.color"
              :animation-duration="config.animation"
              class="spinner-item">
            </component>
          </div>
        </div>
        <div class="row align-center">
          <div class="col text-center">
            Powered by
            <a :href="'http://epic-spinners.epicmax.co/'" target="_blank">Epic Spinners</a>
          </div>
        </div>
    </vuestic-widget>
  </div>
</template>

<script>
  import * as spinners from 'epic-spinners'

  export default {
    components: {
      ...spinners
    },
    data: function () {
      return {
        config: {
          animation: 1500,
          color: '#1ec260',
          size: 50,
          group: 4
        }
      }
    },
    computed: {
      groups: function () {
        return this.groupItems(Object.keys(spinners), this.config.group)
      }
    },
    methods: {
      groupItems (items, groupSize) {
        var grouped = []

        for (var i = 0; i < items.length; i += groupSize) {
          grouped.push(items.slice(i, i + groupSize))
        }

        return grouped
      }
    }
  }
</script>

<style scoped>
  .spinner-item {
    margin: 40px auto;
  }
</style>
