<template>
  <div class="grid row">
    <div class="flex xs12 md12">
      <va-card title="Tabs Alignment" style="overflow-x: auto;">
        <div>
          <div class="row">
            <div class="flex xs12">
              <va-tabs v-model="tabValue" style="width: 400px;">
                <va-tab
                  v-for="title in tabTitles"
                  :key="title"
                >
                  {{title}}
                </va-tab>
              </va-tabs>
            </div>
            <div class="flex xs12">
              <va-tabs right v-model="tabValue" style="width: 400px;">
                <va-tab
                  v-for="title in tabTitles"
                  :key="title"
                >
                  {{title}}
                </va-tab>
              </va-tabs>
            </div>
            <div class="flex xs12">
              <va-tabs center v-model="tabValue" style="width: 400px;">
                <va-tab
                  v-for="title in tabTitles"
                  :key="title"
                >
                  {{title}}
                </va-tab>
              </va-tabs>
            </div>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex xs12 md12">
      <va-card title="Tabs Grow" style="overflow-x: auto;">
        <div>
          <div class="row">
            <div class="flex xs12">
              <va-tabs grow v-model="tabValue" style="width: 400px;">
                <va-tab
                  v-for="title in tabTitles"
                  :key="title"
                >
                  {{title}}
                </va-tab>
              </va-tabs>
            </div>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex xs12 md12">
      <va-card title="Tabs Overflow">
        <div>
          <div class="row">
            <div class="flex xs12">
              <va-tabs v-model="tabValue">
                <va-tab
                  v-for="title in tabTitles"
                  :key="title"
                >
                  {{title}}
                </va-tab>
                <va-tab>
                  Somewhat long long long long long long long long long text
                </va-tab>
              </va-tabs>
            </div>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex xs12 md12">
      <va-card title="Tabs with Hidden slider">
        <div>
          <div class="row">
            <div class="flex xs12">
              <va-tabs hideSlider v-model="tabValue">
                <va-tab
                  v-for="title in tabTitles"
                  :key="title"
                >
                  {{title}}
                </va-tab>
              </va-tabs>
            </div>
          </div>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data () {
    return {
      tabTitles: ['One', 'Two', 'Three'],
      tabValue: 1,
    }
  },
  computed: {
    computedStyle () {
      return {
        backgroundColor: this.$themes.primary,
      }
    },
  },
}
</script>

<style lang="scss">
.grid {
  &__container {
    min-height: 3rem;
    color: $white;
    border-radius: 0.5rem;
  }
}

</style>
