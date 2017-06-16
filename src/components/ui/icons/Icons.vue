<template>
  <div class="ui-icons">
    <widget headerText="Icons">
      <div class="row">
        <small-set v-for="name in namesOfSetsOfIcons" :nameOfSet="name" class="col-lg-4 col-sm-6 col-md-4"></small-set>
      </div>
    </widget>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import SmallSet from './SmallSet'
  import FullSet from './FullSet'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'icons',
    components: {
      FullSet,
      Widget,
      SmallSet
    },
    computed: {
      ...mapGetters([
        'namesOfSetsOfIcons'
      ]),
      ...mapMutations([
        'downloadSetsOfIcons'
      ])
    },
    created: function () {
      this.downloadSetsOfIcons()
    }

  }
</script>

<style lang="scss">
  .widget {

  }
</style>
