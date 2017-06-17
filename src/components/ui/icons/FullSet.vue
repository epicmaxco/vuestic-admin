<template>
  <div class="setOfIcons">

    <div class="search">
      <h2>Search from {{set.name}}</h2>
      <input v-model="selector"/>
    </div>

    <div class="range">
      <input type="range" min="1" max="64" v-on:input="changeIconSize()"
             v-model.number.lazy="iconSize" id="iconSizeRange" /> {{iconSize}}px
    </div>

    <template v-for="list in validatedLists">
      <widget :headerText="list.name">
        <template v-for="i in Math.floor(list.icons.length/12+1)">
          <div class="row">
            <div class="col-lg-1 col-md-2 col-sm-3 col-xs-4" v-for="j in 12" v-if="list.icons[(i-1)*12 + j-1]">
              <div class="icon">
                <i :class="iconClass(list.icons[(i-1)*12 + j-1])" :style="'font-size: '+iconSize+'px'"></i>
                <div class="iconText">{{list.icons[(i-1)*12 + j-1]}}</div>
              </div>
            </div>
          </div>
        </template>
      </widget>
    </template>
  </div>
</template>

<script>
  import Widget from '../../common/widget/Widget'
  import {mapGetters} from 'vuex'

  export default {
    components: {Widget},
    name: 'full-set',
    props: ['nameOfSet'],
    methods: {
      iconClass (icon) {
        return this.set.prefix + ' ' + this.set.prefix + '-' + icon
      },
      changeIconSize (icon) {

      }
    },
    computed: {
      ...mapGetters([
        'setOfIconsByName'
      ]),
      set () {
        return this.setOfIconsByName(this.nameOfSet)
      },
      validatedLists () {
        if (this.selector === '') {
          return this.set.lists
        }
        let result = []
        this.set.lists.forEach(list => {
          let resultIcons = []
          list.icons.forEach(icon => {
            if (icon.match(this.selector)) {
              resultIcons.push(icon)
            }
          })
          result.push({name: list.name, icons: resultIcons})
        })
        return result
      }
    },
    data: function () {
      return {
        selector: '',
        iconSize: 16
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .setOfIcons {
    .search {
      text-align: center;
    }

    .range {
      text-align: center;
    }

    .row {
      text-align: center;
      div[class^='col'] {
        padding: 0;
        margin: 0 0 .5rem;
        &:hover{
          background-color: $brand-primary;
          .icon {
            color: $white;
          }
        }
        .icon {
          padding: 1rem;
          .iconText {
            font-size: .6rem;
          }
          i {
            /*font-size: 1.30rem;*/
          }
        }
      }
    }
  }
</style>

