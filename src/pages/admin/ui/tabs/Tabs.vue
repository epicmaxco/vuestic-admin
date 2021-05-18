<template>
  <div class="grid row">
    <div class="flex xs12 md6">
      <va-card class="fill-height" style="overflow-x: auto;">
        <va-card-title>{{ $t('tabs.alignment') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs12">
              <va-tabs v-model="tabValue" style="width: 100%; min-width: 250px;">
                <template #tabs>
                  <va-tab
                    v-for="title in tabTitles.slice(0,3)"
                    :key="title"
                  >
                    {{title}}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
            <div class="flex xs12">
              <va-tabs right v-model="tabValue" style="width: 100%; min-width: 250px;">
                <template #tabs>
                  <va-tab
                    v-for="title in tabTitles.slice(0,3)"
                    :key="title"
                  >
                    {{title}}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
            <div class="flex xs12">
              <va-tabs center v-model="tabValue" style="width: 100%; min-width: 250px;">
                <template #tabs>
                  <va-tab
                    v-for="title in tabTitles.slice(0,3)"
                    :key="title"
                  >
                    {{title}}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex xs12 md6">
      <div class="row column">
        <div class="flex">
          <va-card>
            <va-card-title>{{ $t('tabs.overflow') }}</va-card-title>
            <va-card-content>
              <div class="row">
                <div class="flex xs12">
                  <va-tabs v-model="tabValue">
                    <template #tabs>
                      <va-tab
                        v-for="title in tabTitles.slice(0,3)"
                        :key="title"
                      >
                        {{title}}
                      </va-tab>                 
                      <va-tab>
                        Somewhat long long long long long long long long long text
                      </va-tab>
                    </template>
                  </va-tabs>
                </div>
              </div>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex">
          <va-card>
            <va-card-title>{{ $t('tabs.hidden') }}</va-card-title>
            <va-card-content>
              <div class="row">
                <div class="flex xs12">
                  <va-tabs hideSlider v-model="tabValue">
                    <template #tabs>
                      <va-tab
                        v-for="title in tabTitles.slice(0,3)"
                        :key="title"
                      >
                        {{title}}
                      </va-tab>
                    </template>
                  </va-tabs>
                </div>
              </div>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>

    <div class="flex xs12">
      <va-card style="overflow-x: auto;">
        <va-card-title>{{ $t('tabs.grow') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs12">
              <va-tabs grow v-model="tabValue" style="width: 100%;">
                <template #tabs>
                  <va-tab
                    v-for="title in tabTitles.slice(0,3)"
                    :key="title"
                  >
                    {{title}}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data () {
    return {
      tabTitles: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'],
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
// .grid {
//   &__container {
//     min-height: 3rem;
//     color: $white;
//     border-radius: 0.5rem;
//   }
// }
</style>
