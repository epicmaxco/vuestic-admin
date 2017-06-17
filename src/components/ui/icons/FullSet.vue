<template>
  <div class="setOfIcons">

    <div class="search">
      <h2>Search from {{set.name}}</h2>
      <input v-model="selector"/>
    </div>

    <template v-for="list in validatedLists">
      <widget :headerText="list.name">
        <template v-for="i in Math.floor(list.icons.length/12+1)">
          <div class="row">
            <div class="col-lg-1 col-md-2 col-sm-3 col-xs-4 vertical-align" v-for="j in 12">
              <div class="icon">
                <i :class="iconClass(list.icons[(i-1)*12 + j-1])"></i>
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
      isCorrect (icon) {

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
        selector: ''
      }
    }
  }
</script>

<style lang="scss">
  .setOfIcons {
    .search {
      text-align: center;
    }

    .row {
      text-align: center;
      div[class^='col'] {
        padding: 0;
        height: 5rem;
      }
      .icon {
        padding: 0 0 .5rem 0;
        .iconText {
          font-size: .6rem;
        }
        i {
          font-size: 1.30rem;
        }
      }
    }
  }
</style>

