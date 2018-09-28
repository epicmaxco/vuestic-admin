<template>
  <div class="demo-container">
    <div class="demo-container__item"
         v-for="icon in icons"
         :key="icon"
    >
      <vuestic-icon :icon="icon"/>
    </div>
  </div>
</template>

<script>
import VuesticIcon from './VuesticIcon.vue'
import { vuesticIcons } from './vuestic-icons'

export default {
  components: {
    VuesticIcon,
  },
  computed: {
    icons: () => {
      return Object.keys(vuesticIcons)
    },
  },
}
</script>
