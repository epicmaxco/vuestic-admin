<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-dropdown placement="right">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle theme-toggle"
          slot="actuator"
        >
          Top
          <i class="ion-ios-arrow-down arrow-down"/>
        </button>
        <template>
          <a
            class="dropdown-item" href="#"
            v-for="(link, idx) in links"
            :key="idx"
          >{{ link }}</a>
        </template>
      </vuestic-dropdown>
    </div>
  </div>
</template>

<script>
import VuesticDropdown from './VuesticDropdown.vue'

export default {
  components: {
    VuesticDropdown,
  },
  data () {
    return {
      links: [
        'Action',
        'Another action',
        'Something else here'
      ]
    }
  },
}
</script>
