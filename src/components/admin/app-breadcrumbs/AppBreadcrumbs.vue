<template>
  <div class="va-row">
    <div class="flex md12 xs12">
      <va-card no-padding-v>
        <vuestic-breadcrumbs
          :breadcrumbs="breadcrumbs"
          :currentRouteName="currentRouteName"
        />
      </va-card>
    </div>
  </div>
</template>

<script>
import { breadcrumbs } from './Breadcrumbs'

export default {
  name: 'app-breadcrumbs',
  data () {
    return {
      breadcrumbs: breadcrumbs,
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    },
  },
}

</script>
