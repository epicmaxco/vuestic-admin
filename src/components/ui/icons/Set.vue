<template>
  <div class="Set row">
    <div class="header col-12">
      <div class="row">
        <div class="header-text col-lg-4">
          <h2>{{set.name}}</h2>
          <router-link :to="{path: '/ui/icons'}">Back to icons</router-link>
        </div>

        <div class="search col-lg-4">
          <div class="form-group with-icon-left">
            <div class="input-group">
              <input id="input-icon-left" name="input-icon-left" required v-model="selector"/>
              <i class="fa fa-search icon-left input-icon"></i>
              <label class="control-label" for="input-icon-left">Icon Search</label><i class="bar"></i>
            </div>
          </div>
        </div>

        <div class="range col-lg-4">
          <h4>A</h4><slider v-bind="slider" v-model="iconSize"></slider><h2>A</h2>
        </div>
      </div>
    </div>
    <template v-for="list in validatedLists">
      <widget :headerText="list.name" class="col-12">
        <span v-if="list.icons.length === 0">No icons found</span>
        <template v-for="i in Math.floor(list.icons.length/8+1)">
          <div class="row">
            <div class="col-8-custom icon-grid-container" v-for="j in 8" v-if="list.icons[(i-1)*8 + j-1]">
              <div class="icon">
                <span :class="iconClass(list.icons[(i-1)*8 + j-1])" aria-hidden="true"
                      :style="'font-size: '+iconSize+'px'"></span>
                <div class="iconText">{{list.icons[(i-1)*8 + j-1]}}</div>
              </div>
            </div>
          </div>
        </template>
      </widget>
    </template>
  </div>
</template>

<script>
  import Widget from '../../vuestic-components/vuestic-widget/VuesticWidget'
  import Slider from 'vue-slider-component/src/vue2-slider.vue'

  export default {
    components: {
      Widget,
      Slider
    },
    name: 'set',
    props: ['name', 'sets'],
    methods: {
      iconClass (icon) {
        return this.set.prefix + ' ' + this.set.prefix + '-' + icon
      }
    },
    computed: {
      set () {
        for (let set of this.sets) {
          if (set.href === this.name) return set
        }
      },
      validatedLists () {
        if (this.selector === '') {
          return this.set.lists
        }
        let result = [{name: 'Found Icons', icons: []}]
        this.set.lists.forEach(list => {
          list.icons.forEach(icon => {
            if (icon.match(this.selector)) {
              result[0].icons.push(icon)
            }
          })
        })
        return result
      }
    },
    data: function () {
      return {
        selector: '',
        iconSize: 30,
        slider: {
          formatter: v => `${v}px`,
          height: 2,
          direction: 'horizontal',
          min: 20,
          max: 40,
          interval: 1,
          speed: 0.5
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import '../../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import '../../../../node_modules/bootstrap/scss/variables';

  .Set{
    .header {
      background-color: white;
      padding: 1.75rem 0 1.125rem 0;

      .header-text {
        text-align: left;
        padding-left: 2.5rem;
        h2 {
          margin-bottom: 0;
        }
      }

      .search {
        display: flex;
        align-items: center;
        justify-content: center;
        .input-group {
          width: 13.25rem;
        }
      }

      .range {
        .vue-slider-wrap {
          width: 9.3rem !important;
          .vue-slider-process {
            background-color: $brand-primary;
          }
          .vue-slider-tooltip {
            background-color: $brand-primary;
            border-color: $brand-primary;
          }
          .vue-slider-dot {
            background-color: $brand-primary;
            box-shadow: none;
          }
        }

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        h2, h4 {
          margin: .5rem;
        }
      }

      margin-bottom: 2rem;
    }

    .row {
      .icon-grid-container {
        padding-right: .625rem;
        padding-left: .625rem;
        margin: 0 0 .5rem;
        text-align: center;
        height: 6rem;
        position: relative;
        min-height: 1px;
        float: left;

        &:hover {
          background-color: $brand-primary;
          color: white;
          cursor: pointer;
        }
        .icon {
          padding: 1rem 0 0;
          margin: 0 0 .5rem;
          .iconText {
            font-size: .6rem;
            text-align: center;
          }
        }
      }
    }
  }
</style>

