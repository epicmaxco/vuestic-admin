<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-widget class="no-padding no-v-padding">
        <vuestic-breadcrumbs :breadcrumbs="breadcrumbs" :current-path="currentRoute"/>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs'

export default {
  name: 'app-breadcrumbs',
  props: {
    breadcrumbs: {
      type: Object,
      default: function () {
        return Breadcrumbs
      }
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name
    }
  }
}

</script>
