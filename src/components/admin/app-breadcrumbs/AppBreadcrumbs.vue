<template>
  <div class="va-row">
    <div class="flex md12 xs12">
      <va-card no-padding-v>
        <va-breadcrumbs
          :breadcrumbs="breadcrumbs"
          :currentRouteName="currentRouteName"
        />
      </va-card>
    </div>
  </div>
</template>

<script>
import { navigationRoutes } from './NavigationRoutes'

export default {
  name: 'app-breadcrumbs',
  data () {
    return {
      breadcrumbs: navigationRoutes,
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    },
  },
}

</script>
