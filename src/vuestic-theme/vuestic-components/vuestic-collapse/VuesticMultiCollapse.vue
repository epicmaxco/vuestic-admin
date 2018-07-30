<template>
  <div class="vuestic-multi-collapse">
    <span class="vuestic-multi-collapse__header"
         :class="{ 'active': show }"
         v-for="tab in tabs"
         @click="toggleCollapseBody(tab.name)">
      <button class="btn btn-primary">
        {{ tab.name }}
      </button>
    </span>
    <div class="vuestic-multi-collapse__body" v-if="show">
      {{ collapseDescription }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-multi-collapse',
    props: {
      tabs: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        show: false,
        prevTab: this.tabs[0].name,
        collapseDescription: this.tabs[0].description
      }
    },
    methods: {
      toggleCollapseBody (name) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].name === name) {
            this.collapseDescription = this.tabs[i].description
            if (this.prevTab !== this.tabs[i].name) {
              this.show = true
              this.prevTab = this.tabs[i].name
            } else {
              this.show = !this.show
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-multi-collapse {
    margin-top: 10px;

    &__header {
      margin-right: 10px;
      display: inline;
    }

    &__body {
      padding: 10px;
      margin-top: 20px;
      background: $light-gray;
    }
  }
</style>
