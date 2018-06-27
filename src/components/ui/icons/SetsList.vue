<template>
  <div class="sets-list row">
    <div class="col-md-12">
      <vuestic-widget :headerText="$t('icons.title')">
        <div class="row">
          <div class="small-set col-lg-6" v-for="set in sets">
            <div class="set-content">
              <div class="overlay">
                <router-link :to="{path: set.href}" append>
                  <div class="btn btn-primary btn">{{set.name.toUpperCase()}}</div>
                </router-link>
              </div>
              <div>
                <template v-for="filteredList in set.filteredLists">
                  <div v-if="filteredList.length !== 2" class="row">
                    <div class="col-sm-2" v-for="icon in filteredList">
                      <div class="icon">
                        <i :class="iconClass(set, icon)" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <div v-if="filteredList.length === 2" class="row">
                    <div class="col-sm-2">
                      <div class="icon">
                        <i :class="iconClass(set, filteredList[0])" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div class="col-sm-8"></div>
                    <div class="col-sm-2">
                      <div class="icon">
                        <i :class="iconClass(set, filteredList[1])" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'iconsList',
    props: ['sets'],
    methods: {
      iconClass (set, icon) {
        return set.prefix + ' ' + set.prefix + '-' + icon
      }
    }
  }
</script>

<style lang="scss">
  .sets-list {
    .small-set {
      .btn {
        width: 13.75rem;
        padding-left: 0;
        padding-right: 0;
        text-align: center;
      }

      margin: 0 0 1.5rem;
      .set-content {
        background-color: $light-gray;
        height: 100%;
        position: relative;
        > div {
          padding: 1rem;
          div[class^="col"] {
            padding: 0;
            margin: 1rem 0;
            .icon {
              font-size: .85rem;
              text-align: center;
            }
          }
        }

        .overlay {
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          /*visibility: hidden;*/
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
      }
    }
  }
</style>
