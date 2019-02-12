<template>
  <div class="va-row">
    <div class="flex md12 xs12">
      <vuestic-widget class="no-padding no-v-padding">
        <vuestic-breadcrumbs
          :breadcrumbs="breadcrumbs"
          :currentRouteName="currentRouteName"
        />
      </vuestic-widget>
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
