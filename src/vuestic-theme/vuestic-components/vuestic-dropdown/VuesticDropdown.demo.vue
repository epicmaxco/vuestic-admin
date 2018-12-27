<template>
  <div class="demo-container">
    <div
      class="demo-container__item"
      v-for="(dropdown, index) in dropdowns"
      :key="index"
    >
      <button
        type="button"
        class="btn btn-primary dropdown-toggle theme-toggle"
        slot="actuator"
      >
        {{ dropdown.text }}
        <i class="ion-ios-arrow-down arrow-down"></i>
        <vuestic-dropdown
          v-model="dropdown.value"
          :position="dropdown.position"
        >
          <div class="q-popover__container">
            <a
              class="dropdown-item"
              href="#"
              v-for="(link, index) in links"
              :key="index"
            >{{ link }}</a>
            <div class="flex lg6"></div>
          </div>
        </vuestic-dropdown>
      </button>
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
        'Something else here',
      ],
      dropdowns: [
        {
          text: 'top',
          value: false,
          position: 'top',
        },
        {
          text: 'right',
          value: false,
          position: 'right',
        },
        {
          text: 'bottom',
          value: false,
          position: 'bottom',
        },
        {
          text: 'left',
          value: false,
          position: 'left',
        },
      ],
    }
  },
}
</script>
