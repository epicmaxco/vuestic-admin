<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-breadcrumbs :breadcrumbs="breadcrumbs" :current-path="currentRoute"/>
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
