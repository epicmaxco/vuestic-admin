<template>
  <div class="demo-container">
    <div
      class="demo-container__item"
      v-for="(dropdown, index) in dropdowns"
      :key="index"
    >
      <va-button
        type="button" class="theme-toggle"
        slot="activator" icon-right="ion-ios-arrow-down arrow-down">
        {{ dropdown.text }}
        <va-dropdown-old
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
        </va-dropdown-old>
      </va-button>
    </div>
  </div>
</template>

<script>
import VaDropdown from './VaDropdownOld.vue'

export default {
  components: {
    VaDropdown,
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
