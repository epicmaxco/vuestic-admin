<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-breadcrumbs :breadcrumbs="breadcrumbs" :current-path="currentRoute"/>
    </div>
  </div>
</template>

<script>
  import VuesticBreadcrumbs from '../../../vuestic-theme/vuestic-components/vuestic-breadcrumbs/VuesticBreadcrumbs'
  import Breadcrumbs from './../app-breadcrumbs/Breadcrumbs'

  export default {
    name: 'app-breadcrumbs',
    components: {
      VuesticBreadcrumbs,
    },
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
