<template>
  <VbDemo>
    <VbContainer title="Direction">
      <va-dropdown
        v-for="(value, key) in dropdownDirections"
        :position="key"
        :key="key"
      >
        {{ dropdownText }}
        <button slot="actuator">
          {{value}}
        </button>
      </va-dropdown>
    </VbContainer>

    <VbContainer title="Max Width">
      <va-dropdown max-width="150px">
        {{ dropdownText }}
        <button slot="actuator">Open</button>
      </va-dropdown>
    </VbContainer>

    <VbContainer title="Disabled">
      <va-dropdown disabled>
        {{ dropdownText }}
        <button slot="actuator">Open</button>
      </va-dropdown>
    </VbContainer>

    <VbContainer title="Nested Dropdown">
      <va-dropdown>
        <button slot="actuator">Open</button>
        <div>
          {{ dropdownText }}
          <va-dropdown>
            {{ dropdownText }}
            <button slot="actuator">Open child</button>
          </va-dropdown>
          <va-dropdown>
            <button slot="actuator">Open child</button>
            {{ dropdownText }}
            <va-dropdown>
              {{ dropdownText }}
              <button slot="actuator">Open child</button>
            </va-dropdown>
          </va-dropdown>
        </div>
      </va-dropdown>
    </VbContainer>

    <VbContainer title="Actuator events">
      <va-dropdown trigger-mode="hover">
        <span>Hover</span>
        <button slot="actuator">Hover</button>
      </va-dropdown>
      <va-dropdown trigger-mode="focus">
        <span>Focus</span>
        <button slot="actuator">Focus</button>
      </va-dropdown>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaDropdown from './VaDropdown.vue'

export default {
  components: {
    VaDropdown
  },
  data () {
    return {
      dropdownDirections: {
        T: 'Top',
        TR: 'Top Right',
        R: 'Right',
        BR: 'Bottom Right',
        B: 'Bottom',
        BL: 'Bottom Left',
        L: 'Left',
        TL: 'Top Left',
      },
      showDropdown: false,
      dropdownText: 'Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. ',
    }
  },
}
</script>
