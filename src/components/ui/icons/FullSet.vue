<template>
  <div class="setOfIcons">
    <template v-for="list in set.lists">
      <widget :headerText="list.name">
        <template v-for="i in Math.floor(list.icons.length/12)">
          <div class="row">
            <div class="col-lg-1 col-md-2 col-sm-3 col-xs-4" v-for="j in 12">
              <div class="icon">
                <div><i :class="iconClass(list.icons[j + i*10])"></i></div>
                {{list.icons[j + i*10]}}
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
      count (list) {

      }
    },
    computed: {
      ...mapGetters([
        'setOfIconsByName'
      ]),
      set () {
        return this.setOfIconsByName(this.nameOfSet)
      }
    }
  }
</script>

<style lang="scss">
  .setOfIcons {
    .row {
      margin: 2rem 0 2rem;
      text-align: center;
      .icon {
        text-align: center;
        font-size: 0.85rem;
        div {
          font-size: 1.30rem;
        }
      }
    }
  }
</style>

