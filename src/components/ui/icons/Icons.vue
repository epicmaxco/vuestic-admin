<template>
  <div class="ui-icons row">
    <widget headerText="Icons" class="col-12">
      <div class="row">
        <small-set v-for="name in namesOfSetsOfIcons" :nameOfSet="name" class="col-lg-6"></small-set>
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
  .ui-icons {
    .widget-body {
      padding: 1.9375rem 2.6875rem 1.9375rem 2.125rem;
    }
  }
</style>
