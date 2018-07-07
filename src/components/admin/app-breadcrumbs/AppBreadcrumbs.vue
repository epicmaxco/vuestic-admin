<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-breadcrumbs :breadcrumbs="normalizedBreadcrumbs"/>
    </div>
  </div>
</template>

<script>
  import VuesticBreadcrumbs from '../../../vuestic-theme/vuestic-components/vuestic-breadcrumbs/VuesticBreadcrumbs'

  export default {
    name: 'app-breadcrumbs',
    components: {
      VuesticBreadcrumbs,
    },
    props: {
      breadcrumbs: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    computed: {
      normalizedBreadcrumbs () {
        return {
          home: this.breadcrumbs.home,
          other: this.findInNestedByName(this.breadcrumbs.other, this.$route.name)
        }
      }
    },
    methods: {
      findInNestedByName (array, name) {
        if (typeof array !== 'undefined') {
          for (let i = 0; i < array.length; i++) {
            if (array[i].path === name) return [{...array[i]}]
            let a = this.findInNestedByName(array[i].children, name)
            if (a != null) {
              a.unshift({...array[i]})
              return [...a]
            }
          }
        }
        return null
      }
    },
  }


</script>
